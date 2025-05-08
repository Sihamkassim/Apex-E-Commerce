import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImg from "../components/assets/icons/shop.png";
import star from "../components/assets/star.png";
import Pagination from "../hooks/Pagination";


const Urll = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products/categories";

const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";

const Products = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All products");
  const [allproductOpen, setallproductOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
 useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await fetch(Urll);
      const result = await response.json();
      if (result.status === "success" && result.data?.categories) {
        const categoryNames = result.data.categories.map(cat => cat.name);
        setCategories(['All products', ...categoryNames]);
      } else {
        console.error("Unexpected response structure:", result);
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  fetchCategories();
}, []);


  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data.products);
    } catch (e) {
      console.error("Failed to fetch products:", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const filteredProducts =
  activeCategory === "All products"
    ? data
    : data.filter((product) => product.category?.name === activeCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <div className="relative w-full py-3 px-4 sm:px-6 md:px-16 min-h-screen bg-white">
      <img src={heroImg} alt="" className="w-full rounded-2xl sm:rounded-3xl h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
      
      <div className="relative z-10 -mt-8 sm:-mt-12 bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-full sm:w-11/12 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-center font-bold mb-6 sm:mb-8">Shop</h1>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/5">
            <h2 className="text-lg sm:text-xl mb-4 sm:mb-6 font-bold ">Category</h2>
            <button
              onClick={() => setallproductOpen(!allproductOpen)}
              className={`inline-flex justify-between items-center p-2 w-full text-left font-semibold ${
                activeCategory === "All products" ? "text-red-900" : ""
              }`}
            >
              <span><FaFolder className="inline mr-2" />Products</span>
              <FaAngleDoubleDown className={`transition-transform ${allproductOpen ? 'rotate-0' : '-rotate-180'}`} />
            </button>
            
            {allproductOpen && (
              <ul className="space-y-2 mt-2">
              {categories.map((cat, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-2xl transition ${
                      activeCategory === cat
                        ? "text-red-900 font-bold bg-red-100"
                        : "hover:bg-red-100"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
            )}

            <div className="mt-10">
              <h3 className="font-bold mb-3">New arrivals</h3>
              <h3 className="font-bold">Best sellers</h3>
            </div>
          </div>

        
          <div className="w-full md:w-4/5">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-slate-600 border-t-2 border-b-2 "></div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {currentProducts.length > 0 ? (
                    currentProducts.map((product, i) => (
                      <div
                        key={i}
                        className="bg-[#F7F7F7] rounded-xl shadow-md p-3 sm:p-4 hover:shadow-lg transition-all relative"
                      >
                        {product.price < 15.0 && (
                          <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                            Recommended
                          </span>
                        )}
                        <img
                          src={product.images}
                          alt={product.name}
                          className="w-full h-40 object-contain mb-3 rounded-md bg-white"
                        />
                        <h2 className="text-md font-semibold line-clamp-1">{product.name}</h2>
                        <img src={star} alt="rating" className="h-4 mb-1" />
                        <p className="text-gray-500 text-xs mb-2">{product.stock}</p>
                        <p className="text-black font-bold mt-2">${product.price}</p>
                        <Link to={`/products/${product.name}`}>
                          <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                            View Details
                          </button>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8 sm:py-10">
                      <p className="text-lg">No products found in this category</p>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {filteredProducts.length > productsPerPage && (
                  <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={filteredProducts.length}
                    currentPage={currentPage}
                    paginate={paginate}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;