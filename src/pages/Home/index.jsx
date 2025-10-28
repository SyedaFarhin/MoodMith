import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AddsBannerSlider from "../../components/AddsBannerSlider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
     <HomeSlider/>
     <HomeCatSlider/>
     <section className="py-5 bg-white">
  <div className="container">
    <div className="freeShipping w-[80%] m-auto py-2 p-4 border border-[#ff5252] flex items-center justify-between rounded-md">
      <div className="col1 flex items-center gap-4">
      <LiaShippingFastSolid className="text-[50px]" />
      <span className="text-[20px] font-[600]">Free Shipping</span>
      </div>

      <div className="col2">
        <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
      </div>

      <p className="font-bold text-[25px]">- Only $200*</p>
    </div>
<AddsBannerSlider items={4}/>

  </div>
     </section>

     <section className="bg-white py-8">
  <div className="container">
    <div className="flex items-center justify-between">
      <div className="leftSec">
        <h2 className="text-[20px] font-[600]">Popular Products</h2>
        <p className="text-[14px] font-[500]">
          Do not miss the current offers until the end of March.
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
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
      </Box>

     
</div>
    </div>
  </div>

  
</section>

     </>
  
  );
};

export default Home;