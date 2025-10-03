import { useState } from "react";

import { AppBar, Toolbar, Box } from "@mui/material";

// components
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
