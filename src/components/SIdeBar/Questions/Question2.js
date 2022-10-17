import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../../Footer";
import Header from "../../Header1";
// import PresentMain from "./ProspectiveDevelopment/PresentMain";
// import ProspectiveMain from "./ProspectiveDevelopment/ProspectiveMain";
import PresentMain from "./ProspectiveDevelopment/PresentMain";
import ProspectiveMain from "./ProspectiveDevelopment/ProspectiveMain";

const Question2 = () => {
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
              <PresentMain />
              {/* <ProspectiveMain /> */}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <ProspectiveMain />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Question2;
