import react, { useEffect, useState, createContext, useContext } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import axios from "axios"
import Womanfashion from "./components/briniHomePage/Womanfashion.jsx"
import { FaSearch } from "react-icons/fa";
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
        <Route path="/manfashion" element={<Manfashion prodd={dataproduct}/>} ></Route>
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

  </div> 
  </div>

  
   
</>
  )
}

export default App
