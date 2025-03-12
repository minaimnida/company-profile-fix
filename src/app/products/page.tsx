import React from "react";
import Image from "next/image";
import TopPixSection from "./Top/TopPixSection";

interface Product {
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
}

const productData: Product[] = [
  {
    title: "Modern Sofa Set",
    description: "Add elegance and comfort to your living room with our modern sofa set.",
    imageSrc: "/product1.jpg",
    buttonLabel: "Add to Cart",
  },
  {
    title: "Indoor Plant Collection",
    description: "Bring a touch of greenery into your home with our selection of indoor plants.",
    imageSrc: "/product2.jpg",
    buttonLabel: "Add to Cart",
  },
  {
    title: "Scandinavian Dining Table",
    description: "A beautiful and minimalist dining table perfect for your kitchen or dining area.",
    imageSrc: "/product3.jpg",
    buttonLabel: "Add to Cart",
  },
  {
    title: "Nordic Dining Table",
    description: "A sleek and minimal dining table crafted from natural wood, bringing a Scandinavian touch to your dining space.",
    imageSrc: "/product6.jpg",
    buttonLabel: "Add to Cart",
  },
  {
    title: "Cozy Armchair",
    description: "Relax in style with our comfortable armchair, perfect for any living room.",
    imageSrc: "/product4.jpeg",
    buttonLabel: "Add to Cart",
  },
  {
    title: "Modular Bookshelf",
    description: "A modern modular bookshelf that offers a functional and aesthetic design, perfect for creating a clutter-free space.",
    imageSrc: "/product5.jpg",
    buttonLabel: "Add to Cart",
  },
  {
    title: "Minimalist TV Stand",
    description: "A simple and functional TV stand with clean lines, providing ample storage while maintaining a minimalist style.",
    imageSrc: "/product7.jpeg",
    buttonLabel: "Add to Cart",
  },
  {
    title: "Aero Lounge Chair",
    description: "A modern lounge chair with minimalistic design, featuring a comfortable yet stylish wooden frame.",
    imageSrc: "/product8.jpg",
    buttonLabel: "Add to Cart",
  },
];

const ProductCard = ({ title, description, imageSrc, buttonLabel }: Product) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-white shadow-lg shadow-gray-300">
        <Image src={imageSrc} alt={title} width={500} height={300} className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow text-center">
        <h5 className="mb-2 text-xl font-semibold text-gray-900">{title}</h5>
        <p className="text-base font-light text-gray-700">{description}</p>
      </div>
      <div className="p-6 pt-0 flex justify-center">
        <button
          type="button"
          className="cursor-pointer select-none rounded-lg bg-[#508D4E] py-3 px-6 text-center font-bold uppercase text-white shadow-md shadow-[#508D4E]/20 transition-all hover:shadow-lg hover:bg-[#3b6e3b] focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

const ProductPage = () => {
  return (
    <main className="bg-gray-50 py-10">
      <h1 className="text-5xl font-bold text-[#508D4E] text-center my-10">Our Products</h1>
      <div className="max-w-7xl mx-auto px-6 text-center">
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
      <TopPixSection />
      <footer className="bg-green-700 text-white text-center py-6 mt-16">
        <p className="text-lg">&copy; {new Date().getFullYear()} Planto - Friendly Plant & Furniture Shop</p>
        <p className="text-sm mt-1">Bringing nature and style to your home.</p>
      </footer>
    </main>
  );
};

export default ProductPage;
