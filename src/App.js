import React from "react";
// import Map from "./components/Map";
import { Switch, Route } from "react-router-dom";
import Index from "./components";
import Sidebar from "./components/SIdeBar/Sidebar";
import Map from "./components/SIdeBar/Map222";
import Donut from "./components/SIdeBar/donut";
import MainMap from "./components/SIdeBar/MainMap";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      {/* <MainMap /> */}
      {/* <Map /> */}
      {/* <Donut /> */}
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/map" component={Main} />
      </Switch>
    </>
  );
}
