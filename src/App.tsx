/** @jsxImportSource @emotion/react */
import React from "react";
import DayCounter from "./components/DayCounter";
import Gallery from "./components/Gallery";
import Topbar from "./components/Topbar";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Topbar />
        <DayCounter />
        <Gallery />
      </div>
    </ChakraProvider>
  );
};

export default App;
