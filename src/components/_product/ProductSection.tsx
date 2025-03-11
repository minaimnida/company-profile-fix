
import ProductCard from './ProductCard';

interface Product {
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
}

const productData: Product[] = [
  {
    title: 'Modern Sofa Set',
    description: 'Add elegance and comfort to your living room with our modern sofa set.',
    imageSrc: '/product1.jpg',
    buttonLabel: 'Add to Cart',
  },
  {
    title: 'Indoor Plant Collection',
    description: 'Bring a touch of greenery into your home with our selection of indoor plants.',
    imageSrc: '/product2.jpg',
    buttonLabel: 'Add to Cart',
  },
  {
    title: 'Scandinavian Dining Table',
    description: 'A beautiful and minimalist dining table perfect for your kitchen or dining area.',
    imageSrc: '/product3.jpg',
    buttonLabel: 'Add to Cart',
  },
  {
    title: 'Nordic Dining Table',
    description:
      'A sleek and minimal dining table crafted from natural wood, bringing a Scandinavian touch to your dining space.',
    imageSrc: '/product6.jpg',
    buttonLabel: 'Add to Cart',
  },
  {
    title: 'Cozy Armchair',
    description: 'Relax in style with our comfortable armchair, perfect for any living room.',
    imageSrc: '/product4.jpeg',
    buttonLabel: 'Add to Cart',
  },
  {
    title: 'Modular Bookshelf',
    description:
      'A modern modular bookshelf that offers a functional and aesthetic design, perfect for creating a clutter-free space.',
    imageSrc: '/product5.jpg',
    buttonLabel: 'Add to Cart',
  },
  {
    title: 'Minimalist TV Stand',
    description:
      'A simple and functional TV stand with clean lines, providing ample storage while maintaining a minimalist style.',
    imageSrc: '/product7.jpeg',
    buttonLabel: 'Add to Cart',
  },
  {
    title: 'Aero Lounge Chair',
    description:
      'A modern lounge chair with minimalistic design, featuring a comfortable yet stylish wooden frame.',
    imageSrc: '/product8.jpg',
    buttonLabel: 'Add to Cart',

  },

];

const ProductSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#508D4E]">Our Products</h2>
        <p className="text-lg text-gray-600 mt-4">
          Explore our collection of stylish furniture and indoor plants for every space.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 mx-auto justify-items-center">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              buttonLabel={product.buttonLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
