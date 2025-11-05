import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ProductZoom from "../../components/ProductZoom";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductDetails = () => {
  return (
    <>
  <section className="py-8 pb-0">
  <div className="container">
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/" className="link transition">
        Home
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/"
        className="link"
      >
        Fashion
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/"
        className="link"
      >
      Women Wide Leg
      </Link>
    </Breadcrumbs>
    </div>
    
    
    <section className="bg-white py-5">
  <div className="container flex gap-4">
    <div className="productZoomContainer w-[40%] h-[70vh] overflow-hidden">
      <ProductZoom />
    </div>


    <div className="productContent w-[60%]">
  <h1 className="text-[22px] font-[600] mb-2">Chikankari Woven Kurta</h1>
  <div className="flex items-center gap-3">
    <span className="text-gray-400 text-[13px]">
      Brands : <span className="font-[500] text-black opacity-75">House of Chikankari</span>
    </span>

    <Rating name="size-small" defaultValue={4} size="small" readOnly />
    <span className="text-[13px] cursor-pointer ">Review (5)</span>
  </div>
  <div className="flex items-center gap-4 mt-3">
  <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
    $58.00
  </span>
  <span className="price text-primary text-[15px] font-[600]">
    $58.00
  </span>
</div>
<br/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit, praesentium vel sunt dolorum provident aspernatur tempore obcaecati. Placeat quia, vitae quam enim minima voluptas architecto in nobis? Corporis, voluptas architecto in nobis? Corporis, voluptas architecto in nobis? Corporis, voluptas architecto in nobis? Corporis, saepe!</p>





</div>




  </div>

  


</section>

  </section>
    </>
  );
};

export default ProductDetails;
