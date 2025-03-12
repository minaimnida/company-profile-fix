export default function Blogs1() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <article className="max-w-2xl w-full container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          How to Style Your Space with Furniture and Plants for a Natural, Calming Vibe
        </h1>
        <p className="text-base text-gray-700 mb-4">
          Bringing nature indoors is a great way to create a cozy and refreshing atmosphere. By combining furniture and plants thoughtfully, you can design a space that feels both stylish and calming. Here’s how:
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Choose a Balanced Color Palette</h2>
          <p className="text-gray-700">
            Opt for neutral or earthy tones in your furniture, such as beige, wood, or soft greens. These colors complement the natural beauty of plants and create a soothing environment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use Plants as Statement Pieces</h2>
          <p className="text-gray-700">
            Large plants like fiddle leaf figs or monstera can serve as focal points in your living area. Position them near furniture to create a natural flow in the room.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Layer Different Plant Sizes</h2>
          <p className="text-gray-700">
            Mix and match plant heights to add depth. Place tall plants beside sofas, medium-sized ones on shelves, and small potted plants on tables to create a visually appealing arrangement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Incorporate Natural Materials</h2>
          <p className="text-gray-700">
            Wood, rattan, bamboo, and stone furniture enhance the organic feel of the space. Pairing these materials with greenery strengthens the natural and calming ambiance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Maximize Natural Light</h2>
          <p className="text-gray-700">
            Position furniture near windows to allow natural light to brighten both the room and the plants. Sheer curtains help diffuse the light for a soft and airy feel.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Use Plant Stands and Hanging Planters</h2>
          <p className="text-gray-700">
            If you’re short on space, vertical arrangements like hanging planters or tiered plant stands can add greenery without cluttering the floor.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Add Cozy Elements</h2>
          <p className="text-gray-700">
            Soft cushions, textured rugs, and warm lighting complement the fresh look of plants, making the space feel more inviting and comfortable.
          </p>
        </section>

        <p className="text-gray-700 mt-6">
          By blending furniture and plants in a harmonious way, you can transform any space into a tranquil and nature-inspired retreat.
        </p>
      </article>
      <footer className="container mx-auto bg-green-700 text-white text-center py-6 mt-16">
        <p className="text-lg">&copy; {new Date().getFullYear()} Planto - Friendly Plant & Furniture Shop</p>
        <p className="text-sm mt-1">Bringing nature and style to your home.</p>
      </footer>
    </div>
  );
}
