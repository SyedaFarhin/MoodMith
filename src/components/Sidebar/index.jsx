import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./style.css";
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import { Button, Rating } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const Sidebar = () => {
  const[isOpenCategoryFilter,setIsOpenCategoryFilter]=useState(true)
  const[isOpenAvailabilityFilter,setIsOpenAvailabilityFilter]=useState(true)

  return (
   <aside className="sidebar">
    <div className="box">
      <h3 className="mb-3 text-[16px] font-[600] flex items-center">Shop by Category
<Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[black]" onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
  {isOpenCategoryFilter===true ? <FaAngleUp /> : <FaAngleDown /> }
  </Button>

      </h3>

      <Collapse isOpened={isOpenCategoryFilter}>
      <div className="scroll px-3 relative -left-[10px]">
      <FormControlLabel control={<Checkbox size="small"/>} label="Fashion" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Beauty" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Electronics" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Home & Kitchen" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Sports & Outdoors" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Toys & Games" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Automotive" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Other" className="w-full"/>
      </div>
      </Collapse>
    </div>

    <div className="box mt-3">
      <h3 className="mb-3 text-[16px] font-[600] flex items-center">Availability
<Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[black]" onClick={()=>setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)}>
  {isOpenAvailabilityFilter===true ? <FaAngleUp /> : <FaAngleDown /> }
  </Button>

      </h3>

      <Collapse isOpened={isOpenAvailabilityFilter}>
      <div className="scroll px-3 relative -left-[10px]">
      <FormControlLabel control={<Checkbox size="small"/>} label="Fashion" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Beauty" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Electronics" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Home & Kitchen" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Sports & Outdoors" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Toys & Games" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Automotive" className="w-full"/>
    <FormControlLabel  control={<Checkbox size="small"/>} label="Other" className="w-full"/>
      </div>
      </Collapse>
    </div>

    <div className="box mt-3">
      <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5">Filter by Price
      </h3>

      <RangeSlider />
      <div className="flex pt-4 pb-2 priceRange">
  <span className="text-[13px]">
    From: <strong className="text-dark">Rs: {100}</strong>
  </span>
  <span className="ml-auto text-[13px]">
    From: <strong className="text-dark">Rs: {5000}</strong>
  </span>
</div>


    </div>

    <div className="w-full">
  <Rating name="size-small" defaultValue={5} size="small" readOnly />
</div>
<div className="w-full">
  <Rating name="size-small" defaultValue={4} size="small" readOnly />
</div>
<div className="w-full">
  <Rating name="size-small" defaultValue={3} size="small" readOnly />
</div>
<div className="w-full">
  <Rating name="size-small" defaultValue={2} size="small" readOnly />
</div>

   </aside>
  );
};

export default Sidebar;
