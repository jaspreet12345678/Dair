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
import Questions from "./components/SIdeBar/Question";
import Ques from "./components/QuestionMain";
import ProspectiveDev from "./components/SIdeBar/ProspectiveDev";
import ComparativeMap from "./components/Comparative result/map2";

import NetworkChart from "./components/SIdeBar/NetworkChart";
import Tree from "./components/Comparative result/Network";
import Radar from "./components/Comparative result/Radar";
import Bubble from "./components/Comparative result/BubbleChart";
import BarChart from "./components/Comparative result/BarChart";
import Rose from "./components/Comparative result/Rose";
import Example from "./components/Comparative result/MultiDrop";
import ProgressBar from "./components/Comparative result/ProgressBar";
import Bar from "./components/Comparative result/Bar";
import ComparativeTab from "./components/Comparative result/ComparativeTab";

export default function App(props) {
  return (
    <>
    <ComparativeTab />
    {/* <Bar /> */}
      {/* <ProgressBar /> */}
      {/* <BarChart /> */}
      {/* <Bubble /> */}
      {/* <Rose /> */}
      {/* <Radar /> */}

      {/* <Tree /> */}

      {/* <NetworkChart /> */}
      {/* <ComparativeMap /> */}
      {/* <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/map" component={Main} />
        <Route path="/graph/:country_id" component={PieMain} />
        <Route path="/present" component={PresentDev} />
        <Route path="/prospective" component={ProspectiveDev} />
      </Switch> */}
    </>
  );
}
