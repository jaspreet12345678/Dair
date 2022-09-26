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
import Test from "./test";
import Graph2 from "./components/Graph";
import Map3D from "./components/Graph";
import PieMain from "./components/PieMain";
import PresentDev from "./components/SIdeBar/PresentDev";

export default function App(props) {
  return (
    <>
      {/* <Graph2 /> */}
      {/* <Practise /> */}
      {/* <Donut /> */}
      {/* <Map3D /> */}
      {/* <Practise /> */}
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/map" component={Main} />
        <Route path="/graph/:country_id" component={PieMain} />
        <Route path="/present" component={PresentDev} />
      </Switch>
    </>
  );
}
