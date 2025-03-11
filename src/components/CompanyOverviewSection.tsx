const CompanyOverviewSection = () => {
    return (
      <section
        id="about"
        className="py-20 bg-white text-gray-800 text-center px-4"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-green-700">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Planto, we believe every home deserves the warmth of nature. That’s why we combine
              beautifully crafted furniture with thriving houseplants, helping you create your perfect cozy space.
            </p>
          </div>
  
          {/* History */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-2xl font-bold text-green-600">Our History</h3>
            <p className="mt-3 text-gray-700">
              Planto was born in 2022 out of a simple idea — why choose between stylish furniture
              and vibrant greenery when you can have both? From a humble pop-up in a local market to
              an online store with customers across the country, our journey has been fueled by a
              love for natural spaces.
            </p>
          </div>
  
          {/* Our Team */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-2xl font-bold text-green-600">Meet Our Team</h3>
            <p className="mt-3 text-gray-700">
              Our team is a blend of furniture designers, plant enthusiasts, and sustainability advocates.
              Together, we curate collections that bring out the best in both plants and furniture, so
              every piece you buy is a perfect match for your space.
            </p>
          </div>
  
          {/* Our Culture */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-2xl font-bold text-green-600">Our Culture</h3>
            <p className="mt-3 text-gray-700">
              At Planto, we embrace a culture of care — for our products, our customers, and the environment.
              We partner with local artisans and sustainable growers, ensuring every purchase supports
              greener living and ethical craftsmanship.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default CompanyOverviewSection;
  