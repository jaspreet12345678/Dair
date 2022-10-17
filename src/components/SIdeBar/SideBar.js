import React from "react";
import Radar from "../Comparative result/Radar";
import Graph from "./Map";

const SideBar = (propss) => {
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
            {/* <a
                class="nav-link active"
                id="v-tabs-home-tab"
                data-mdb-toggle="tab"
                href="#v-tabs-home"
                role="tab"
                aria-controls="v-tabs-home"
                aria-selected="true"
              > */}
            {/* </a> */}
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
              {" "}
              <Graph props={propss} />
            </div>
            <div
              class="tab-pane fade"
              id="v-tabs-messages"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >
              <Radar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
