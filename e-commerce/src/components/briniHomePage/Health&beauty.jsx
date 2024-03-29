import React from "react";
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Healthbeauty=(props)=>{
    
    const arr = []
    const filterr =(()=>{
        
  props.prodd.map((e)=>{
    if(JSON.stringify(e.categories).includes("health&beauty")){
       arr.push(e)
    
    }
})
    })
    filterr()
    return (
        <div>
 <div>
         <h1 style={{display:"grid",textAlign:"center",color:"rgb(247, 93, 93)",backgroundColor:"white",marginBlock:"20px"}}>--- Health & beauty ---</h1>
       
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
      
          </div>
          

            </div>
        </div>
    )
  
}
export default Healthbeauty;