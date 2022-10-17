import { Box, Heading, TabPanels, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import HealthReadiness from "./HealthDevelopment";
import HealthAvailabilty from "./HealthCapacity";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DigitalAvailability from "./DigitalCapacity";
import DigitalReadiness from './DigitalDevelopment';
import DigitalCapacity from "./DigitalCapacity";
import DigitalDevelopment from "./DigitalDevelopment";
import HealthDevelopment from "./HealthDevelopment";
import HealthCapacity from "./HealthCapacity";

function ProspectiveMain() {
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
              <DigitalAvailability />
            </TabPanel>
            <TabPanel>
              <DigitalReadiness />
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
                  Capacity Building
                </Tab>
                <Tab
                  class="btn"
                  style={{
                    // background: "#f2f9a0",
                    borderRadius: "5px",
                  }}
                >
                  Development Strategy
                </Tab>
              </TabList>
              <TabPanel>
                  <HealthCapacity />
              </TabPanel>
              <TabPanel>
                  <HealthDevelopment />
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
              <TabPanel><DigitalCapacity/></TabPanel>
              <TabPanel><DigitalDevelopment /></TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs> */}
      </Box>
    </>
  );
}

export default ProspectiveMain;
