
// const listOfProducts = [
//   {
//     name: "Instant Pot Duo Plus, 6-Quart Whisper",
//     image: "./src/components/assets/product/headset.png",
//     review: "./src/components/assets/stars.png",
//     stock: "21 left in stock",
//     price: "$31.88",
//     suggestion: true,
//   },
//   {
//     name: "INIU Portable Charger",
//     image: "./src/components/assets/product/powerBank.png",
//     price: "$18.90",
//     review: "./src/components/assets/star.png",
//     stock: "Not available in stock",
//   },
//   {
//     name: "Philips Viva Collection SoupMaker",
//     image: "./src/components/assets/product/pan.png",
//     price: "$8.90",
//     review: "./src/components/assets/stars.png",
//     stock: "19 left in stock",
//     suggestion: true,
//   },
//   {
//     name: "Sunbeam Steammaster 1400 Watt Iron",
//     image: "./src/components/assets/product/iron.png",
//     price: "$18.88",
//     review: "./src/components/assets/star.png",
//     stock: "Re-stocked soon",
//   },
//   {
//     name: "VIZIO 32-inch HD Smart TV 720p LED",
//     image: "./src/components/assets/product/desktop.png",
//     price: "$80.33",
//     review: "./src/components/assets/stars.png",
//     stock: "Re-stocked soon",
//   },
// ];

import { useEffect, useState } from "react";
import starr from "../assets/star.png";
const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";
const TopSellers = () => {
  
  
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
  return (
    <>
      {data.map((product, i) => (
        <div
          key={i}
          className="w-full sm:w-[230px] bg-[#EDEDED] border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition- p-4"
        >
          {product.price <15.00 ? 
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full absolute">
              Recommended
            </span>:''
          }
          <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
            <img
              src={product.images}
              alt={product.name}
              className="max-h-full object-contain"
            />
          </div>
          <h3 className="text-sm font-medium mb-2 line-clamp-1">
            {product.name}
          </h3>
          <img src={starr} alt="rating" className="h-4 mb-1" />
          <p className="text-gray-500 text-xs mb-2">{product.stock}</p>
          <p className="text-lg font-bold text-black">${product.price}</p>
        </div>
      ))}
    </>
  );
};

export default TopSellers;
