import { useEffect, useState } from "react";
 const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";

const ProductCards = () => {
  
  const [data, setData] = useState([]);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.data.products);
        setData(result.data.products);
      } catch (error) {
        console.error(error.message);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
      {data.slice(0,4).map((products, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform hover:scale-105 relative"
        >
          {products.price < 0 ?
            <span className="absolute top-3 left-3 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
              Recommended
            </span>:''
          }
          <img
            src={products.images}
            alt={products.name}
            className="w-full h-60 object-contain mb-5 bg-gray-100 rounded-xl"
          />
          <p className="text-center text-xl font-semibold">{products.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
