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
import Present1Main from "./PresentDevelopment/Present1Main";
import Prospective1Main from "./PresentDevelopment/Prospective1Main";

const Question = () => {
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
              <Present1Main />
              {/* <ProspectiveMain /> */}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Prospective1Main />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Question;
