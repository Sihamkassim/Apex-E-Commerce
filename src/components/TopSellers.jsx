
const listOfProducts = [
  {
    name: "Instant Pot Duo Plus, 6-Quart Whisper",
    image: "./src/components/assets/product/headset.png",
    review: "./src/components/assets/stars.png",
    stock: "21 left in stock",
    price: "$31.88",
    suggestion: true,
  },
  {
    name: "INIU Portable Charger",
    image: "./src/components/assets/product/powerBank.png",
    price: "$18.90",
    review: "./src/components/assets/star.png",
    stock: "Not available in stock",
  },
  {
    name: "Philips Viva Collection SoupMaker",
    image: "./src/components/assets/product/pan.png",
    price: "$8.90",
    review: "./src/components/assets/stars.png",
    stock: "19 left in stock",
    suggestion: true,
  },
  {
    name: "Sunbeam Steammaster 1400 Watt Iron",
    image: "./src/components/assets/product/iron.png",
    price: "$18.88",
    review: "./src/components/assets/star.png",
    stock: "Re-stocked soon",
  },
  {
    name: "VIZIO 32-inch HD Smart TV 720p LED",
    image: "./src/components/assets/product/desktop.png",
    price: "$80.33",
    review: "./src/components/assets/stars.png",
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
