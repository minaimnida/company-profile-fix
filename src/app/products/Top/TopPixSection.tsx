// components/ProductSection.tsx
import TopPixitem from './TopPixitem';

const productData = [
  {
    title: 'Monstera Deliciosa (Swiss Cheese Plant)',
    description:
    "Known for its unique split leaves, the Monstera adds a tropical vibe to any room. This hardy plant thrives in low light and is perfect for creating a lush, green corner. Its dramatic leaves make it a statement piece in any space.",
    imageSrc: '/test3.jpeg',
    buttonText: 'Shop Monstera Deliciosa',
  },
  {
    title: 'Fiddle Leaf Fig (Ficus Lyrata)',
    description:
    'This large-leafed beauty is perfect for bringing a touch of nature indoors, adding height and a modern aesthetic. Its bold, glossy leaves are great for bright spaces, and it is a popular choice for minimalist or contemporary interiors.',
    imageSrc: '/top2.jpeg',
    buttonText: 'Shop Fiddle Leaf Fig',
  },
  {
    title: 'Snake Plant (Sansevieria)',
    description:
    'A low-maintenance plant with striking vertical leaves, ideal for improving air quality and adding greenery to tight spaces. Its tolerance to low light and irregular watering makes it a perfect choice for beginners or busy people.',
    imageSrc: '/top3.jpeg',
    buttonText: 'Shop Snake Plant',
  },
  {
    title: 'Peace Lily (Spathiphyllum)',
    description:
    'Known for its beautiful white flowers, the Peace Lily is perfect for those looking to add elegance to their home with minimal care. It thrives in low light and is also known for its air-purifying properties, making it both a functional and stylish plant.',
    imageSrc: '/top4.jpeg',
    buttonText: 'Shop Peace Lily',
  }
];

const TopPixSection = () => {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700">Featured Products</h2>
        <p className="text-lg text-gray-600 mt-4">
          Explore our collection of unique products for your space.
        </p>

        <div className="mt-8 space-y-12">
          {productData.map((product, index) => (
            <TopPixitem
              key={index}
              index={index} // Pass index to control layout
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              buttonText={product.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPixSection;
