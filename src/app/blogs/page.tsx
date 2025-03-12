import React from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Tips to Keep Your Indoor Plants Thriving",
    excerpt: "Discover essential care tips to help your plants stay happy and healthy all year round.",
    image: "/blog1.jpg",
    link: "/blogs1",
  },
  {
    id: 2,
    title: "Blending Furniture and Greenery for a Cozy Home",
    excerpt: "Learn how to style your space by combining furniture and plants for a natural, calming vibe.",
    image: "/blog2.jpg",
    link: "/blogs2",
  },
  {
    id: 3,
    title: "Low-Maintenance Plants for Busy People",
    excerpt: "Short on time? These beautiful plants thrive with minimal attention.",
    image: "/blog3.jpg",
    link: "/blogs3",
  },
];

const BlogCard = ({ title, excerpt, image, link }: BlogPost) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
        <Image src={image} alt={title} width={500} height={300} className="object-cover w-full h-full" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-green-700">{title}</h3>
        <p className="text-gray-600 mt-2">{excerpt}</p>
        <a href={link} className="inline-block mt-4 text-green-600 hover:text-green-500 font-medium transition">
          Read More →
        </a>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <main className="bg-gray-50 py-10">
      <h1 className="text-5xl font-bold text-green-700 text-center my-10">Tips & Tricks Blog</h1>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto justify-items-center">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} title={post.title} excerpt={post.excerpt} image={post.image} link={post.link} id={post.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
