import react, { useEffect, useState, createContext, useContext } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import axios from "axios"
import Womanfashion from "./components/briniHomePage/Womanfashion.jsx"
import Header from './components/Header.jsx';
import Manfashion from "./components/briniHomePage/Manfashion.jsx";
import Sports from "./components/briniHomePage/Sports.jsx";
import Gaming from './components/briniHomePage/Gaming.jsx';
import Healthbeauty from './components/briniHomePage/Health&beauty.jsx';
import Medecine from './components/briniHomePage/Medecine.jsx';
import AllflashSale from './components/briniHomePage/AllFlashsale.jsx';
import Allnewarrivals from "./components/briniHomePage/Allnewarrivals.jsx"
import Allproducts from "./components/briniHomePage/Allproducts.jsx"
import Contact from "./components/briniHomePage/Contact.jsx"
import Aboutus from './components/briniHomePage/Aboutus.jsx';
import FlashSale from "./components/briniHomePage/FlashSale.jsx"
import SignIn from "./components/SignIn.jsx"
import SignUp from "./components/SignUp.jsx"
import ProductContext from './components/UseContext.js';
import Notfound from "./components/briniHomePage/Notfound.jsx"
import Searchbar from "./components/briniHomePage/Searchbar.jsx"
function App() {
  const [dataproduct, setDataproduct] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/product/getall")
    .then((res) => {
      setDataproduct(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])

  return (
    
    <>
    <Header/>
    <BrowserRouter>
    <ProductContext.Provider value={dataproduct}>
      <Routes>
      <Route path='/home' element={<HomePage prod={dataproduct} />} ></Route>
        <Route path="/womanfashion" element={<Womanfashion prodd={dataproduct}/>} ></Route>
        <Route path="/search" element={<Searchbar/>}></Route>
        <Route path="/menfashion" element={<Manfashion prodd={dataproduct}/>} ></Route>
        <Route path="/health&beauty" element={<Healthbeauty prodd={dataproduct}/>} ></Route>
        <Route path="/gaming" element={<Gaming prodd={dataproduct}/>} ></Route>
        <Route path="/sports" element={<Sports prodd={dataproduct}/>} ></Route>
        <Route path="/medecine" element={<Medecine prodd={dataproduct}/>} ></Route>
        <Route path="/allproduct" element={<Allproducts prodd={dataproduct}/>}> </Route>
        <Route path="/flashsale"  element={<AllflashSale prodd={dataproduct}/>}></Route>
        <Route path="/newarrivals"  element={<Allnewarrivals prodd={dataproduct}/>}></Route>
        <Route path="/contact" Component={Contact}  ></Route>
        <Route path="/aboutus" Component={Aboutus}  ></Route>  
        <Route path='/home' Component={HomePage}></Route>
        <Route path='/signup' Component={SignUp}></Route>  
        <Route path='/signin' Component={SignIn}></Route>
        <Route path="/flashsale" Component={FlashSale}></Route>
        <Route path="/notfound" Component={Notfound}  ></Route>
      </Routes>
    </ProductContext.Provider>
    </BrowserRouter>
      <div>
     
    </div>
  
 
   
</>
  )
}
export default App;
