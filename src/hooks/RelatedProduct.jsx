import { useEffect, useState } from "react";

// import ListOfProducts from "../constants/StaticProducts";
const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";
const useRelatedProducts = (product) => {
 
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
  // useRelatedProducts(product)
  //  if (!product) return [];
  return data.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
};

export default useRelatedProducts;
