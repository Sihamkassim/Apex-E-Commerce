
const merchandise = [
  {
    src: "./src/components/assets/product/shoeW.png",
    name: "White AirForce 1’s, size 7-9",
    review: "./src/components/assets/star.png",
    price: "$112.55",
    stock: "21 left in stock",
  },
  {
    src: "./src/components/assets/product/shoeB.png",
    name: "Oxford shoe - Black- sam",
    review: "./src/components/assets/star.png",
    price: "$300.45",
    stock: "not available in stock",
  },
  {
    src: "./src/components/assets/product/shoe.png",
    name: "Air Jordan 1’s",
    review: "./src/components/assets/stars.png",
    price: "$220.55",
    stock: "50 pair left in stock",
  },
  {
    src: "./src/components/assets/product/shoeWB.png",
    name: "Jordan 4 - Military Blue",
    price: "$400",
    review: "./src/components/assets/star.png",
    suggestion: true,
    stock: "10 pair left in stock",
  },
  {
    src: "./src/components/assets/product/shoeBW.png",
    name: "New Balance - Runners-Men",
    review: "./src/components/assets/stars.png",
    price: "$92.88",
    stock: "21 left in stock",
  },
];

const Products = () => {
  return (
    <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full">
      {merchandise.map((merchandise, i) => (
        <div
          key={i}
          className=" bg-[#EDEDED] hover:scale-105 rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-lg transition-all relative"
        >
          {merchandise.suggestion && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
              Recommended
            </span>
          )}
          <img
            src={merchandise.src}
            alt={merchandise.name}
            className="w-full h-48 object-contain mb-3 rounded-md bg-gray-50"
          />
          <h2 className="text-lg font-semibold line-clamp-1">
            {merchandise.name}
          </h2>
          <img src={merchandise.review} alt="rating" className="h-4 mb-1" />
          <p className="text-gray-500 text-xs mb-2">{merchandise.stock}</p>
          <p className="text-black font-bold mt-2">{merchandise.price}</p>
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
