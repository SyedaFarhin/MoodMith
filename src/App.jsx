import react, { createContext, useState } from "react"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'

import ProductListing from './components/ProductListing'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { IoCloseSharp } from "react-icons/io5"
import ProductZoom from "./components/ProductZoom"
import ProductDetailsComponent from "./components/ProductDetailsComponent"
import Register from "./pages/Register"
import Cart from "./pages/Cart"

const MyContext = createContext()

function App() {

  const [maxWidth, setMaxWidth] = useState('lg');
  const [fullWidth, setFullWidth] = useState(true);
  const [openProductDetails, setOpenProductDetails] = useState(false);
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  

  const handleCloseProductDetails = () => {
    setOpenProductDetails(false);
  };
  const values={
    setOpenProductDetails,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel
  }

  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
<Routes>
  <Route path={"/"} exact={true} element={<Home/>}/>
  <Route path={"/productlisting"} exact={true} element={<ProductListing />} />
  <Route path={"/product/:id"} exact={true} element={<ProductDetails />} />
  <Route path={"/login"} exact={true} element={<Login/>} />
  <Route path={"/register"} exact={true} element={<Register/>} />
  <Route path={"/cart"} exact={true} element={<Cart/>} />

</Routes>
<Footer/>
</MyContext.Provider>
    </BrowserRouter>


    <Dialog
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        open={openProductDetails}
        onClose={handleCloseProductDetails}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
  <div className="flex items-center w-full productDetailsModalContainer relative">
    <Button className="w-[40px] h-[40px] min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] bg-[white] " onClick={handleCloseProductDetails}>
      <IoCloseSharp />
    </Button>
    <div className="col1 w-[40%]">
      <ProductZoom />
    </div>
    <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
      <ProductDetailsComponent/>
    </div>
  </div>
</DialogContent>

      </Dialog>


      







    </>
  )
}

export default App;
export {MyContext};

