import React from "react";
import Header from "./Header1";
import Map from "./SIdeBar/Map222";
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
      window.scroll(0,0)
    }, [])
    
  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default Main;
