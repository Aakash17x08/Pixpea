// // src/components/BlogSection.jsx
// import Link from "next/link";

// const blogPosts = [
//   {
//     title: "Behind the Scenes of a 3D Commercial",
//     slug: "behind-the-scenes-3d-commercial",
//     summary: "How we craft cinematic 3D ads from scratch at Pixpea Studio...",
//   },
//   {
//     title: "AI Meets CGI – Our Workflow",
//     slug: "ai-meets-cgi-workflow",
//     summary: "Blending artificial intelligence with human creativity...",
//   },
// ];

// const BlogSection = () => {
//   return (
//     <section className="bg-white py-20 px-6 md:px-24">
//       <h2 className="text-5xl font-bold mb-16 text-black">From Our Blog</h2>

//       <div className="grid md:grid-cols-2 gap-10">
//         {blogPosts.map((post) => (
//           <div
//             key={post.slug}
//             className="group relative bg-[#f3f3f3] p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-white"
//           >
//             <Link href={`/blog/${post.slug}`}>
//               <h3 className="text-2xl font-semibold text-black mb-3 group-hover:underline">
//                 {post.title}
//               </h3>
//             </Link>
//             <p className="text-gray-600 leading-relaxed mb-5">{post.summary}</p>
//             <Link href={`/blog/${post.slug}`}>
//               <span className="inline-block mt-4 text-sm text-white bg-black px-5 py-2 rounded-full transition-transform duration-300 hover:bg-orange-500 hover:-translate-y-1">
//                 Read More →
//               </span>
//             </Link>
//           </div>
//         ))}
//       </div>

//       <div className="mt-16 text-center">
//         <Link href="/blog">
//           <button className="px-6 py-3 text-white font-semibold bg-orange-600 hover:bg-black transition duration-300 rounded-full shadow-md hover:shadow-lg">
//             View All Blog Posts
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;
