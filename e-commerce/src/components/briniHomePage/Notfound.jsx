import React, { useState } from "react";
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ThemeProvider } from '@mui/system';
import { Container } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const Notfound=()=>{

   
    return (
        <div style={{marginTop:"10px",marginBottom:"50px"}}>
            <div style={{marginLeft:"40px",borderRadius:"40px"}}>
  <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#f5f1f1', height: '60vh' ,borderRadius:"20px"}} > 
<div style={{marginTop:"50px",alignContent:"center"}}>
        <Typography sx={{marginLeft:"200px", fontSize: '6rem',marginTop:"10px",fontFamily:"system-ui"}}>- 404 Not Found  -</Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"310px",textSizeAdjust:"auto",fontSize:"1.5rem "}}>Your visited page not found. You may go home page.  </Typography>
       <div style={{marginLeft:"420px",marginTop:"50px"}}>
        <Button variant="contained" disableElevation sx={{backgroundColor:"red",width:"250px",height:"60px"}}onClick={()=>{navigate("/home")}}>
      Back To Home Page
    </Button>
    </div>
        </div>
        </Box>
      </Container>
      
      </div>
     
    
        
     
      </div>
     
    )
}

export default Notfound;