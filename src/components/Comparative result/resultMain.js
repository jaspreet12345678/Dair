import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from "@chakra-ui/react";
import React from "react";
import ResultDetail from './resultDetail';
import ResultDetail2 from './resultdetail2';

const ResultMain = () => {
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
              <ResultDetail />
              {/* <ProspectiveMain /> */}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <ResultDetail2 />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ResultMain;
