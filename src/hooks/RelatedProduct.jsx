
import ListOfProducts from "../constants/StaticProducts";

const useRelatedProducts = (currentProduct) => {
  if (!currentProduct || !currentProduct.categoryId) return [];
  

  const related = ListOfProducts.filter(item => 
    item.categoryId === currentProduct.categoryId && 
    item.name !== currentProduct.name
  );
  
  
  return related
};

export default useRelatedProducts;