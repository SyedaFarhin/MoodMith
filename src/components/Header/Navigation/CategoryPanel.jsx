import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import CategoryCollapse from "../../CategoryCollapse";
const CategoryPanel = (props) => {
    const[submenuIndex,setSubmenuIndex]=useState(null)
    const[innerSubmenuIndex,setInnerSubmenuIndex]=useState(null)

    


  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenChatPanel(newOpen);
  };
  const openSubmenu=(index)=>{
    if(submenuIndex===index){
      setSubmenuIndex(null)
    }else{
      setSubmenuIndex(index)
    }
  }

  const openInnerSubmenu=(index)=>{
    if(innerSubmenuIndex===index){
      setInnerSubmenuIndex(null)
    }else{
      setInnerSubmenuIndex(index)
    }
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
    <h3 className="p-3 text-[16px] font-[600] flex items-center justify-between">Shop By Categories <IoCloseSharp onClick={toggleDrawer(false)} className="cursor-pointer"/> </h3>
   <CategoryCollapse />

      
    </Box>
  );

  return (
    <div>
   
    <Drawer open={props.isOpenChatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  </div>
  );
};

export default CategoryPanel;
