import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Sidebar from "../Sidebar";



const ProductListing = () => {
  return (
    <>
    <section className="py-8">
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
    </Breadcrumbs>
  </div>

  <div className="bg-white p-3">
  <div className="container flex gap-3">
    <div className="sidebarWrapper w-[20%] h-full bg-white p-3">
      <Sidebar />
    </div>
  </div>
</div>

</section>

    </>
  );
};

export default ProductListing;
