import React, { useContext, useState } from 'react'
import { ThemeContext } from 'react'
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ThemeProvider } from '@mui/system';
import Newarrival from './briniHome/Newarrivals.jsx';
import FlashSale from './briniHome/FlashSale.jsx';

const HomePage = (props) => {
console.log("hi",props.prod);
  return (
  <div>
   
    <div style={{display:"grid",placeItems:"center"}}>
    <img src="https://browntape.com/wp-content/uploads/2016/10/online-store.png"height={"300px"}width={"470px"} display={"block"}  />
    </div>
    
    <div> <Box sx={{ '& button': { m: 1 } }}>
      <div>
       
     
      </div>
      <div style={{marginTop:"50px",justifyContent:"center",marginLeft:"330px"}} >
        <Button variant="contained" size="medium">
          Woman Fashion
        </Button>
        <Button variant="contained" size="medium">
          Man Fashion
        </Button>
        <Button variant="contained" size="medium">
          Medecine
        </Button>
        <Button variant="contained" size="medium">
         Sports
        </Button>
        <Button variant="contained" size="medium">
          HEALTH & Beauty
        </Button>
        <Button variant="contained" size="medium">
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
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  //     <Card className='div1' style={ {"width": "300px",
  //       "height": "100px",
  //       "border": "1px solid blue","display":"flexbox"}}>
  //  <div className='div2'>{e.images[0] && <img  src={ e.images[0].image} style={{"width":"150px","height":"70px"}}/>} </div>
  //  <div> {e.productName} </div>
  //  <div> {e.price} </div>  
  //  <div> {e.color} </div>  
  //  <div> {e.size} </div>
  //  <div> {e.quantity} </div>
  //  <div> {e.promotion} </div>
  //  <div> {e.description} </div>
  //  <div> {e.new} </div>
  //     </Card>
    )
  })}
<div style={{marginTop:"-10px",marginLeft:"600px"}}>
<Button variant="contained" disableElevation >
      See All Products
    </Button>
    </div>
    
    < FlashSale prodd={props.prod}/> 
   
  </div>
  )
}

export default HomePage;