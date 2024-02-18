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
        <Box sx={{ bgcolor: '#f5f1f1', height: '220vh' ,borderRadius:"20px"}} > 
    <div style={{marginTop:"50px",marginLeft:"30px",paddingTop:"30px"}}>
        <Typography sx={{marginLeft:"90px", fontSize: '3rem',marginTop:"40px",fontFamily:"system-ui"}}>- Our Story -</Typography>
        <Typography sx={{marginTop:"50px",marginLeft:"40px",textSizeAdjust:"auto",fontFamily:"system-ui"}}>- This is our E-commerce project wel call ourselfs the <br></br>M.A.S.S <br></br> Organisation you can call us for more informations or <br></br>you can visit us in RBK  </Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"40px",textSizeAdjust:"auto",fontFamily:"system-ui"}}>- This is our E-commerce project wel call ourselfs the <br></br>M.A.S.S <br></br> Organisation you can call us for more informations or <br></br>you can visit us in RBK  </Typography>
        <Typography sx={{marginTop:"20px",marginLeft:"40px",textSizeAdjust:"auto",fontFamily:"system-ui"}}>- This is our E-commerce project wel call ourselfs the <br></br>M.A.S.S <br></br> Organisation you can call us for more informations or <br></br>you can visit us in RBK  </Typography>
       <div style={{marginLeft:"600px",marginTop:"-410px",borderRadius:"20px"}}>

       <img src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=egAYAFjBltN8fEpS1xVkxQxgSKbsvXVx1tKA51WWWIPYHcHVktq5eVh1szGRwXBi88Ep933ZHaRGm54P-J4Zj2z0e439bTcfPbFyx4C~VX~02DXXoQyapd~nTwVQ3JDAHbyqOqdxRPa3sjxQBUE0nKiu368jLgbygsch4qwb5lY6dlEWamJWFkgsFDHLe0CKUMrnN0R-BEW2pARc4OhmrPbSWGjg-dOO6OXd1vwMKQ6QAMmny4Gw5WVF7Fx9pRyeoLb~M3g3dWyHTEOfyAmV8UmvkujnGWh8hC4-nBt8d56vCK2vhSYxSuIoNX1aTgMwkK0RHGAb~252Yhv5-PBuPA__"height={"420px"}width={"450px"} border={"1px"}/>
     
     <div>
      <Typography sx={{marginLeft:"-150px",marginTop:"60px",fontSize:"3rem",color:"#b11920",fontFamily:"system-ui",textDecoration:"underline"}}> - Creators -</Typography>
     </div>
      <div style={{display: "flex",gap: "200px",marginLeft:"-400px",marginTop:"60px"}}>
      <img src="https://res.cloudinary.com/ali22/image/upload/v1699982243/koss/cypet04ltf9o6kmqox8f.png"height={"290px"}width={"270px"} border={"5px"}/>
        <img src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/395431041_1069759774042282_8637713440594067284_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ji1kRYXnvBQAX98MtFm&_nc_ht=scontent.ftun2-2.fna&oh=00_AfD3P2TpgpCStHf6sAe6LyQ1wb-tB9GHbbj0U8WAkgYN7A&oe=65D371DA"height={"290px"}width={"270px"} border={"5px"}/>
        </div>
      <div>
     <Typography sx={{marginLeft:"-350px", fontSize: '1.7rem',marginTop:"10px",color:"rgb(234, 96, 96)",fontFamily:"system-ui"}}> - Slah SBK - </Typography>
     <Typography sx={{marginLeft:"110px", fontSize: '1.7rem',marginTop:"-47px",color:"rgb(234, 96, 96)",fontFamily:"system-ui"}}> - Ahmed Brini - </Typography>
      </div>
     
      <div style={{display: "flex",gap: "200px",marginLeft:"-400px",marginTop:"30px",borderRadius:"20px"}}>
      <img src="https://res.cloudinary.com/ali22/image/upload/v1698013241/koss/etpn0ndqpk0efxcr1nwf.jpg"height={"290px"}width={"270px"} border={"5px"}borderRadius={"10px"}/>
      <img src="https://res.cloudinary.com/ali22/image/upload/v1698054110/koss/sty7p6muvobkvfygiqtx.jpg"height={"290px"}width={"270px"} border={"5px"}/>
      </div>
      <div>
      <div>
     <Typography sx={{marginLeft:"95px", fontSize: '1.7rem',marginTop:"5px",color:"rgb(234, 96, 96)",fontFamily:"system-ui"}}> - Mahdi Abichou - </Typography>
     <Typography sx={{marginLeft:"-366px", fontSize: '1.7rem',marginTop:"-44px",color:"rgb(234, 96, 96)",fontFamily:"system-ui"}}> - Salah Mbakri - </Typography>
     <Typography sx={{marginLeft:"-350px", fontSize: '1.7rem',marginTop:"120px",color:"blakc",fontFamily:"system-ui"}}>  - Thank You For Visting Our E-commerce Website -  </Typography>
      </div>
      </div>
       </div>
        </div>
        </Box>
      </Container>
      
      </div>
     
    
        
     
      </div>
     
    )
}

export default Aboutus;