import { useState } from "react";

import { AppBar, Toolbar, Box } from "@mui/material";

// components
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import DataProvider from "./context/DataProvider.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
