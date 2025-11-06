import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";


const Navigation = () => {
  const[isOpenChatPanel,setIsOpenChatPanel]=useState(false)
  const openCategoryPanel=()=>{
    setIsOpenChatPanel(true)
  }
  return (
    <>
    <nav className="py-2">
    <div className="container flex items-center justify-end">
      <div className="col_1 w-[40%]">
        <Button className="!text-black gap-2 w-full" onClick={openCategoryPanel}>
          <RiMenu2Fill className="text-[18px]" />
          Shop By Categories
          <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
        </Button>
      </div>
  
      <div className="col_2 w-[60%]">
  <ul className="flex items-center gap-3 nav">
    <li className="list-none">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Home
        </Button>
      </Link>
    </li>

    <li className="list-none relative">
      <Link to="/productlisting" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Fashion
        </Button>
      </Link>

      {/* <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
  <ul>
   
    <li className="list-none w-full !text-left !justify_start">
    <Link to="/" className="w-full">
      <Button className="!text-[rgba(0,0,0,0.8)]">Men</Button>
    </Link>

    </li>
   
    <li className="list-none w-full !text-left !justify_start">
    <Link to="/" className="w-full">
      <Button className="!text-[rgba(0,0,0,0.8)]">Women</Button>
      </Link>
    </li>
    
    <li className="list-none w-full !text-left !justify_start" >
    <Link to="/" className="w-full">
      <Button className="!text-[rgba(0,0,0,0.8)]">Kids</Button>
      </Link>
    </li>
    <li className="list-none w-full !text-left !justify_start">
    <Link to="/" className="w-full">
      <Button className="!text-[rgba(0,0,0,0.8)]">Girls</Button>
      </Link>
      
    </li>
    <li className="list-none w-full !text-left !justify_start">
    <Link to="/" className="w-full">

      <Button className="!text-[rgba(0,0,0,0.8)]">Men</Button>
      </Link>

    </li>
  </ul>
</div> */}








    </li>

    <li className="list-none">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Jewellery
        </Button>
      </Link>
    </li>
    <li className="list-none">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Footwear
        </Button>
      </Link>
    </li>
    <li className="list-none">
      <Link to="/" className="link transition text-[14px] font-[500]">
        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
          Bags
        </Button>
      </Link>
    </li>
  </ul>
</div>

    </div>
  </nav>
  <CategoryPanel  isOpenChatPanel={isOpenChatPanel} setIsOpenChatPanel={setIsOpenChatPanel}/>
    </>
    
  
  );
};

export default Navigation;
