import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How AI is Revolutionizing CGI Production",
    summary:
      "Explore how artificial intelligence is streamlining workflows, enhancing creativity, and reducing turnaround time in modern CGI studios.",
    slug: "ai-in-cgi",
    date: "July 15, 2025",
  },
  {
    title:
      "Behind the Scenes: Our Process for Creating Stunning Product Videos",
    summary:
      "Take a peek into our creative workflow and learn how we approach storytelling, lighting, and 3D animation in every commercial we produce.",
    slug: "behind-the-scenes-product-videos",
    date: "July 8, 2025",
  },
  {
    title: "Why Your Brand Needs CGI Marketing in 2025",
    summary:
      "In a saturated digital market, learn why CGI and 3D content is the future of brand storytelling and customer engagement.",
    slug: "cgi-marketing-2025",
    date: "June 28, 2025",
  },
];

const Blog = () => {
  return (
    <div className="px-6 md:px-20 py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 border-b-4 border-orange-500 pb-2">
            Our Blog
          </h1>
        </div>

        {/* Intro */}
        <p className="text-xl md:text-2xl text-gray-700 text-center mb-16">
          Insights, behind-the-scenes, and the latest trends from the world of
          CGI, AI, and visual storytelling — straight from the Pixpea Studio
          team.
        </p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map(({ title, summary, slug, date }, i) => (
            <Link key={i} href={`/blog/${slug}`}>
              <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700 mb-4">{summary}</p>
                </div>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
