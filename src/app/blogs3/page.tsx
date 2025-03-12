export default function Blogs1() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center p-8">
      <article className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Short on Time? These Beautiful Plants Thrive with Minimal Attention
        </h1>
        <p className="text-base text-gray-700 mb-4">
          Love greenery but don’t have time for high-maintenance plants? No worries! These easy-care plants will add beauty to your space with minimal effort.
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Snake Plant 🌿</h2>
          <p className="text-gray-700">
            Tolerates low light and needs watering only every few weeks. It also purifies the air!
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. ZZ Plant 🌱</h2>
          <p className="text-gray-700">
            Thrives in almost any lighting condition and requires very little water—perfect for busy plant lovers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Pothos 🍃</h2>
          <p className="text-gray-700">
            Grows beautifully in low to bright light and only needs occasional watering. Plus, it looks great in hanging planters!
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Succulents & Cacti 🌵</h2>
          <p className="text-gray-700">
            These sun-loving plants store water in their leaves, so they can go weeks without care.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Spider Plant 🕸️</h2>
          <p className="text-gray-700">
            Resilient and adaptable, this plant even produces baby plants that you can propagate easily.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Peace Lily 🌼</h2>
          <p className="text-gray-700">
            Thrives in low light and only needs weekly watering. Bonus: It helps purify indoor air.
          </p>
        </section>

        <p className="text-gray-700 mt-6">
          With these low-maintenance plants, you can enjoy a green, vibrant home without the stress of constant care.
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
