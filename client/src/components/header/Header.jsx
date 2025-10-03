import React from "react";
import { AppBar, Toolbar,Box, styled, Typography} from "@mui/material";

// component
import Search from "./Search.jsx";
import CustomButtons from "./CustomButtons.jsx";

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonsWrapper = styled(Box)`
    margin: 0 5% 0 auto;
    & > button, & > p, & > div {
      margin-right: 40px;
        font-size: 16px;
    }
`;

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <div>
      <StyledHeader>
        
        <Toolbar style={{minHeight:55}}>
            {/* logo */}
            <Component>
                <img src={logoURL} alt="logo" style={{width:75}}/>
                <Box style={{display: 'flex'}}>
                    <SubHeading>Explore 
                        <Box component={"span"} style={{color: '#ffe500'}}>Plus</Box>
                    </SubHeading>
                    <PlusImage src={subURL} alt="sub-logo" />
                </Box>
            </Component>
            {/* logo finished */}
            <Search />
            <CustomButtonsWrapper>
                <CustomButtons />
            </CustomButtonsWrapper>
        </Toolbar>
        
      </StyledHeader>
    </div>
  );
}

export default Header;
