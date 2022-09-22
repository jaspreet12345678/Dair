import React from "react";
// import Map from "./components/Map";
import { Switch, Route } from "react-router-dom";
import Index from "./components";
import Sidebar from "./components/SIdeBar/Sidebar";
import Map from "./components/SIdeBar/Map222";
import Donut from "./components/SIdeBar/donut";
import MainMap from "./components/SIdeBar/MainMap";
import Main from "./components/Main";
import Practise from "./components/SIdeBar/Practice";
import Mohit from "./components/SIdeBar/Mohit";
import Test from "./test";

export default function App() {
  return (
    <>
      {/* <Practise /> */}
      {/* <Donut /> */}
      {/* <Practise /> */}
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/map" component={Mohit} />
        <Route path="/text" component={Test} />
      </Switch>
    </>
  );
}
