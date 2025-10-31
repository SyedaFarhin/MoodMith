import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Button } from "@mui/material";

const HomeBannerV2 = () => {
  return (
   <>
   <Swiper
   loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homeSliderV2"
      >

<SwiperSlide>
  <div className="item w-full rounded-md overflow-hidden relative">
    <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />

    <div className="info absolute top-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
      <h4 className="text-[18px] font-[500] w-full text-left mb-3">Big Saving Days Sale</h4>
      <h2 className="text-[35px] font-[700] w-full">Women Solid Round Green T-Shirt</h2>

      <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3">
        Starting At Only <span className="text-primary text-[30px]">$59.00</span>
      </h3>
      <div className="w-full relative -right-[100%] opacity-0 btn_">
  <Button className="btn-org">SHOP NOW</Button>
</div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="item w-full rounded-md overflow-hidden relative">
    <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />

    <div className="info absolute top-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700 ">
      <h4 className="text-[18px] font-[500] w-full text-left mb-3">Big Saving Days Sale</h4>
      <h2 className="text-[35px] font-[700] w-full">Buy Men's Footwear with low price</h2>

      <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3">
        Starting At Only <span className="text-primary text-[30px]">$14.00</span>
      </h3>
      <div className="w-full relative -right-[100%] opacity-0 btn_">
  <Button className="btn-org">SHOP NOW</Button>
</div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="item w-full rounded-md overflow-hidden relative">
    <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />

    <div className="info absolute top-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
      <h4 className="text-[18px] font-[500] w-full text-left mb-3">Big Saving Days Sale</h4>
      <h2 className="text-[35px] font-[700] w-full">Buy women with low price</h2>

      <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3">
        Starting At Only <span className="text-primary text-[30px]">$19.00</span>
      </h3>
      <div className="w-full relative -right-[100%] opacity-0 btn_">
  <Button className="btn-org">SHOP NOW</Button>
</div>

    </div>
  </div>
</SwiperSlide>
      </Swiper>
   </>
    
       
   
  );
};

export default HomeBannerV2;
