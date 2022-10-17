import { Box, Heading, TabPanels, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DigitalAvailability from "./DigitalAvailability";
import DigitalReadiness from './DigitalReadiness';

function Prospective1Main() {
  return (
    <>
      <Box>
      <Tabs align="end" variant="enclosed">
          <TabList>
            <Tab>Availability</Tab>
            <Tab>Readiness</Tab>
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

export default Prospective1Main;
