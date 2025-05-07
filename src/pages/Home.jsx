import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ProductCards from "../components/firstpage components/ProductCards";

import "swiper/css";
import Blog from "../components/firstpage components/Blog";
import Products from "../components/firstpage components/Products";
import TopSellers from "../components/firstpage components/TopSellers";
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
    <section className="pt-17 max-w-screen-xl  mx-auto">
      <section className="justify-center flex max-w-screen-xl ">
        <div
          id="product-display"
          className="bg-[#EDEDED] w-full min-h-[450px] flex rounded-2xl my-5 justify-evenly items-center px-16"
        >
          <div className="items-center">
            <h1 className="text-4xl  ">Shop Computers & Accessories.</h1>
            <p className="my-9">Product Decription</p>
            <button className="text-white bg-black h-[40px] w-[200px] items-end rounded-2xl gap-3">
              Shop Now
            </button>
          </div>
          <div>
            <img src="./src/components/assets/product/headset.png" alt="" />
          </div>
        </div>
      </section>
      <h1 className="text-left text-3xl font-semibold">Shop by Categories</h1>
      <h1 className="font-semibold text-right">
        <a href="/products" className="inline-flex items-center">
          All Categories
          <FaArrowRight />
        </a>
      </h1>
      <section className=" p-1 rounded-2xl max-w-screen-xl items-center">
        <div
          id="product-container"
          className=" justify-evenly flex  rounded-2xl items-center my-8 py-3 gap-8"
        >
          <ProductCards />
        </div>
      </section>
      <h1 className="text-left text-3xl font-semibold">Last Viewed</h1>
      <section id="Last-viewed" className="place-items-center rounded-2xl">
        <div
          id="product-container"
          className=" flex flex-wrap justify-between items-stretch rounded-2xl my-8 py-7 gap-8"
        >
          <Products />
        </div>
      </section>
      <h1 className="font-semibold text-3xl">Top sellers</h1>
      <section id="Top-sellers" className="place-items-center">
        <div
          id="product-container"
          className=" flex flex-wrap justify-between items-stretch rounded-2xl my-8 py-7 gap-8"
        >
          <TopSellers />
        </div>
      </section>
      <section id="blog" className="">
        <div className="grid sm:grid-cols-2">
          <Blog />
        </div>
      </section>
    </section>
  );
};

export default Home;
