import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AddsBannerSlider from "../../components/AddsBannerSlider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from "../../components/ProductsSlider";
import BlogItem from "../../components/BlogItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import Footer from "../../components/Footer";
import HomeBannerV2 from "../../components/HomeBannerV2";
import BannerBoxV2 from "../../components/BannerBoxV2";
import { Link } from "react-router-dom";


const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
     <HomeSlider/>
     <section className="py-6">
      <div className="container flex gap-5 items-center">
        <div className="part1 w-[65%]">
      <HomeBannerV2/>
          
        </div>

        <div className="part2 w-[30%] gap-5 flex items-center justify-between flex-col">
  <BannerBoxV2 info="right" image={"https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"}/>
  <BannerBoxV2 info="right" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"}/>
</div>

      </div> 

      

     </section>

     <HomeCatSlider/>

     <section className="bg-[ #dca48f33] py-8">
  <div className="container">
    <div className="flex items-center justify-between">
      <div className="leftSec">
        <h2 className="text-[25px] font-[600]" style={{color:" #2f5641"}}>Popular Products</h2>
        <p className="text-[19px] font-[500]" style={{color:" #9b6247"}}>
          Do not miss the current offers until the end of March
        </p>
      </div>

      <div className="rightSec w-[60%]">
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bag" />
        <Tab label="Watches" />
        <Tab label="Footwear" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
      </Tabs>
      </Box>

     
</div>
    </div>

    <ProductsSlider items={4}/>


  </div>

  
</section>

     <section className="py-5 bg-[ #dca48f33]">
  <div className="container">
    <div className="freeShipping w-[80%] m-auto py-2 p-4 mb-20 border border-[#ff5252] flex items-center justify-between rounded-md">
      <div className="col1 flex items-center gap-4">
      <LiaShippingFastSolid className="text-[50px] " style={{color:" #2f5641"}}/>
      <span className="text-[20px] font-[600]" style={{color:" #2f5641"}}>Free Shipping</span>
      </div>

      <div className="col2">
        <p className="mb-0 font-[500] text-[18px]"  style={{color:" #9b6247"}}>Free Delivery Now On Your First Order and over $200</p>
      </div>

      <p className="font-bold text-[25px]" style={{color:" #2f5641"}}>- Only $200*</p>
    </div>
<AddsBannerSlider items={4}/>

  </div>
     </section>

     

<section className="py-5 pt-0 bg-[ #dca48f33]">
  <div className="container">
  <h2 className="text-[25px] font-[600]" style={{color:" #2f5641"}}>Latest Products</h2>

  <ProductsSlider items={6}/>
  {/* <AddsBannerSlider items={4}/> */}

  </div>
</section>




<section className="py-5 pt-0 bg-[ #dca48f33]">
  <div className="container">
  <h2 className="text-[25px] font-[600]" style={{color:" #2f5641"}}>Featured Products</h2>

  <ProductsSlider items={6}/>
  <AddsBannerSlider items={3}/>

  </div>
</section>

<section className="py-5 pt-0 bg-[ #dca48f33] blogSection">
  <div className="container">
    <h2 className="text-[25px] font-[600] mb-4" style={{color:" #2f5641"}}>From The Blog</h2>
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="blogSlider"
    >
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
    </Swiper>
  </div>
</section>


     </>
  
  );
};

export default Home;