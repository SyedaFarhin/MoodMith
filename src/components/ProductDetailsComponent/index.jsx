import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import QtyBox from "../QtyBox";


const ProductDetailsComponent = () => {
  const [productActionIndex,setProductActionIndex]=useState(null)

  return (
    <>
    
  <h1 className="text-[24px] font-[600] mb-2">Chikankari Woven Kurta</h1>
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
  <span className="text-[14px]">Available In Stock: <span className="text-green-600 text-[14px] font-bold">147 Items</span></span>


</div>
<br/>
<p className="mt-5 ">Lorem ipsum dolor sit amet consectetur adipisicing 
  elit. Aliquam impedit, praesentium vel sunt dolorum 
  provident aspernatur tempore obcaecati. Placeat quia
  , vitae quam enim minima voluptas architecto in nobis? Corporis, voluptas architecto in nobis? Corporis, voluptas architecto in nobis? 
  Corporis, voluptas architecto in nobis? Corporis, 
</p>

<div className="flex items-center gap-3">
  <span className="text-[16px]">Size:</span>
  <div className="flex items-center gap-1 actions">
    <Button
      className={`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`}
      onClick={() => setProductActionIndex(0)}
    >
      S
    </Button>
    <Button
      className={`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`}
      onClick={() => setProductActionIndex(1)}
    >
      M
    </Button>
    <Button
      className={`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`}
      onClick={() => setProductActionIndex(2)}
    >
      L
    </Button>
    <Button
      className={`${productActionIndex === 3 ? '!bg-primary !text-white' : ''}`}
      onClick={() => setProductActionIndex(3)}
    >
      XL
    </Button>
  </div>
</div>

<div className="flex items-center mt-4 gap-4">
  <div className="qtyBoxWrapper w-[80px]">
    <QtyBox />
  </div>

  <Button className="btn-org flex gap-2 ">
    <MdOutlineShoppingCart className="text-[22px]"/> Add to Cart
  </Button>
</div>


<div className="flex items-center gap-4 mt-4">
  <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
    <FaRegHeart/> Add to Wishlist
  </span>
  </div>


 


    </>
  );
};

export default ProductDetailsComponent;
