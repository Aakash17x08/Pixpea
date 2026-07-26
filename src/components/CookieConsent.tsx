import { useEffect, useRef, useState } from "react";

const CONSENT_COOKIE = "pixpea_consent";
const LS_KEY = "pixpea_consent_v2";

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : null;
};

const setCookie = (name: string, value: string, days: number = 180) => {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();

  document.cookie =
    `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax;` +
    (location.protocol === "https:" ? " Secure;" : "");
};

interface ConsentChoices {
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
}

const defaultChoices: ConsentChoices = {
  analytics: false,
  marketing: false,
  decided: false,
};

function readChoices(): ConsentChoices {
  if (typeof window === "undefined") return defaultChoices;

  try {
    const parsed = JSON.parse(localStorage.getItem(LS_KEY) || "null");
    return parsed && typeof parsed === "object"
      ? { ...defaultChoices, ...parsed }
      : defaultChoices;
  } catch {
    return defaultChoices;
  }
}

function applyConsentMode({
  analytics,
  marketing,
}: {
  analytics: boolean;
  marketing: boolean;
}) {
  if (
    typeof window === "undefined" ||
    typeof (window as any).gtag !== "function"
  )
    return;

  (window as any).gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}

function saveChoices(choices: ConsentChoices, cookieValue: string = "custom") {
  if (typeof window === "undefined") return;

  localStorage.setItem(LS_KEY, JSON.stringify({ ...choices, decided: true }));
  setCookie(CONSENT_COOKIE, cookieValue);
  applyConsentMode(choices);
}

function sendInitialPageView() {
  if (
    typeof window === "undefined" ||
    typeof (window as any).gtag !== "function"
  )
    return;

  (window as any).gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

interface CookieConsentProps {
  policyUrl?: string;
  onAccept?: () => void;
  onReject?: () => void;
}

export default function CookieConsent({
  policyUrl = "/privacy",
  onAccept,
  onReject,
}: CookieConsentProps) {
  const [choices, setChoices] = useState<ConsentChoices>(defaultChoices);
  const [showBar, setShowBar] = useState(false);
  const [openPrefs, setOpenPrefs] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cookieVal = getCookie(CONSENT_COOKIE);
    const stored = readChoices();
    setChoices(stored);

    if (!cookieVal || !stored.decided) {
      if (
        typeof window !== "undefined" &&
        typeof (window as any).gtag === "function"
      ) {
        (window as any).gtag("consent", "default", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      }

      const showLater = () => {
        if (typeof window === "undefined") return;

        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(
            () => setShowBar(true),
            { timeout: 2000 }
          );
        } else {
          setTimeout(() => setShowBar(true), 800);
        }
      };

      showLater();
    } else {
      applyConsentMode(stored);
      if (stored.analytics) sendInitialPageView();
    }

    if (typeof window !== "undefined") {
      (window as any).showCookiePrefs = () => setOpenPrefs(true);
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpenPrefs(false);

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const acceptAll = () => {
    const updated = { analytics: true, marketing: true, decided: true };
    setChoices(updated);
    saveChoices(updated, "1");
    sendInitialPageView();
    setShowBar(false);
    setOpenPrefs(false);
    onAccept?.();
  };

  const declineAll = () => {
    const updated = { analytics: false, marketing: false, decided: true };
    setChoices(updated);
    saveChoices(updated, "0");
    setShowBar(false);
    setOpenPrefs(false);
    onReject?.();
  };

  const savePrefs = () => {
    saveChoices(choices, "custom");
    if (choices.analytics) sendInitialPageView();
    setShowBar(false);
    setOpenPrefs(false);
  };

  if (!showBar && !openPrefs) return null;

  return (
    <>
      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="rounded-2xl border border-[#2a2f36] bg-[#0d1117]/90 backdrop-blur-md shadow-2xl p-4 text-white">
              <div className="flex justify-between items-center gap-4">
                <p className="text-sm text-gray-300">
                  We use cookies to improve your experience.
                </p>

                <div className="flex gap-2">
                  <button onClick={declineAll}>Decline</button>
                  <button onClick={() => setOpenPrefs(true)}>Preferences</button>
                  <button onClick={acceptAll}>Accept all</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}