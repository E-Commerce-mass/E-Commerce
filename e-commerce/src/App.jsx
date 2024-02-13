import react from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
