const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white text-gray-800">
            <div className="max-w-5xl mx-auto px-6 text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-[#508D4E]">Our Story</h2>
                <p className="text-lg text-gray-600 mt-4">
                    At Planto, we believe that every home deserves a touch of nature. Our mission is to bring together
                    beautifully crafted furniture and thriving houseplants, helping you create a cozy and refreshing space.
                </p>

                {/* Company History */}
                <div className="mt-12 bg-[#f9f5ef] p-6 rounded-lg shadow-md text-left">
                    <h3 className="text-2xl font-bold text-[#508D4E]">Our Journey</h3>
                    <p className="mt-3 text-gray-700">
                        Founded in 2022, Planto started as a small passion project for plant lovers and interior designers.
                        Our goal was simple: to create a space where stylish furniture and vibrant plants could coexist in harmony.
                        Today, Planto is a go-to destination for those who want to bring warmth and nature into their homes.
                    </p>
                </div>

                {/* Team & Values */}
                <div className="mt-8 bg-[#f9f5ef] p-6 rounded-lg shadow-md text-left">
                    <h3 className="text-2xl font-bold text-[#508D4E]">Our Team & Values</h3>
                    <p className="mt-3 text-gray-700">
                        Our team is made up of designers, plant specialists, and sustainability advocates who share a love for
                        creating beautiful and eco-friendly living spaces. At Planto, we value craftsmanship, sustainability, and
                        customer happiness. Every product is designed with care, ensuring that both furniture and plants thrive together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
