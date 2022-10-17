import { Box, Heading, TabPanels, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
// import HealthReadiness from "../PresentDevelopment/HealthReadiness";
// import HealthAvailabilty from "../PresentDevelopment/HealthAvailability";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import DigitalAvailability from "../PresentDevelopment/DigitalAvailability";
// import DigitalReadiness from "../PresentDevelopment/DigitalReadiness";
import HealthDevelopment from "./HealthDevelopment";
import HealthCapacity from "./HealthCapacity";

function PresentMain() {
  return (
    <>
      <Box>
        <Tabs align="end" variant="enclosed">
          <TabList>
            <Tab>Capacity Building</Tab>
            <Tab>Development Strategy</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HealthCapacity />
            </TabPanel>
            <TabPanel>
              <HealthDevelopment />
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* <Tabs style={{ width: "1100px" }}>
          <TabList
            style={{
              fontSize: "20px",
              margin: "20px",
              // color: "#1616b7",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            <Tab
              style={{
                // background: "#a7f8a2",
                borderRadius: "5px",
              }}
            >
              Health & IT
            </Tab>
            <Tab
              style={{
                //  background: "#f4faa0",
                borderRadius: "5px",
              }}
            >
              Digital Health
            </Tab>
          </TabList>
          <TabPanel style={{ fontSize: "20px", margin: "20px" }}>
            <Tabs defaultIndex={1}>
              <TabList>
                <Tab
                  class="btn"
                  style={{
                    //  background: "#f5e5f8",
                    borderRadius: "5px",
                  }}
                >
                  Availability
                </Tab>
                <Tab
                  class="btn"
                  style={{
                    // background: "#f2f9a0",
                    borderRadius: "5px",
                  }}
                >
                  Readiness
                </Tab>
              </TabList>
              <TabPanel>
                  <HealthAvailabilty />
              </TabPanel>
              <TabPanel>
                  <HealthReadiness />
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel style={{ fontSize: "20px", margin: "20px" }}>
            <Tabs>
              <TabList>
                <Tab
                  style={{
                    // background: "#f5e5f8",
                    borderRadius: "5px",
                  }}
                >
                  Availability
                </Tab>
                <Tab
                  style={{
                    //  background: "#f2f9a0",
                    borderRadius: "5px",
                  }}
                >
                  Readiness
                </Tab>
              </TabList>
              <TabPanel><DigitalAvailability /></TabPanel>
              <TabPanel><DigitalReadiness /></TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs> */}
      </Box>
    </>
  );
}

export default PresentMain;
