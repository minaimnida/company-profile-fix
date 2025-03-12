export default function Blogs1() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <article className="max-w-2xl w-full container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Discover Essential Care Tips to Keep Your Plants Happy and Healthy All Year Round
        </h1>
        <p className="text-base text-gray-700 mb-4">
          Keeping your plants thriving throughout the year requires attention to their basic needs. Here are some simple yet effective care tips to ensure your plants stay healthy in every season:
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Provide the Right Amount of Light</h2>
          <p className="text-gray-700">
            Different plants have different light requirements. Place sun-loving plants near bright windows, while shade-loving ones thrive in indirect light. Rotate them occasionally for even growth.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Water Wisely</h2>
          <p className="text-gray-700">
            Overwatering is a common mistake. Check the soil before watering—if it feels dry about an inch deep, it’s time to water. Use pots with drainage holes to prevent root rot.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Choose the Right Soil</h2>
          <p className="text-gray-700">
            Each plant type has specific soil needs. Use well-draining soil for succulents and cacti, while tropical plants prefer nutrient-rich, moisture-retaining soil.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Maintain Proper Humidity</h2>
          <p className="text-gray-700">
            Some plants, like ferns and orchids, need higher humidity. Use a humidifier, mist the leaves, or place a tray of water near the plant to maintain moisture levels.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Feed Your Plants</h2>
          <p className="text-gray-700">
            Plants need nutrients to grow well. Use organic fertilizers or liquid plant food according to the plant’s needs, especially during their active growing seasons (spring and summer).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Prune and Clean Regularly</h2>
          <p className="text-gray-700">
            Trim dead leaves and spent flowers to encourage new growth. Wipe dusty leaves to help plants absorb light efficiently.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Watch Out for Pests</h2>
          <p className="text-gray-700">
            Check leaves and stems for signs of pests like aphids or spider mites. Use natural solutions like neem oil or soapy water to keep infestations under control.
          </p>
        </section>

        <p className="text-gray-700 mt-6">
          By following these simple care tips, your plants will stay lush and vibrant all year round, bringing beauty and fresh air into your space.
        </p>

        <p className="text-gray-700 mt-4 font-semibold text-center">Happy Planting!</p>
      </article>

      <footer className="container mx-auto bg-green-700 text-white text-center py-6 mt-16">
        <p className="text-lg">&copy; {new Date().getFullYear()} Planto - Friendly Plant & Furniture Shop</p>
        <p className="text-sm mt-1">Bringing nature and style to your home.</p>
      </footer>
    </div>
  );
}
