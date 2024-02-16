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

const Aboutus=()=>{

    return (
        <div style={{marginTop:"10px",marginBottom:"50px"}}>
            <div style={{marginLeft:"40px",borderRadius:"40px"}}>
  <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#f5f1f1', height: '300vh' ,borderRadius:"20px"}} > 
<div style={{marginTop:"50px"}}>
        <Typography sx={{marginLeft:"90px", fontSize: '3rem',marginTop:"40px"}}>- Our Story -</Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"40px",textSizeAdjust:"auto"}}>- This is our E-commerce project wel call ourselfs the <br></br>M.A.S.S <br></br>- Organisation you can call us for more informations or <br></br>you can visit us in RBK  </Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"40px",textSizeAdjust:"auto"}}>- This is our E-commerce project wel call ourselfs the <br></br>M.A.S.S <br></br>- Organisation you can call us for more informations or <br></br>you can visit us in RBK  </Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"40px",textSizeAdjust:"auto"}}>- This is our E-commerce project wel call ourselfs the <br></br>M.A.S.S <br></br>- Organisation you can call us for more informations or <br></br>you can visit us in RBK  </Typography>
       <div style={{marginLeft:"600px",marginTop:"-390px",borderRadius:"20px"}}>
       <img src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=egAYAFjBltN8fEpS1xVkxQxgSKbsvXVx1tKA51WWWIPYHcHVktq5eVh1szGRwXBi88Ep933ZHaRGm54P-J4Zj2z0e439bTcfPbFyx4C~VX~02DXXoQyapd~nTwVQ3JDAHbyqOqdxRPa3sjxQBUE0nKiu368jLgbygsch4qwb5lY6dlEWamJWFkgsFDHLe0CKUMrnN0R-BEW2pARc4OhmrPbSWGjg-dOO6OXd1vwMKQ6QAMmny4Gw5WVF7Fx9pRyeoLb~M3g3dWyHTEOfyAmV8UmvkujnGWh8hC4-nBt8d56vCK2vhSYxSuIoNX1aTgMwkK0RHGAb~252Yhv5-PBuPA__"height={"420px"}width={"450px"} borderRadius={"60px"}/>
      
       </div>
        </div>
        </Box>
      </Container>
      
      </div>
     
    
        
     
      </div>
     
    )
}

export default Aboutus;