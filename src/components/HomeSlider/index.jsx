import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';

const HomeSlider = () => {
  return (
    <div className="homeSlider py-3">
  <div className="container">
    <Swiper
      spaceBetween={10}
      navigation={true}
      modules={[Navigation,Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="sliderHome"
    >
      <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">
          <img
            src="https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg"
            alt="Banner slide"
            className="w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">
          <img
            src="https://serviceapi.spicezgold.com/download/1761362025223_34295.jpg"
            alt="Banner slide"
            className="w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">
          <img
            src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg"
            alt="Banner slide"
            className="w-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>

  );
};

export default HomeSlider;
