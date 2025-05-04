import React from "react";

const listOfProducts = [
  {
    name: "Instant Pot Duo Plus, 6-Quart Whisper",
    image: "./src/assets/image 26.png",
    review: "./src/assets/stars.png",
    stock: "21 left in stock",
    price: "$31.88",
    suggestion: true,
  },
  {
    name: "INIU Portable Charger",
    image: "./src/assets/image 30.png",
    price: "$18.90",
    review: "./src/assets/star.png",
    stock: "Not available in stock",
  },
  {
    name: "Philips Viva Collection SoupMaker",
    image: "./src/assets/image 29.png",
    price: "$8.90",
    review: "./src/assets/stars.png",
    stock: "19 left in stock",
    suggestion: true,
  },
  {
    name: "Sunbeam Steammaster 1400 Watt Iron",
    image: "./src/assets/image 28.png",
    price: "$18.88",
    review: "./src/assets/star.png",
    stock: "Re-stocked soon",
  },
  {
    name: "VIZIO 32-inch HD Smart TV 720p LED",
    image: "./src/assets/image 27.png",
    price: "$80.33",
    review: "./src/assets/stars.png",
    stock: "Re-stocked soon",
  },
];

const TopSellers = () => {
  return (
    <>
      {listOfProducts.map((product, i) => (
        <div
          key={i}
          className="w-full sm:w-[230px] bg-[#EDEDED] border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition- p-4"
        >
          {product.suggestion && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full absolute">
              Recommended
            </span>
          )}
          <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full object-contain"
            />
          </div>
          <h3 className="text-sm font-medium mb-2 line-clamp-2">
            {product.name}
          </h3>
          <img src={product.review} alt="rating" className="h-4 mb-1" />
          <p className="text-gray-500 text-xs mb-2">{product.stock}</p>
          <p className="text-lg font-bold text-black">{product.price}</p>
        </div>
      ))}
    </>
  );
};

export default TopSellers;
