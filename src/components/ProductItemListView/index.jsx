import { Button, Rating } from "@mui/material";
import React from "react";
import { MdOutlineShoppingCart, MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";
import "./style.css"
import { FaRegHeart } from "react-icons/fa";
const ProductItemListView = () => {
  return (
   <>
  <div className="productItem shadow-lg rounded-md overflow-hidden border-[1px] border-[rgba(0,0,0,0.1)] flex items-center">
  <div className="group imgWrapper w-[25%]  overflow-hidden rounded-md relative">
    <img
      src="https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg"
      className="w-full"
    />
    <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
      10%
    </span>
  </div>

  <div className="info p-3 px-8  py-5 w-[75%] ">
    <h6 className="text-[13px]">
      <Link to="/" className="link transition-all">
        Soylent Green
      </Link>
    </h6>

    <h3 className="text-[18px] title mt-3 font-[500] mb-1 text-[#000]">
      <Link to="/" className="link transition-all">
        Siril Georgette Pink Color Saree with Blouse piece
      </Link>
    </h3>
<p className="text-[14px] mb-3"> Siril Georgette Pink Color Saree with Blouse piece Siril Georgette Pink Color Saree with Blouse piece Siril Georgette Pink Color Saree with Blouse piece</p>
    <Rating name="size-small" defaultValue={4} size="small" readOnly />
    <div className="flex items-center gap-4">
  <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
    $58.00
  </span>
  <span className="price text-primary text-[15px] font-[600]">
    $58.00
  </span>
</div>
  
<div className="mt-3">
  <Button className="btn-org flex gap-2">
    <MdOutlineShoppingCart className="text-[20px]" /> Add to Cart
  </Button>
</div>
  </div>

  {/* <div className="actions absolute top-[15px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px]">
    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white group">
      <MdZoomOutMap className="text-[18px] text-black group-hover:text-white" />
    </Button>

    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white group">
      <FaRegHeart className="text-[18px] text-black group-hover:text-white" />
    </Button>

   
  
  </div> */}

  
  

</div>

   </>
  );
};

export default ProductItemListView;
