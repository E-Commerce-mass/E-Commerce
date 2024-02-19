import {useContext, useState} from "react";
import productData from "../UseContext.js"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

  const Search=()=>{

    const data= useContext(productData)
    const [name,setName]=useState('')
    const [searchy,setSearchy]=useState([])
    const navigate = useNavigate()

    const setsearch=()=>{
       var filtered= data.filter((e)=>{
       
        return e.productName === name
    })
    console.log(filtered)
    if (!filtered.length){
        navigate("/notfound")
    }
      else  setSearchy(filtered)
    }
   
return (
    <div>
        <div style={{border:"10px",marginTop:"-60px",marginLeft:"1000px",alignContent:"center"}}>
        <Button sx={{marginTop:"15px"}} onClick={()=>{setsearch()}}><SearchIcon></SearchIcon></Button>
        <TextField id="standard-basic" label="Search" variant="standard" sx={{color:"black"}}onChange={(e)=>{setName(e.target.value)}}/>
       <div style={{marginTop:"-37px",marginLeft:"260px"}}>
        <Button onClick={()=>{}}><FavoriteBorderIcon sx={{color:'black'}}></FavoriteBorderIcon></Button>
        </div>
        <div style={{marginLeft:"320px",marginTop:"-37px"}}>
       <Button onClick={()=>{}}><ShoppingCartIcon sx={{color:'black'}}></ShoppingCartIcon></Button>
        </div>
        <div style={{marginTop:"-37px",marginLeft:'380px'}}>
        <Button onClick={()=>{}}><PersonIcon sx={{color:'black'}}></PersonIcon ></Button>   
     
        </div>
  </div>
    </div>
)

}
export default Search;