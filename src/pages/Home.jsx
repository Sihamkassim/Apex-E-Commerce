import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ProductCards from "../components/ProductCards";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import swiper from "../components/swiper";
import "swiper/css";
import Products from "../components/Products";
import TopSellers from "../components/TopSellers";
import Blog from "../components/blog";

const Home = () => {
  return (
    <section>
      <section className="justify-center flex gap-4 m-w-[96rem]">
        <div
          id="product-display"
          className="bg-[#EDEDED]  flex py-4 flex-wrap  rounded-2xl my-5 justify-evenly gap-9 items-center px-16"
        >
          <div className="items-center">
            <h1 className="text-4xl  ">Shop Computers & Accessories.</h1>
            <p className="my-9">
              Product Decription naguma fayyya galatdbjhfiefhwfiwe
            </p>
            <button className="text-white bg-black h-[40px] w-[200px] items-end rounded-2xl gap-3">
              Shop Now
            </button>
          </div>
          <div>
            <img src="./src/assets/image 2.png" alt="" />
          </div>
        </div>
      </section>
      <h1 className="text-left text-3xl font-semibold">Shop by Categories</h1>
      <h1 className="font-semibold text-right">
        <a href="/shop">
          All Categories <FaArrowRight />
        </a>
      </h1>
      <section
        id="Recommendation"
        className=" p-5 rounded-2xl place-items-center"
      >
        <div
          id="product-container"
          className=" justify-evenly flex  rounded-2xl items-center my-8 py-7 gap-8"
        >
          <ProductCards />
        </div>
      </section>
      <h1 className="text-left text-3xl font-semibold">Last Viewed</h1>
      <section id="Last-viewed" className="place-items-center rounded-2xl p-5">
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
      <section id="blog" className="mx-[96rem]">
        <div className="flex-wrap">{/* <Blog/> */}</div>
      </section>
    </section>
  );
};

export default Home;
