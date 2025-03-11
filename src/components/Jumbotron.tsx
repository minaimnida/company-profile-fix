import Image from "next/image";

const Jumbotron = () => {
  return (
    <section className="py-0 md:py-10 px-0 md:px-12 w-full h-auto flex flex-col md:flex-row items-center bg-[#f9f5ef]  overflow-hidden gap-8">

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-0 md:mb-0">
        <Image
          src="/jumbopic.jpeg" // Change to the correct image path
          alt="Plants in Living Room"
          width={800}
          height={800}
          className="object-cover w-full md:w-auto md:h-[80vh] md:rounded-2xl"  // Responsive Image scaling
        />
      </div>


      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 px-6 md:px-2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Plants for the <br />
          <span className="text-gray-800">Living Room</span>
        </h1>
        <p className="text-base text-gray-700">
          A touch of nature completes the look. Elevate your space with the
          perfect blend of style and comfort by pairing lush greenery with
          carefully curated furniture. Our collection brings harmony to your
          home, softening lines, adding warmth, and seamlessly matching your
          plants with your decor.{" "}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4 py-4 md:py-0">
          <a
            href="#products"
            className="border border-[#508D4E] px-6 py-3 rounded-lg text-[#508D4E] hover:bg-[#508D4E] hover:text-white transition"
          >
            Explore Collection
          </a>
        </div>
      </div>


    </section>
  );
};

export default Jumbotron;
