import { useEffect, useState } from "react";

const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";

const useRelatedProducts = (currentProduct) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentProduct) return;
      try {
        const response = await fetch(url);
        const result = await response.json();
        const allProducts = result.data.products;

        const filtered = allProducts.filter(
          (item) =>
            item.category === currentProduct.category && item.id !== currentProduct.id
        );
        setRelated(filtered);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchData();
  }, [currentProduct]);

  return related;
};

export default useRelatedProducts;
