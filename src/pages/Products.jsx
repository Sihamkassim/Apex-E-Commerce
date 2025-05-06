import { Link } from "react-router-dom";
import ListOfProducts from "../constants/StaticProducts";
const Products = () => {
  return (
    <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 py-3 px-16 gap-3 w-full">
      {ListOfProducts.map((ListOfProducts, i) => (
        <div
          key={i}
          className="bg-[#EDEDED] hover:scale-105 rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-lg transition-all relative"
        >
          {ListOfProducts.suggestion && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
              Recommended
            </span>
          )}
          <img
            src={ListOfProducts.src}
            alt={ListOfProducts.name}
            className="w-full h-48 object-contain mb-3 rounded-md bg-gray-50"
          />
          <h2 className="text-lg font-semibold line-clamp-2">
            {ListOfProducts.name}
          </h2>
          <img src={ListOfProducts.review} alt="rating" className="h-4 mb-1" />
          <p className="text-gray-500 text-xs mb-2">{ListOfProducts.stock}</p>
          <p className="text-black font-bold mt-2">{ListOfProducts.price}</p>
          <Link to={`/products/${ListOfProducts.name}`}>
            <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
