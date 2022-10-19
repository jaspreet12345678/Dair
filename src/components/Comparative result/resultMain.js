import {
    Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ResultDetail from "./resultDetail";
import ResultDetail2 from "./resultdetail2";

const ResultMain = () => {
  return (
    <>
      <Link to={"./map"}>
        <Button>Back</Button>
      </Link>
      <Tabs style={{marginTop:"10px"}} variant="soft-rounded" colorScheme="green">
        <TabList style={{display:"flex",justifyContent:"center"}}>
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
