import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import React from "react";

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled("img")`
  padding : 15px;
  height: auto;

`;

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

function ActionItem({ product }) {
  return (
    <LeftContainer>
      <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }}>
        <BoltIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
}

export default ActionItem;
