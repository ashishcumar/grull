import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { shades } from "../helper/shades";
import section11AcademyCircle from "../assets/section11AcademyCircle.png";
import section11AcademyCircleMobile from "../assets/section11AcademyCircleMobile.png";

function Section11() {
  const { lavender, white } = shades;
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <Grid
      sx={{
        background: "#121717",
        minHeight: { xs: "fit-content", md: "100vh" },
        width: "100vw",
        padding: { xs: "40px 8px 24px 8px", md: "78px 24px" },
      }}
    >
      <Typography
        sx={{
          color: lavender,
          textAlign: "center",
          display: "block",
          typography: { xs: "font_24_800", md: "font_64_800" },
        }}
      >
        Learn. Grow. Excel.
      </Typography>

      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          margin: { xs: "16px 0", md: "auto" },
        }}
      >
        <img
          src={
            isDesktop ? section11AcademyCircle : section11AcademyCircleMobile
          }
          alt="section11AcademyCircle"
          style={{
            width: "100%",
            objectFit: "contain",
            display: "block",
            margin: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:{xs:"12px", md:"24px"},
          margin:{xs:"20px 0 0 0",md:"0"}
        }}
      >
        <Box
          sx={{
            border: `1px solid ${lavender}`,
            borderRadius: "16px",
            color: white,
            width:{xs:"140px", md:"200px"},
            padding:{xs:"12px 0" ,md:"16px 0"},
            typography:{xs:"font_12_600", md:"font_20_700"},
            textAlign: "center",
          }}
        >
          Become Mentor
        </Box>
        <Box
          sx={{
            border: `1px solid ${lavender}`,
            background: lavender,
            borderRadius: "16px",
            color: white,
            width:{xs:"140px", md:"200px"},
            padding:{xs:"12px 0" ,md:"16px 0"},
            typography:{xs:"font_12_600", md:"font_20_700"},
            textAlign: "center",
          }}
        >
         Talk to Mentor
        </Box>
      </Box>
    </Grid>
  );
}

export default Section11;
