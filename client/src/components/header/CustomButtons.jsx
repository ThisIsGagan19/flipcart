import React from "react";
import { useState, useContext } from "react";
import { Box, Button, styled, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

import { DataContext } from "../../context/DataProvider.jsx";
import Profile from "../header/Profile.jsx";
import { ShoppingCart } from "@mui/icons-material";

// components
import LoginDialog from "../login/LoginDialog.jsx";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    // textDecoration: 'none',
    // color: '#FFFFFF',
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  font-weight: 600;
  border-radius: 2px;
  padding: 5px 40px;
  box-shadow: none;
  height: 32px;
`;

function CustomButtons() {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Wrapper>
  );
}

export default CustomButtons;
