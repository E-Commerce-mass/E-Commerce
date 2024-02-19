import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Carousel from 'react-bootstrap/Carousel';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
const SlideCategories = () => {
  const navigate = useNavigate()
  return (
    <Container sx={{display:'flex', justifySelf:'auto'}}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 250,
          bgcolor: "background.paper",
          maxHeight: 400,
        }}
      >
        <List aria-label="Categories">
          <ListItemButton sx={{ maxHeight: "40px" }} onClick={()=>{navigate("/womanfashion")}}>
            Woman's Fashion
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}onClick={()=>{navigate("/menfashion")}}>
            Men's Fashion
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }} onClick={()=>{navigate("/gaming")}}>
            Electronics
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}onClick={()=>{navigate("/notfound")}}>
            Home & Lifestyle
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}onClick={()=>{navigate("/medecine")}}>
            Medicine
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}onClick={()=>{navigate("/sports")}}>
            Sports & Outdoor
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}onClick={()=>{navigate("/notfound")}}>
            Baby's & Toys
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}onClick={()=>{navigate("/notfound")}}>
            Groceries & Pets
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}onClick={()=>{navigate("/health&beauty")}}>
            Health & Beauty
          </ListItemButton>
        </List>
      </Box>

      <Box>
        <div style={{float:'right'}}>
            <Carousel>
                <Carousel.Item>
                <img style={{height:'50vh'}}
                    className="d-block w-100"
                    src={'https://res.cloudinary.com/hzxyensd5/image/upload/v1708036896/v1bkuxkrxe25w9xy2a5b.png'}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'50vh'}}
                    className="d-block w-100"
                    src={'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg'}
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'50vh'}}
                    className="d-block w-100"
                    src={'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'}
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>
      </Box>
    </Container>
  );
};

export default SlideCategories;
