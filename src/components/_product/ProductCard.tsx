// components/ProductCard.tsx

import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
}

const ProductCard = ({ title, description, imageSrc, buttonLabel }: ProductCardProps) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-2xl shadow-blue-gray-500/40 bg-gradient-to-r from-gray-400 to-gray-500">
        <Image src={imageSrc} alt={title} width={500} height={300} className="object-cover w-full h-full" />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-center flex-shrink-0">
        <button
          type="button"
          className="cursor-pointer select-none rounded-lg bg-[#508D4E] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#508D4E]/20 transition-all hover:shadow-lg hover:shadow-[#508D4E]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
