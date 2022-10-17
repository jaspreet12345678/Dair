import React from "react";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import Header from "../../Header1";
import Footer from "../../Footer";
import PresentPie from "./HealthPieChart/PresentPie";
import ProspectivePie from "./HealthPieChart/ProspectivePie";
import DHProspectivePie from "./DigitalPieChart/DHProspectivePie";
import DigitalPresentPie from "./DigitalPieChart/DigitalPresentPie";

const PieMain = () => {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Health & IT</Tab>
          <Tab>Digital Health</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack>
              <PresentPie />
              <ProspectivePie />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <DigitalPresentPie />
              <DHProspectivePie />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PieMain;
