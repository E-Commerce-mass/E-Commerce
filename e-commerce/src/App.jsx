import react from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import ProfileSeller from './components/Mbarki/ProifleSeller.jsx'
import Add from './components/Mbarki/Add.jsx'
import AddProductSeller from './components/Mbarki/AddProductSeller.jsx';
import Edit from './components/Mbarki/EditProduct.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path ="/ProfileSeller" element={<ProfileSeller/>}/>  
        <Route path ="/Add" element={<Add/>}/>  
        <Route path ="/addProductSeller" element={<AddProductSeller/>}/>  
        <Route path ="/editProductSeller" element={<Edit/>}/>  

      </Routes>
    </BrowserRouter>
  )
}

export default App
