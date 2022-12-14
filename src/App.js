import React from "react";
// import Map from "./components/Map";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Index from "./components";
import Map from "./components/SIdeBar/Map222";
import Donut from "./components/SIdeBar/donut";
import MainMap from "./components/SIdeBar/MainMap";

import Practise from "./components/SIdeBar/Practice";
import Test from "./test";

import PresentDev from "./components/SIdeBar/Questions/PresentDevelopment/HealthReadiness";
import Questions from "./components/SIdeBar/Questions/ProspectiveDevelopment/PresentMain";
import Ques from "./components/QuestionMain";
import ProspectiveDev from "./components/SIdeBar/Questions/PresentDevelopment/HealthAvailability";
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
import Accordin from "./components/Comparative result/Accordin";

import ResultDetail from "./components/Comparative result/resultDetail";
import SideBar from "./components/SIdeBar/SideBar";
import PresentMain from "./components/SIdeBar/Questions/ProspectiveDevelopment/PresentMain";
import Question from "./components/SIdeBar/Questions/Question";
import PieMain from "./components/SIdeBar/PieChart/PieMain";
import Main from "./components/Main";
import Question2 from './components/SIdeBar/Questions/Question2';
import ResultMain from './components/Comparative result/resultMain';
import ResultDetail2 from "./components/Comparative result/resultdetail2";
import Methodology from "./components/Methodology";
import Atlas from './components/Atlas';
import Contact from "./components/Contact";
import Pdf from "./components/Pdf";

export default function App(props) {
  return (
    <>


      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/map" component={Main} />
          <Route path="/graph/:country_id" component={PieMain} />
          <Route path="/present" component={Question} />
          <Route path="/atlas" component={Atlas} />
          <Route path="/report" component={Pdf} />
          <Route path="/contact" component={Contact} />
          <Route path="/methodology" component={Methodology} />
          <Route path="/prospective" component={Question2} />
          <Route path="/comparative-map" exact component={ComparativeMap} />
          <Route path="/result-details" exact component={ResultMain} />
          <Route path="/network" exact component={Tree} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
