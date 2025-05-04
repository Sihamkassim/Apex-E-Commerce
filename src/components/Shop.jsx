import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swiper from './swiper';
function Shop() {
 
 
    return (
      <div>
      <nav className="align-center rounded-2xl py-4 justify-between flex text-3xl font-bold text-none gap-8">
            <h1>
              <a href="/">APEX</a>
            </h1>
            <ul className="flex gap-9">
              <li>
                <a
                  href="/"
                  className="text-2xl font-bold  text-none :hover scale-1.2"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-2xl font-bold  text-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-2xl font-bold  text-none">
                  About
                </a>
              </li>
            </ul>
            <div>
              <ul className="text-none flex justify-between gap-9">
                <li>
                  <FaMagnifyingGlass />
                </li>
                <li>👤</li>
                <li>🤍</li>
              </ul>
            </div>
          </nav>
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}
      // </div>
    );
}
export default Shop;
