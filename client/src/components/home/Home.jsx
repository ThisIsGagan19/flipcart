import React from "react";
import { useEffect } from "react";
// components
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

function Home() {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
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
