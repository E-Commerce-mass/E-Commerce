import react, { useEffect, useState, createContext, useContext } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx'
import AdminDashboard from "./components/adminComponents/AdminDashboard.jsx"
import axios from "axios"
import Womanfashion from "./components/briniHomePage/Womanfashion.jsx"
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
import OneView from "./components/OneView.jsx"

function App() {
  const [dataproduct, setDataproduct] = useState([])
  const [one, setOne] = useState({})
  

  useEffect(() => {
    axios.get("http://localhost:8080/product/getall")
    .then((res) => {
      setDataproduct(res.data)
      console.log(res.data,'check');
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])

  // const getOne = (data) => {
  //   // const navigate = useNavigate()
  //   setOne(data)
  //   console.log(data);
  // }

  return (
    
    <>
    <Header/>
    <BrowserRouter>
    <ProductContext.Provider value={dataproduct}>
      <Routes>
        <Route path='/admin' Component={AdminDashboard}></Route>
        <Route path="/womanfashion" element={<Womanfashion prodd={dataproduct}/>} ></Route>
        <Route path="/manfashion" element={<Manfashion prodd={dataproduct}/>} ></Route>
        <Route path="/health&beauty" element={<Healthbeauty prodd={dataproduct}/>} ></Route>
        <Route path="/gaming" element={<Gaming prodd={dataproduct}/>} ></Route>
        <Route path="/sports" element={<Sports prodd={dataproduct}/>} ></Route>
        <Route path="/medecine" element={<Medecine prodd={dataproduct}/>} ></Route>
        <Route path="/allproduct" Component={Allproducts}> </Route>
        <Route path="/newarrivals" Component={Allnewarrivals}></Route>
        <Route path="/contact" Component={Contact}  ></Route>
        <Route path="/aboutus" Component={Aboutus}  ></Route>  
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' Component={SignUp}></Route>  
        <Route path='/signin' Component={SignIn}></Route>
        <Route path="/flashsale" Component={AllflashSale}></Route>
        <Route path='/oneview' element={<OneView />}></Route>
      </Routes>
    </ProductContext.Provider>
    </BrowserRouter>
    </>
  )
}
export default App;
