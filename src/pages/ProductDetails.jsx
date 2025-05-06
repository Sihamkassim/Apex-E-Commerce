import { Link, useParams } from "react-router-dom";
// import ListOfProducts from "../constants/StaticProducts";
import { useEffect, useState } from "react";
import useRelatedProducts from "../hooks/RelatedProduct";
import ListOfProducts from "@/constants/StaticProducts";
const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";
const ProductDetail = () => {


const [data, setData] = useState([]);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.data.products);
        setData(result.data.products);
      } catch (e) {
        console.error(e.message);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
  
  // const { id } = useParams();
  // const product = data.find((item) => item.id.toString() === id);

  const { name } = useParams();
  const product = data.find((item) => item.name.toString() === name);

  const relatedProducts = useRelatedProducts(product);

  return (
    
      <div className="flex h-screen space-x-10 mx-auto mt-10 p-2 bg-stone-200 rounded-xl shadow-lg">
        
        <div className="w-1/2 mx-auto">
          <img
            src={relatedProducts.images}
            alt={relatedProducts.name}
            className="w-full h-96 object-contain mb-4 rounded-md bg-gray-100"
          />
          {/* <img src={product.review} alt="rating" className="h-4 mb-1" /> */}
        </div>
        <div className="mx-auto">

          {/* <h1 className="text-2xl font-bold mb-2">{relatedProducts.name}</h1>
          {/* <img src={product.} alt="rating" className="h-4 mb-1" /> */}
          <p className="text-gray-600 text-sm mb-1">{relatedProducts.stock}</p>
          <p className="text-black font-bold text-lg mb-4">
            {relatedProducts.price}
          </p>
          {/* <p className="text-gray-700 mb-4">{relatedProducts.name}</p> */}
          {/* <div className="flex space-x-4 mt-4">
            <button className="w-52  bg-black text-white py-2 rounded hover:bg-green-200 transition">
              Add to Cart 🛒
            </button>
            <button className="w-52 bg-black text-white py-2 rounded border-card-foreground hover:bg-green-200 hover:text-white transition">
              Buy Now
            </button> */ }

          <h1 className="text-2xl font-bold mb-2">{ListOfProducts.name}</h1>
          <img src={ListOfProducts.review} alt="rating" className="h-4 mb-1" />
          <p className="text-gray-600 text-sm mb-1">{ListOfProducts.stock}</p>
          <p className="text-black font-bold text-lg mb-4">{ListOfProducts.price}</p>
          <p className="text-gray-700 mb-4">{ListOfProducts.descriptions}</p>
        <div className="flex space-x-4 mt-4">
          <button className="w-52  bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Add to Cart 🛒
          </button>
          <button className="w-52 bg-white text-black py-2 rounded border-card-foreground hover:bg-black hover:text-white transition">
            Buy Now
          </button>

        </div>
        {/* </div> */}
      </div>

      <div className="mt-10 p-4">
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-5 gap-3 w-fulls">
          {relatedProducts.map((item) => (
            <div key={item.name} className=" hover:scale-105 rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-lg transition-all relative"
        >
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-48 object-contain mb-3 rounded-md bg-gray-50"
              />
              <h3 className="text-lg font-semibold line-clamp-2">
                {item.name}
              </h3>
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
      </div>
  );
}

export default ProductDetail;
