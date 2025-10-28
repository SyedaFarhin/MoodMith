import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <Swiper
    modules={[Navigation]}
    spaceBetween={10}
    slidesPerView={8}
    navigation={true}
    className="mySwiper"
    
  >
    <SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide>
<SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide><SwiperSlide>
  <Link to="/">
    <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
      <img
        src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        className="w-[60px]"
      />
      <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
    </div>
  </Link>
</SwiperSlide>

   
  </Swiper>

  );
};

export default HomeCatSlider;
