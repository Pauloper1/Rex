import React from "react";
import Dashboard from "./pages/Dashboard";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
