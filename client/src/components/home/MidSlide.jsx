import { Box, styled } from "@mui/material";
import Slide from "./Slide.jsx";
import React from "react";

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  width: "17%",
  padding: 5,
  margintop: 10,
  marginleft: 10,
  textalign: "center",
  background: "#ffffff",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

function MidSlide({ products, title, timer }) {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} alt="ad" style={{ width: "217px" }} />
      </RightComponent>
    </Component>
  );
}

export default MidSlide;
