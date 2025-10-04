import { Box, Typography, Button, Divider, styled, Grid } from "@mui/material";
import { imageURL } from "../../constants/data.js";
import React from "react";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  background-color: #ffffff;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));

function MidSection() { 
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="image" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
      <Image src={url} alt="covid" style={{ width: "100%", marginTop: 10 }} />
    </>
  );
}

export default MidSection;
