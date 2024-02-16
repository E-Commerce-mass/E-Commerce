import react, { useEffect, useState} from 'react'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import Header from './components/Header.jsx';
import FlashSale from './components/briniHome/FlashSale.jsx';
import Womanfashion from './components/briniHome/Womanfashion.jsx';
import Manfashion from './components/briniHome/Manfashion.jsx';
import Sports from './components/briniHome/Sports.jsx';
import Gaming from './components/briniHome/Gaming.jsx';
import Healthbeauty from './components/briniHome/Health&beauty.jsx';
import Medecine from './components/briniHome/Medecine.jsx';
import ProductContext from './components/UseContext.js';



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
        <Route path='/home' Component={HomePage}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/signin' Component={SignIn}></Route>
        <Route path="/womanfashion" Component={Womanfashion} />
        <Route path="/manfashion" Component={Manfashion} />
        <Route path="/health&beauty" Component={Healthbeauty} />
        <Route path="/gaming" Component={Gaming} />
        <Route path="/sports" Component={Sports} />
        <Route path="/medecine" Component={Medecine} />
        <Route path="/flashsale" Component={FlashSale}></Route>
      </Routes>
    </ProductContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App