import Image from 'next/image';

type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    link: string;
};

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "5 Tips to Keep Your Indoor Plants Thriving",
        excerpt: "Discover essential care tips to help your plants stay happy and healthy all year round.",
        image: "/blog1.jpg",
        link: "/blogs1"
    },
    {
        id: 2,
        title: "Blending Furniture and Greenery for a Cozy Home",
        excerpt: "Learn how to style your space by combining furniture and plants for a natural, calming vibe.",
        image: "/blog2.jpg",
        link: "/blog/cozy-home-guide"
    },
    {
        id: 3,
        title: "Low-Maintenance Plants for Busy People",
        excerpt: "Short on time? These beautiful plants thrive with minimal attention.",
        image: "/blog3.jpg",
        link: "/blog/low-maintenance-plants"
    }
];

const BlogSection = () => {
    return (
        <section id="blog" className="py-20 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-green-700">Tips & Tricks Blog</h2>
                <p className="text-lg text-gray-600 mt-4">
                    Explore our latest articles to learn more about plant care, home styling, and sustainable living.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                            <div className="relative w-full h-60">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="text-xl font-semibold text-green-700">{post.title}</h3>
                                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                                <a
                                    href={post.link}
                                    className="inline-block mt-4 text-green-600 hover:text-green-500 font-medium transition"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
