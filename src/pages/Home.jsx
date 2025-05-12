import { useEffect, useState } from "react";
import { FaArrowRight, FaSearch, FaShoppingCart, FaTag } from "react-icons/fa";
import ProductCards from "../components/firstpage components/ProductCards";

import "swiper/css";
import Blog from "../components/firstpage components/Blog";
import Products from "../components/firstpage components/Products";
const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";

const Home = () => {
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="bg-[#EDEDED] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <span className="inline-block px-3 py-1 bg-black text-white text-xs rounded-full mb-4">NEW ARRIVALS</span>
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 leading-tight">
                Shop Computers & Accessories
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Find the latest tech products at competitive prices
              </p>
              <button className="text-white bg-black px-8 py-3 rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105 duration-300">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="./src/components/assets/product/headset.png" 
                alt="Featured Product" 
                className="max-h-64 md:max-h-80 object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EDEDED] p-5 rounded-xl flex items-center transform hover:translate-y-[-5px] transition-transform duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 shadow-md">
              <FaShoppingCart className="text-white" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Free Shipping</h3>
              <p className="text-gray-600">On orders over $50</p>
            </div>
          </div>
          <div className="bg-[#EDEDED] p-5 rounded-xl flex items-center transform hover:translate-y-[-5px] transition-transform duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 shadow-md">
              <FaTag className="text-white" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Special Offers</h3>
              <p className="text-gray-600">Save up to 50% off</p>
            </div>
          </div>
          <div className="bg-[#EDEDED] p-5 rounded-xl flex items-center transform hover:translate-y-[-5px] transition-transform duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 shadow-md">
              <FaSearch className="text-white" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Support 24/7</h3>
              <p className="text-gray-600">Shop with an expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Categories Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold mb-4 sm:mb-0">Shop by Categories</h2>
          <a href="/products" className="text-black hover:text-gray-700 flex items-center gap-2 transition-colors group">
            All Categories <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="bg-white rounded-xl overflow-hidden">
          <ProductCards />
        </div>
      </section>

      {/* Last Viewed Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 sm:mb-0">Last Viewed</h2>
            <a href="/products" className="text-black hover:text-gray-700 flex items-center gap-2 transition-colors group">
              View All <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Products />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold mb-4 sm:mb-0">Latest Articles</h2>
          <a href="/about" className="text-black hover:text-gray-700 flex items-center gap-2 transition-colors group">
            All Articles <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Blog />
        </div>
      </section>
    </div>
  );
};

export default Home;
