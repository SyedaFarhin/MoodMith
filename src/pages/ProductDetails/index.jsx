import React, { useState } from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ProductZoom from "../../components/ProductZoom";
import { Link } from "react-router-dom";
import { Button, Rating, TextField } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import QtyBox from "../../components/QtyBox";
import { FaRegHeart } from "react-icons/fa";
import ProductsSlider from "../../components/ProductsSlider";

const ProductDetails = () => {
  const [productActionIndex,setProductActionIndex]=useState(null)
  const [activeTab,setActiveTab]=useState(0)

  return (
    <>
  <div className="py-5 ">
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
  <div className="container flex gap-8 items-center">
    <div className="productZoomContainer w-[40%] h-[70vh] overflow-hidden">
      <ProductZoom />
    </div>


    <div className="productContent w-[60%] pr-10 pl-10">
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


 

</div>




</div>
</section>


<div className="container pt-10">
  <div className="flex items-center gap-8 mb-5">
    <span
      className={`link text-[17px] cursor-pointer font-[500] ${activeTab===0 && 'text-primary'}`}
      onClick={() => setActiveTab(0)}
    >
      Description
    </span>
    <span
      className={`link text-[17px] cursor-pointer font-[500] ${activeTab===1 && 'text-primary'}`}
      onClick={() => setActiveTab(1)}
    >
      Product Details
    </span>
    <span
      className={`link text-[17px] cursor-pointer font-[500] ${activeTab===2 && 'text-primary'}`}
      onClick={() => setActiveTab(2)}
    >
      Reviews
    </span>


    
  </div>


  {activeTab === 0 && (
  <div className="shadow-md w-full py-5 px-8 rounded-md">
    <p>
      The best is yet to come! Give your walls a voice with a framed poster. This aesthetic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.
    </p>

    <h4>Lightweight Design</h4>
    <p>Designed with a super light geometric case, the Versa family watches are slim, casual and comfortable enough to wear all day and night. Switch up your look with classic, leather, metal and woven accessory bands. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

<h4>Free Shipping & Return</h4>
<p>We offer free shipping for products on orders above 50$ and offer free delivery for all orders in US.</p>
<h4>Money Back Guarantee</h4>
<p>We guarantee our products and you could get back all of your money anytime you want in 30 days.</p>

<h4>Online Support</h4>
<p>You will get 24 hour support with this purchase product and you can return it within 30 days for an exchange.</p>

  </div>
)}


{activeTab === 1 && (
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-light-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
)}

{activeTab === 2 && (
  <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
    <div className="w-full productReviewsContainer">
      <h2 className="text-[18px]">Customer questions & answers</h2>

      <div className="reviewScroll pr-5 w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5">
        <div className="review pt-5  pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
          <div className="info w-[60%] flex items-center gap-2">
            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
              <img src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg" className="w-full" />
            </div>

            <div className="w-[80%]">
  <h4 className="text-[16px]">Rinku Verma</h4>
  <h5 className="text-[13px] mb-0">2024-12-01</h5>
  <p className="mt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>

          </div>
          <Rating name="size-small" defaultValue={4} readOnly/>
        </div>
      </div>
      <div className="reviewScroll pr-5 w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5">
        <div className="review pt-5  pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
          <div className="info w-[60%] flex items-center gap-2">
            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
              <img src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg" className="w-full" />
            </div>

            <div className="w-[80%]">
  <h4 className="text-[16px]">Rinku Verma</h4>
  <h5 className="text-[13px] mb-0">2024-12-01</h5>
  <p className="mt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>

          </div>
          <Rating name="size-small" defaultValue={4} readOnly/>
        </div>
      </div>
      <div className="reviewScroll pr-5 w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5">
        <div className="review pt-5  pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
          <div className="info w-[60%] flex items-center gap-2">
            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
              <img src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg" className="w-full" />
            </div>

            <div className="w-[80%]">
  <h4 className="text-[16px]">Rinku Verma</h4>
  <h5 className="text-[13px] mb-0">2024-12-01</h5>
  <p className="mt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>

          </div>
          <Rating name="size-small" defaultValue={4} readOnly/>
        </div>
      </div>
    </div>
  </div>
  
)}





<div className="reviewForm bg-[#fafafa] p-4 rounded-md mt-8">
  <h2 className="text-[18px]">Add a review</h2>

  <form className="w-full mt-5">
    <TextField
      id="outlined-multiline-flexible"
      label="Write a review..."
      className="w-full"
      multiline
      rows={5}
    />
<br/><br/>
    <Rating name="size-small" defaultValue={4}  />
    <div className="flex items-cenetr mt-5">
      <Button className="btn-org">Submit Review</Button>
    </div>
  </form>
</div>


<div className="container pt-5">
  <h2 className="text-[20px] font-[600] ">Related Products</h2>
  <ProductsSlider items={6}/>
</div>




</div>








</div>
</>
  );
};

export default ProductDetails;
