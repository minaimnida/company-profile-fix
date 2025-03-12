import Image from "next/image";

interface TopPixitemProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  index: number; // To alternate layout
}

const TopPixitem = ({
  title,
  description,
  imageSrc,
  buttonText,
  index,
}: TopPixitemProps) => {
  // Check if index is even or odd to determine layout
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center ${
        isEven ? "lg:flex-row-reverse" : ""
      } bg-white rounded-lg shadow-md p-6`}
    >
      {/* Left side (Image) */}
      <div className="lg:w-1/2">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Right side (Text) */}
      <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0 text-left">
        <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 text-base leading-relaxed">
          {description}
        </p>
        <br />
        <button className="cursor-pointer select-none rounded-lg bg-[#508D4E] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#508D4E]/20 transition-all hover:shadow-lg hover:shadow-[#508D4E]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TopPixitem;
