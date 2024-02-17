import React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";

const CategoriesJBL = () => {
  return (
    <Container
      sx={{
        backgroundColor: "black",
        marginTop: "100px",
        width: "100%",
        height: "400px",
        zIndex: -1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* <img src="https://res.cloudinary.com/hzxyensd5/image/upload/v1708132372/mmdoxljd2mv6urxuodjs.png" alt="" /> */}
      <Box
        width={"40%"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography>Categories</Typography>
        <Typography textColor="white" fontSize={"50px"}>
          Enhance Your Music Experience
        </Typography>
        <Button variant="plain" fullWidth sx={{backgroundColor:'green', color:'white'}}>Buy Now</Button>
      </Box>
      <Box zIndex={1}>
        <img
          src="https://res.cloudinary.com/hzxyensd5/image/upload/v1708132919/gqpvg7grzbauqw2twxjz.png"
          alt="JBL"
          height={"100%"}
          width={"100%"}
        />
      </Box>
    </Container>
  );
};

export default CategoriesJBL;
