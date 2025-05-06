import { Link, useParams } from "react-router-dom";
import ListOfProducts from "../constants/StaticProducts";
import useRelatedProducts from "../hooks/RelatedProduct";

const ProductDetail = () => {
  const { name } = useParams();
  const product = ListOfProducts.find((item) => item.name.toString() === name);
  const relatedProducts = useRelatedProducts(product);

  return (
    <>
      <div className="flex h-screen space-x-10 mx-auto max-w-screen-xl  mt-10 p-2 pt-20 bg-stone-200 rounded-xl shadow-lg">
        <div className="w-1/2 mx-auto">
          <img
            src={product.src}
            alt={product.name}
            className="w-full h-96 object-contain mb-4 rounded-md bg-gray-100"
          />
           <img src={product.review} alt="rating" className="h-4 mb-1" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <img src={product.review} alt="rating" className="h-4 mb-1" />
          <p className="text-gray-600 text-sm mb-1">{product.stock}</p>
          <p className="text-black font-bold text-lg mb-4">{product.price}</p>
          <p className="text-gray-700 mb-4">{product.descriptions}</p>
<div className="flex space-x-4 mt-4">
          <button className="w-52 border-x border-y border-y-amber-950 border-x-amber-950 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Add to Cart 🛒
          </button>
          <button className="w-52 border-x border-y border-y-amber-950 border-x-amber-950 bg-white text-black py-2 rounded border-card-foreground hover:bg-black hover:text-white transition">
            Buy Now
          </button>
          </div>
        </div>
      </div>

      <div className="mt-10  mx-auto p-4 max-w-screen-xl" >
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-5 gap-3 w-fulls">
          {relatedProducts.map((item) => (
            <div key={item.name} className=" hover:scale-105 rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-lg transition-all relative"
        >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-48 object-contain mb-3 rounded-md bg-gray-50"
              />
              <h3 className="text-lg font-semibold line-clamp-2">{item.name}</h3>
              <p>{item.price}</p>
              <Link to={`/products/${item.name}`}>
            <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              View Details
            </button>
          </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
