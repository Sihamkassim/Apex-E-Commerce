import React from "react";

const products = [
  { src: "./src/assets/image 19.png", name: "Video games" },
  { src: "./src/assets/image 17.png", name: "Beauty Picks" },
  { src: "./src/assets/image 18.png", name: "Computer and Accessories" },
  {
    src: "./src/assets/image 20.png",
    name: "Toys and Games",
    recommended: true,
  },
];

const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
      {products.map((product, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform hover:scale-105 relative"
        >
          {product.recommended && (
            <span className="absolute top-3 left-3 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
              Recommended
            </span>
          )}
          <img
            src={product.src}
            alt={product.name}
            className="w-full h-60 object-contain mb-5 bg-gray-100 rounded-xl"
          />
          <p className="text-center text-xl font-semibold">{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
