import React, { useContext, useState } from 'react'
import { ThemeContext } from 'react'
import Card from '@mui/material/Card';
import Newarrivals from './briniHome/Newarrivals.jsx';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ThemeProvider } from '@mui/system';
import { useNavigate } from "react-router-dom";
import FlashSale from './briniHome/FlashSale.jsx';
import { Navigate } from 'react-router-dom';

const HomePage = (props) => {
  
  const navigate = useNavigate();

  return (
  <div>
   
    <div style={{display:"grid",placeItems:"center"}}>
    <img src="https://browntape.com/wp-content/uploads/2016/10/online-store.png"height={"300px"}width={"470px"} display={"block"}  />
    </div>
    
    <div> <Box sx={{ '& button': { m: 1 } }}>
      <div>
       
     
      </div>
      <div style={{marginTop:"50px",justifyContent:"center",marginLeft:"330px"}} >
        <Button variant="contained" size="medium" onClick={()=>{navigate("/womanfashion")}}>
          Woman Fashion
        </Button>
        <Button variant="contained" size="medium" onClick={()=>{navigate("/manfashion")}}>
          Man Fashion
        </Button>
        <Button variant="contained" size="medium"onClick={()=>{navigate("/medecine")}}>
          Medecine
        </Button>
        <Button variant="contained" size="medium"onClick={()=>{navigate("/sports")}}>
         Sports
        </Button>
        <Button variant="contained" size="medium"onClick={()=>{navigate("/health&beauty")}}>
          HEALTH & Beauty
        </Button>
        <Button variant="contained" size="medium"onClick={()=>{navigate("/gaming")}}>
          Gaming
        </Button>
      </div>
      <div>
      <h1 style={{display:"grid",textAlign:"center",color:"rgb(247, 93, 93)",backgroundColor:"white",marginBlock:"20px"}}>--- Explore Our Products ---</h1>
      </div>
    </Box> </div>
  {props.prod.map((e)=>{
  
    return (
   

      <div style={{display:"inline-grid",marginBlock:"50px",marginLeft:"50px",width:"200px",height:"280px"}}>

<Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 100 }}
        
        image={e.images[0] &&  e.images[0].image}
        title={e.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {e.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {e.price}
        </Typography>
       <Typography>   </Typography>
         {e.color}
         <Typography> {e.quantity}  </Typography>
       
         <Typography>  
         {e.new}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick={()=>{navigate("/productdescription")}}>Learn More</Button>
      </CardActions>
    </Card>
    </div>
  
    )
  })}
<div style={{marginTop:"-10px",marginLeft:"600px"}}>
<Button variant="contained" disableElevation >
      See All Products
    </Button>
    </div>
    < FlashSale prodd={props.prod}/>
    <Newarrivals prodd={props.prod}/>
  </div>
  )
}

export default HomePage;