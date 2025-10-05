import { useState } from "react";

import { AppBar, Toolbar, Box } from "@mui/material";
import DetailView from "./components/details/DetailView.jsx";

// components
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import DataProvider from "./context/DataProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
