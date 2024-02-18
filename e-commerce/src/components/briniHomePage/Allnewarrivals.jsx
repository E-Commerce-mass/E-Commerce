import React from "react";
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
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Allnewarrivals = () => {
  const navigate = useNavigate();
  const productData = useContext(ProductContext);

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
        if (e.new) {
          return (
            <Box display={"inline-flex"} sx={{ marginRight: "30px" }}>
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
                      color: "white",
                      backgroundColor: "rgba(0, 255, 102, 1)",
                    }}
                  >
                    new
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
                >
                  <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
                  Add to Cart
                </Button>

                <CardContent orientation="vertical" sx={{ gap: "5px" }}>
                  <Typography level="title-lg">{e.productName}</Typography>
                  <CardContent orientation="horizontal">
                    <Typography
                      fontSize="s"
                      fontWeight="lg"
                      sx={{ color: "red" }}
                    >
                      ${e.price}
                    </Typography>
                    <Stack
                      spacing={1}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                      }}
                    >
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
                  </CardContent>
                </CardContent>
              </Card>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default Allnewarrivals;
