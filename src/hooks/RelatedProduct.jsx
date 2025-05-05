import ListOfProducts from "../constants/StaticProducts";

const useRelatedProducts = (product) => {
  if (!product) return [];

  return ListOfProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
};

export default useRelatedProducts;
