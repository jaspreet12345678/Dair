import React from "react";
import Header from "./Header1";
//import Map from "./SIdeBar/Map222";
import { useEffect } from "react";
import Graph from "./SIdeBar/Map"
import Footer from "./Footer";
import Radar from "./Comparative result/Radar";
import Countries from "./SIdeBar/Countries";
import PieMain from './SIdeBar/PieChart/PieMain';
import ResultDetail from './Comparative result/resultDetail';
import ComparativeMap from './Comparative result/map2';
import Question from './SIdeBar/Questions/Question';
import Question2 from './SIdeBar/Questions/Question2';

const Main = (props) => {
  const propss = props;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div class="row w-100">
        <div class="col-3" style={{ maxWidth: "18%" }}>
          <div
            class="nav flex-column nav-tabs text-center active"
            id="v-tabs-tab"
            role="tablist"
            aria-orientation="vertical"
            style={{ width: "150px" }}
          >
           
            <a
              class="nav-link"
              id="v-tabs-profile-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-profile"
              role="tab"
              aria-controls="v-tabs-profile"
              aria-selected="false"
              active="true"
            >
              NDHS Map
            </a>
            <a
              class="nav-link"
              id="v-tabs-messages-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-messages"
              role="tab"
              aria-controls="v-tabs-messages"
              aria-selected="false"
            >
              Countries
            </a>
            <a
              class="nav-link"
              id="v-tabs-messages-tab2"
              data-mdb-toggle="tab"
              href="#v-tabs-messages2"
              role="tab"
              aria-controls="v-tabs-messages"
              aria-selected="false"
            >
              Present Development
            </a>
            <a
              class="nav-link"
              id="v-tabs-messages-tab3"
              data-mdb-toggle="tab"
              href="#v-tabs-messages3"
              role="tab"
              aria-controls="v-tabs-messages"
              aria-selected="false"
            >
              Prospective Development
            </a>
            <a
              class="nav-link"
              id="v-tabs-messages-tab1"
              data-mdb-toggle="tab"
              href="#v-tabs-messages1"
              role="tab"
              aria-controls="v-tabs-messages"
              aria-selected="false"
            >
              Comparative Result
            </a>
          </div>
        </div>

        <div class="col-9">
          <div class="tab-content active" id="v-tabs-tabContent">
            <div
              class="tab-pane active"
              id="v-tabs-profile"
              role="tabpanel"
              aria-labelledby="v-tabs-profile-tab"
            >
             
              <Graph props={propss} />
            </div>
            <div
              class="tab-pane fade"
              id="v-tabs-messages"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >
              <PieMain />
            </div>
            <div
              class="tab-pane fade"
              id="v-tabs-messages2"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >
              <Question />
            </div>
            <div
              class="tab-pane fade"
              id="v-tabs-messages3"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >
              <Question2 />
            </div>
            <div
              class="tab-pane fade"
              id="v-tabs-messages1"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >
              <ComparativeMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
