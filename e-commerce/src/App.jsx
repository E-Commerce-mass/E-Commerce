import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import Header from './components/Header.jsx'

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/signin' Component={SignIn}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App