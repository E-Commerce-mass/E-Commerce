import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const BestSelling = () => {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
          <div
            style={{
              height: "40px",
              width: "20px",
              borderRadius: "4px",
              backgroundColor: "rgba(219, 68, 68, 1)",
            }}
          >
            <Typography
              sx={{
                width: "100px",
                marginLeft: "30px",
                fontFamily: "Poppins",
                color: "rgba(219, 68, 68, 1)",
                paddingTop: "10px",
                fontWeight: "bold",
              }}
            >
              This Month
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontFamily={"Inter"}
            letterSpacing={"4%"}
            textColor={"common.black"}
          >
            Best Selling Products
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
        >
          <Button
            onClick={() => navigate("/newarrivals")}
            color="neutral"
            sx={{
              mt: 3,
              mb: 2,
              width: "150px",
              height: "50px",
              bgcolor: "rgba(219, 68, 68, 1)",
            }}
          >
            View All
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BestSelling;
