import React from "react";
import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  Table,
  TableCaption,
  TableContainer,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Tbody,
  HStack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

const PresentDev = (props) => {
  let country_flag = localStorage.getItem("country_flag");
  let country_name = localStorage.getItem("country_name");
  let country_id = localStorage.getItem("country_id");
  let country_iso_code = localStorage.getItem("country_iso_code");
  let governanceId = 1;
  let year = localStorage.getItem("year");
  const present = [];
  const prospective = [];

  const [mydata, setmydata] = useState([]);

  let data1 = [];
  let axios = require("axios");
  let data = JSON.stringify({
    countries: `${country_id}`,
    governanceId: `${governanceId}`,
  });

  let config = {
    method: "post",
    url: "http://103.127.29.85:4000/ndhs-master/overview",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      data1 = response.data;
      mapping(response.data);
      //console.log("data1", response.data);
      console.log("data1", data1);
    })
    .catch(function (error) {
      //console.log(error);
    });

  // function datas() {
  //   let config = {
  //     method: "post",
  //     url: "http://103.127.29.85:4000/ndhs-master/overview",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       data1 = response.data;
  //       mapping(response.data);
  //       //console.log("data1", response.data);
  //       setmydata(response.data["Present Development"]["Availability"]);
  //       //console.log("data1", data1);
  //     })
  //     .catch(function (error) {
  //       //console.log(error);
  //     });
  // }

  // useEffect(() => {
  //   datas();
  // }, []);

  function mapping(data) {
    let development_name = [];
    let taxnomy_name = [];
    let ultimate_name = [];
    
    for (const [key, val] of Object.entries(data)) {
      development_name.push(key);
      for (const [key1, val1] of Object.entries(val)) {
        taxnomy_name.push(key1)
        // console.log("first", val1);
        for (const [key2, val2] of Object.entries(val1)) {
          ultimate_name.push(key2);
          // console.log("second", val2);
          for (const [key3, val3] of Object.entries(val2)) {
            //console.log("third", val3);
            if (key === "Present Development") {
              if (key === "Availability") {
                //console.log("Present Development");
                present.push(val3);
                // if(present === "Availability"){
                //   console.log("jaspreet123")
                // }
                // else{
                //   console.log("jaspreet")
                // }
                //   present.map((item) => {
                //     if(key === "IT Workforce & Infrastructure")
                //     console.log("9999999999", item);
                //   });

                //   console.log("12225",present)
              }
            } else {
              prospective.push(val3);
            }
          }
        }
      }
    }
    console.log(development_name);
    console.log(taxnomy_name);
    console.log(ultimate_name);
  }
  //console.log("present", present);

  console.log("data1", mydata);

  const propertyNames = Object.keys(mydata);

  console.log(propertyNames);

  return (
    <>
      <HStack mt={10} display={"flex"} justifyContent={"space-between"}>
        <Heading>AI Workforce/Infrastructure</Heading>
        <Flex style={{ "margin-right": "10px" }}>
          <Text fontSize={"2xl"}>Yes</Text>
          <Text ml={5} fontSize={"2xl"}>
            No
          </Text>
          <Text ml={5} fontSize={"2xl"}>
            Data not available
          </Text>
        </Flex>
      </HStack>
      <Heading mt={5}>Availability</Heading>
      <TableContainer mt={5}>
        <Table letiant="simple">
          <Thead>
            <Tr>
              <Th>Indicators</Th>
              <Th>Questions</Th>
              <Th>India</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>2</Td>
              <Td>3</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PresentDev;
