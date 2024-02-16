import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';

const TodayS = () => {

    const time = Date()

  return (
    <Container sx={{marginTop:'150px'}}>
        <Box>
            <div style={{height:'40px', width:'20px', borderRadius:'4px', backgroundColor:'rgba(219, 68, 68, 1)'}}>
                <Typography style={{marginLeft:'30px', fontFamily:'Poppins', color:'rgba(219, 68, 68, 1)', paddingTop:'10px', fontWeight:'bold'}}>Today's</Typography>
            </div>
            <Typography fontSize={40} fontFamily={"Inter"} letterSpacing={'4%'} textColor={'common.black'}>Flash Sales</Typography>
        </Box>
    </Container>
  )
}

export default TodayS