import react from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import AdminDashboard from "./components/adminComponents/AdminDashboard.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={AdminDashboard}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
