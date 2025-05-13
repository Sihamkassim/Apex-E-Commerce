import { useEffect, useState } from "react";
import { FaArrowRight, FaSearch, FaShoppingCart, FaTag, FaStar } from "react-icons/fa";
import ProductCards from "../components/firstpage components/ProductCards";

import "swiper/css";
import Blog from "../components/firstpage components/Blog";
import Products from "../components/firstpage components/Products";
import { CarouselPlugin } from "@/components/Slide";
import { CarouselSize } from "@/components/Pslide";
import LastView from "@/components/Lview";
import { Link } from "react-router-dom";

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
        <div className="bg-gradient-to-r from-gray-50 to-[#F5F5F5] rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-black to-gray-800 text-white text-xs font-medium tracking-wide rounded-full animate-pulse">
                  NEW ARRIVALS
                </span>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-medium tracking-wide rounded-full">
                  TRENDING
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Shop Premium <span className="text-blue-600">Products</span>
              </h1>
              
              <p className="text-gray-600 mb-8 text-lg">
                Discover the latest trends and styles at competitive prices with fast worldwide shipping
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                  <button className="relative text-white bg-black px-8 py-3 rounded-full group-hover:bg-gray-900 transition-all duration-200 shadow-md">
                    Shop Now <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <Link to="/products?featured=true" className="relative group">
                  <button className="text-gray-800 bg-white border border-gray-200 px-8 py-3 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm">
                    Featured Items
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-indigo-50/10 rounded-2xl blur-xl -z-10"></div>
              <div className="transform hover:scale-105 transition-transform duration-500 z-10">
                <CarouselPlugin />
              </div>
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
          <h2 className="text-3xl font-semibold mb-4 sm:mb-0">
            Shop by Categories
          </h2>
          <a
            href="/products"
            className="text-black hover:text-gray-700 flex items-center gap-2 transition-colors group"
          >
            All Categories
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <CarouselSize />
      </section>

      {/* Last Viewed Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold mb-4 sm:mb-0">Last Viewed</h2>
            <Link to="/products" className="text-black hover:text-gray-700 flex items-center gap-2 transition-colors group">
              View All <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <LastView />
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
