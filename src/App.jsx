import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductListing from './components/ProductListing'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
<Routes>
  <Route path={"/"} exact={true} element={<Home/>}/>
  <Route path={"/productlisting"} exact={true} element={<ProductListing />} />
</Routes>
<Footer/>

    </BrowserRouter>


    </>
  )
}

export default App
