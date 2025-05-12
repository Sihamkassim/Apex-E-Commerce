import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ProductCards from "../components/firstpage components/ProductCards";

import "swiper/css";
import Blog from "../components/firstpage components/Blog";
import Products from "../components/firstpage components/Products";
import TopSellers from "../components/firstpage components/TopSellers";
import {  CarouselPlugin } from "@/components/Slide";
import { CarouselSize } from "@/components/Pslide";
import { LastView } from "@/components/Lview";
import Topslide from "@/components/Topslide";
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
    <section className="p-6  max-w-screen-xl  mx-auto">
      <section className="justify-center flex w-full">
        <div
          id="product-display"
          className="bg-[#EDEDED] w-full flex rounded-2xl my-5 justify-between items-center px-16"
        >
          <div className="items-center">
            <h1 className="text-4xl text-white "></h1>
            <p className=""></p>
            <button className="text-white bg-black h-[40px] w-[200px] items-end rounded-2xl gap-3">
              Shop Now
            </button>
          </div>
          <CarouselPlugin />
        </div>
      </section>
      <div className="flex justify-between lg:grid-flow-col">
        <h1 className="text-left text-1.9xl font-semibold">
          Shop by Categories
        </h1>
        <h1 className="font-semibold text-right">
          <a href="/products" className="inline-flex text-1.9xl items-center">
            All Categories
            <FaArrowRight />
          </a>
        </h1>
      </div>

      <section className=" rounded-2xl max-w-screen-xl items-center">
        <div
          id="product-container"
          className=" justify-evenly flex  rounded-2xl items-center my-8"
        >
          <CarouselSize />
        </div>
      </section>
      <h1 className="text-left text-1.99xl font-semibold">Last Viewed</h1>
      <section
        id="Last-viewed"
        className="rounded-2xl max-w-screen-xl items-center"
      >
        <div
          id="product-container2"
          className=" flex  justify-evenly items-center rounded-2xl my-8 py-7 gap-8"
        >
          <CarouselSize />
        </div>
      </section>
      <h1 className="font-semibold text-1.98xl">Top sellers</h1>
      {/* <section id="Top-sellers" className="place-items-center">
        <div
          id="product-container"
          className=" flex flex-wrap justify-between items-stretch rounded-2xl my-8 py-7 gap-8"
        >
          <Topslide />
        </div>
      </section> */}
      <section id="blog" className="">
        <div className="grid sm:grid-cols-2">{/* <Blog /> */}</div>
      </section>
    </section>
  );
};

export default Home;
