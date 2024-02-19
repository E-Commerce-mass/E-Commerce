import React, { useState,useContext } from "react";
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ThemeProvider } from '@mui/system';
import productData from "../UseContext.js"
const FlashSale=(props)=>{
    const navigate = useNavigate()
    const data=useContext(productData)

const arr = []
    const filterr =(()=>{
        
  data.map((e)=>{
    
    const parsed = JSON.parse(e.promotion)
    if(parsed !==""){
       arr.push(e)
    }
})
    })
    filterr()
   return (
    
    <div>
         <h1 style={{display:"grid",textAlign:"center",color:"rgb(247, 93, 93)",backgroundColor:"white",marginBlock:"20px"}}>--- Flash Sale ---</h1>
       
        {arr.map((e)=>{

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
          )
        })}
      <div style={{marginTop:"-10px",marginLeft:"600px"}}>
      <Button variant="contained" disableElevation onClick={()=>{navigate("/flashsale")}}>
            See All Products
          </Button>
          </div>
          

            </div>
  )}
   
   


export default FlashSale;