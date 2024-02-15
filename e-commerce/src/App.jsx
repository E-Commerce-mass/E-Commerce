import react, { useEffect, useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import Header from './components/Header.jsx'
import FlashSale from './components/briniHome/FlashSale.jsx';
import Womanfashion from './components/briniHome/womanfashion.jsx';
import Manfashion from './components/briniHome/manfashion.jsx';
import Sports from './components/briniHome/sports.jsx';
import Gaming from './components/briniHome/gaming.jsx';
import Healthbeauty from './components/briniHome/health&beauty.jsx';
import Medecine from './components/briniHome/medecine.jsx';

function App() {
  const [dataproduct, setDataproduct] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:8080/getall").then((res) => {
      setDataproduct(res.data)
    }).catch((err) => {
      console.log(err, "err")
    })
  }, [])

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/signin' Component={SignIn}></Route>
        <Route path="/womanfashion" Component={Womanfashion} />
        <Route path="/manfashion" Component={Manfashion} />
        <Route path="/health&beauty" Component={Healthbeauty} />
        <Route path="/gaming" Component={Gaming} />
        <Route path="/sports" Component={Sports} />
        <Route path="/medecine" Component={Medecine} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App