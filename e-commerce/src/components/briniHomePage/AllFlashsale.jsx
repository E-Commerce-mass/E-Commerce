import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductContext from "../UseContext";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useState, useEffect, useRef } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";

const AllFlashsale = () => {
  const productData = useContext(ProductContext);
  const navigate = useNavigate();
  const time = Date();

  const hundleLike = (data) => {
    axios.post("http://localhost:8080/favorit/like", data)
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
      console.error(err)
    })
  }

  return (
    <Box
      sx={{
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "50px",
        width: "100%",
      }}
    >
      {productData.map((e) => {
        if (e.promotion) {
          return (
            <Box display={"inline-flex"}>
              <Card
                sx={{
                  width: 250,
                  marginTop: "30px",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                }}
              >
                <div>
                  <Typography
                    sx={{
                      height: "25px",
                      width: "55px",
                      textAlign: "center",
                      fontFamily: "cursive",
                      borderRadius: "4px",
                      color: "wheat",
                      backgroundColor: "rgba(219, 68, 68, 1)",
                    }}
                  >
                    -{e.promotion}%
                  </Typography>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="md"
                    sx={{
                      position: "absolute",
                      top: "0.3rem",
                      right: "0.5rem",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      zIndex: 1,
                    }}
                    onClick={()=>hundleLike({product:e,userIduser:1})}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="md"
                    sx={{
                      position: "absolute",
                      top: "2.8rem",
                      right: "0.5rem",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      zIndex: "1",
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </div>
                <AspectRatio
                  sx={{ maxWidth: "90%", marginLeft: "50px" }}
                  minHeight="120px"
                  maxHeight="120px"
                >
                  <img
                    style={{ width: "120px", height: "120px" }}
                    src={e.images[0].image}
                    alt="product"
                  />
                </AspectRatio>
                <Button
                  disabled={false}
                  fullWidth
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{
                    alignSelf: "center",
                    fontWeight: 600,
                    backgroundColor: "black",
                    borderRadius: "none",
                  }}
                  onClick={()=>navigate('/oneview', {state: e})}
                >
                  <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
                  Add to Cart
                </Button>

                <CardContent orientation="vertical" sx={{ gap: "5px" }}>
                  <Typography level="title-lg">{e.productName}</Typography>
                  <div>
                    <Typography
                      fontSize="lg"
                      fontWeight="lg"
                      sx={{ color: "red" }}
                    >
                      ${e.price - (e.price * (e.promotion / 100)).toFixed(2)}
                      <Typography
                        fontWeight="10px"
                        sx={{
                          color: "gray",
                          marginLeft: "10px",
                          textDecoration: "line-through",
                        }}
                      >
                        ${e.price}
                      </Typography>
                    </Typography>
                    <Stack
                      spacing={1}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      {console.log(e.reviews)}
                      <Rating
                        name="half-rating"
                        defaultValue={e.reviews.length}
                        precision={0.5}
                        readOnly
                      />
                      <span style={{ marginTop: "0px" }}>
                        ({e.reviews.length})
                      </span>
                    </Stack>
                  </div>
                </CardContent>
              </Card>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default AllFlashsale;
