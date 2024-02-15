import React from "react";
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ThemeProvider } from '@mui/system';

const Newarrival=(props)=>{
  console.log(props)
   return (
    <div>
{props.prod.filter((e)=>{
     const data= e.new===true
     data.map((e)=>{
        return (
            <div>
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

            </div>
        )
     })
})}

    </div>
   )
}

export default Newarrival;