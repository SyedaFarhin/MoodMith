import React from "react";
import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";


const BlogItem = () => {
  return (
   <>
  <div className="blogItem group">
      {/* Image Section */}
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg"
          alt="blog image"
          className="w-full transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
        />

        {/* Date Badge */}
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime className="text-[16px]" /> 5 APRIL, 2023
        </span>
      </div>

      {/* Info Section */}
      <div className="info py-4">
        <h2 className="text-[16px] font-[600] text-black">
          <Link to="/" className="link hover:text-primary transition-all">
            Nullam ullamcorper ornare molestie
          </Link>
        </h2>

        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.....
        </p>

        <Link
          to="/"
          className="link font-[500] text-[14px] flex items-center gap-1 hover:text-primary transition-all"
        >
          Read More
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
   </>
  );
};

export default BlogItem;
