import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import BannerBox from "../BannerBox";


const AddsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox img={'/banner1.png'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'/banner1.png'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'/banner1.png'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'/banner1.png'} link={"/"}/>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default AddsBannerSlider;
