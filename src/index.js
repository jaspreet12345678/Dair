import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import customTheme from "./utils/theme";
import NavBar from "./components/Header";
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <BrowserRouter>
  <ChakraProvider theme={customTheme}>
    <NavBar />
    <App />
    <Footer />
  </ChakraProvider>,
  //  </BrowserRouter>,

  rootElement
);
