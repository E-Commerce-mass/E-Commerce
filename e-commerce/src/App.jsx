import react, { useEffect, useState, createContext, useContext } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import axios from "axios"
import FlashSale from './components/briniHome/FlashSale.jsx';
import Newarrivals from './components/briniHome/Newarrivals.jsx';
import { FaSearch } from "react-icons/fa";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Newarrival from './components/briniHome/Newarrivals.jsx';

const ThemeContext = createContext();

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
    <div>
      
      <div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">EXCLUSIVE</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: '100px' }}>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>

                  </li>
                  <a className="nav-link" href="#">About</a>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sign In
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">

                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit"><FaSearch /></button>
                </form>

              </div>

            </div>
          </nav>
        </div>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage prod={dataproduct} />} ></Route>
     
      </Routes>
    </BrowserRouter>
      <div>
      <div> <div className="footer-dark" style={{backgroundColor:"black"}}>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3 style={{color:"white"}}>Services</h3>
                        <ul style={{color:"white"}}>
                            <li><a href="#" style={{color:"white"}}>Web design</a></li>
                            <li><a href="#"style={{color:"white"}}>Development</a></li>
                            <li><a href="#"style={{color:"white"}}>Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item" style={{color:"white"}}>
                        <h3>About</h3>
                        <ul>
                            <li style={{color:"white"}}><a href="#"style={{color:"white"}}>Company</a></li>
                            <li><a href="#"style={{color:"white"}}>Team</a></li>
                            <li><a href="#"style={{color:"white"}}>Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text" style={{color:"white"}}>
                        <h3 style={{color:"white"}}>E-commerce</h3>
                        <p style={{color:"white"}}>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright"style={{color:"white"}}>E-commerce © 2018</p>
            </div>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>

  </div> </div>

      </div>
   

  )
}

export default App
