import react, {  } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import ProfileSeller from './components/Mbarki/ProifleSeller.jsx'
import Add from './components/Mbarki/Add.jsx'
import AddProductSeller from './components/Mbarki/AddProductSeller.jsx';
import Edit from './components/Mbarki/EditProduct.jsx'
import Foutree from './components/Mbarki/Foutree.jsx'
import Images from './components/Mbarki/Images.jsx';

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path ="/ProfileSeller" Component={ProfileSeller}/>  
        <Route path ="/EditSeller" Component={Add}/>  
        <Route path ="/addProductSeller" Component={AddProductSeller}/>  
        <Route path ="/editProductSeller" Component={Edit}/>  
        <Route path ="/foutre" Component={Foutree}/>  
        <Route path ="/Images" Component={Images}/>  

      </Routes>
    </BrowserRouter>
  )
}

export default App
