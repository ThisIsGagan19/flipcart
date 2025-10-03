import React from "react";

// components
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  padding: 10px;
  background-color: #F2F2F2;
`;

function Home() {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
}

export default Home;
