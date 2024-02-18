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

const Contact=()=>{

    return (
        <div style={{marginTop:"50px",marginBottom:"50px"}}>
            <div style={{marginLeft:"-1000px",borderRadius:"90px"}}>
  <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#f5f1f1', height: '60vh' ,borderRadius:"20px"}} > 

        <CallIcon sx={{marginBlock:"140px" ,marginLeft:"30px",color:"red"}}/>
        <Typography sx={{marginTop:"-161px",marginLeft:"90px",textSizeAdjust:"auto"}}>Call Us To </Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"40px",textSizeAdjust:"auto"}}>You can visit us in RBK Welcome to coding world </Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"30px",textSizeAdjust:"auto"}}>*  Phone :    216 90 233 244</Typography>
        < EmailIcon sx={{marginLeft:"30px",marginTop:"30px",color:"red",borderRadius:"20cap"}}/>
        <Typography sx={{marginTop:"20px",marginLeft:"30px",textSizeAdjust:"auto"}}>You can also Contact us on our E-mail : </Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"30px",textSizeAdjust:"auto"}}>rbkmain@rbksenior.com </Typography>
        </Box>
      </Container>
      
      </div>
      <div style={{marginRight:"-300px",marginTop:"-446px"}}>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#f5f1f1', height: '60vh' ,borderRadius:"20px"}} > 

        <TextField TextField="Name" sx={{marginTop:"100px",marginLeft:"40px"}} placeholder="First Name"/>
        <TextField TextField="Name" sx={{marginTop:"100px",marginLeft:"40px"}} placeholder="Last Name"/>
        <TextField TextField="Name" sx={{marginTop:"100px",marginLeft:"40px"}} placeholder="Problem "/>
        <Typography sx={{marginTop:"35px",marginLeft:"150px",textSizeAdjust:"auto"}}>Please talk to us about your problem and identify youself in the inputs below </Typography>

       <div style={{marginLeft:"300px",marginTop:"40px"}}>
        <Button endIcon={<SendIcon />} variant="contained" sx={{backgroundColor:"red"}}>Send Report </Button>
        </div>
        </Box>
      </Container>
      </div>
        </div>
    )
}

export default Contact;