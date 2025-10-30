import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { LiaGiftSolid } from "react-icons/lia";
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Footer = () => {
  return (
    <footer className="py-6 ">
      <div className="container">
        <div className="flex items-center justify-center gap-2">
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <LiaShippingFastSolid
              className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"
            />
            <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
            <p className="text-[14px] font-[500]">For all Orders Over $100</p>
          </div>
          
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <PiKeyReturnLight
              className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"
            />
            <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
            <p className="text-[14px] font-[500]">For an Exchange Product</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <MdPayment
              className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"
            />
            <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
            <p className="text-[14px] font-[500]">Payment Cards Accepted</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <LiaGiftSolid
              className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"
            />
            <h3 className="text-[16px] font-[600] mt-3">Special Gifts </h3>
            <p className="text-[14px] font-[500]">Our First Product Order</p>
          </div>
        </div>

{/* <hr/> */}



        <div className="footer flex items-center py-8 ">
  <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.2)]">
    <h2 className="text-[20px] font-[600] mb-4">Contact us</h2>
    <p className="text-[14px] font-[400] pb-4">
      Classyshop - Mega Super Store<br />
      507-Union Trade Centre<br />
      France
    </p>

    <Link className="link" to="mailto:someone@example.com">
      sales@yourcompany.com
    </Link>

    <span className="text-[22px] font-[600] block w-full mt-3 text-[#ff5252]">
      (+91) 9876-543-210
    </span>

    <div className="flex items-center gap-2">
  <IoChatboxOutline className="text-[40px] text-[#ff5252]" />
  <span className="text-[16px] font-[600]">
    Online Chat<br />
    Get Expert Help
  </span>
</div>

  </div>

  <div className="part2_col1 w-[40%] flex pl-8">
  <div className="part2_coll w-[50%]">
    <h2 className="text-[20px] font-[600] mb-4">Products</h2>

    <ul className="list">
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Prices drop</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">New products</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Best sales</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Contact us</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Sitemap</Link>
      </li>
    </ul>
  </div>

  <div className="part2_col2 w-[50%] flex">
  <div className="part2_coll w-[50%]">
    <h2 className="text-[20px] font-[600] mb-4">Our Company</h2>

    <ul className="list">
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Delivery</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Legal Notice</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Terms and conditions of use</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">About us</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Secure payment</Link>
      </li>
      <li className="list-none text-[14px] w-full mb-2">
        <Link to="/" className="link">Login</Link>
      </li>
    </ul>
  </div>
</div>
</div>



<div className="part2 w-[35%] flex pl-8 flex-col pr-8">
  <h2 className="text-[18px] font-[600] mb-4">Subscribe to newsletter</h2>
  <p className="text-[13px]">Subscribe to our latest newsletter to get news about special discounts.</p>

  <form className="mt-5">
    <input
      type="text"
      className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[#000]"
      placeholder="Your Email Address"
    />
    <Button className="btn-org">SUBSCRIBE</Button>
  </form>
</div>



</div>










      </div>
      

      



    </footer>
  );
};

export default Footer;
