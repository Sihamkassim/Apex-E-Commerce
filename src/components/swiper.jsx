import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const swiper= ()=> {
  return (
    <Swiper
      spaceBetween={30}
    >
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />
        Slide 5
      </SwiperSlide>
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />S
      </SwiperSlide>
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./src/assets/headset.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default swiper