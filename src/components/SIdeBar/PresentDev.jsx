import React from "react";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css"
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
  let development_name = [];
  let taxnomy_name = [];
  let ultimate_name = [];
  let indicator_name = [];
  let realData = [];
  const present = [];
  const prospective = [];
  var undo = [];
  var ques = [];

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
    for (const [key, val] of Object.entries(data)) {
      development_name.push(key);

      for (const [key1, val1] of Object.entries(val)) {
        taxnomy_name.push(key1);
        if (key1 === "Availability") {
          //console.log("first", val1);
          for (const [key2, val2] of Object.entries(val1)) {
            ultimate_name.push(key2);
            //console.log("second", val2);
            for (const [key3, val3] of Object.entries(val2)) {
              indicator_name.push(val3);
              // indicator_name.map((item) => {
              //   console.log("5555555", item[0].question);
              // });
              for (const [key4, val4] of Object.entries(val3)) {
                //let convert = Object.keys(key4);
                console.log("convert", typeof key4);
                realData.push(val4);

                realData.map((item) => {
                  console.log("array",typeof item.ultimate_name);
                  item.map((data) => {
                    console.log(data.ultimate_name);
                  });
                });
                // let len = realData.length;
                // console.log(len);
                //for(let i=0 ; i <=len; i++){
                // if(development_name === realData[i].development_name){
                //   console.log("op",realData);
                // }

                // console.log("third", val3);
                // if (key === "Present Development") {
                //   if (key === "Availability") {
                //     //console.log("Present Development");
                //     present.push(val3);
                //     // if(present === "Availability"){
                //     //   console.log("jaspreet123")
                //     // }
                //     // else{
                //     //   console.log("jaspreet")
                //     // }
                //     //   present.map((item) => {
                //     //     if(key === "IT Workforce & Infrastructure")
                //     //     console.log("9999999999", item);
                //     //   });
                //     //   console.log("12225",present)
                //   }
                // } else {
                //   prospective.push(val3);
                // }
              }
            }
          }
        }
      }
    }

    // jaydeep = Object.keys(development_name).map((keyName, i) => {
    //   return development_name[keyName];
    // });

    // jaydeep.map((item) => {
    //   console.log("000000000000", item);
    // });
    // jaydeep = Object.keys(development_name).map((key) => [
    //   Number(key),
    //   development_name[key],
    // ]);

    console.log("development_name", development_name);
    console.log("tax", taxnomy_name);
    console.log("ulti", ultimate_name);
    console.log("indi", indicator_name);
    console.log("real", realData);
    const propertyNames = Object.keys(mydata);
    console.log("data1", mydata);

    let len = realData.length;

    //console.log(len);
    for (let i = 0; i <= len; i++) {
      //console.log(development_name)
      if (development_name[0] === realData[0].development_name) {
        //console.log("5555", realData[0].development_name);
        // console.log("666666",realData[0].taxonomy_name);
        if (ultimate_name[0] === realData[i].taxonomy_name) {
          console.log("ppppppp", realData[i].question);
          // let jas = realData[i].question;
          undo.push(realData[i].question);
          // if(taxnomy_name[0] === realData[i].taxnomy_name){
          //   console.log(realData[i].taxnomy_name)
          // }
        }
      }
    }
  }
  //console.log("present", present);

  // undo?.map((item)=>{
  //   console.log("##############################",item.length)
  // })

  console.log("und@@@@@@@@@o", undo[0]);

  // console.log(propertyNames);
  console.log("ques", typeof ques);

  return (
    <>
      <div>
        {realData.map((item) => {
          console.log("array", item.ultimate_name);
          <h1>kkljh;ilkh</h1>
        })}
      </div>
      <h1>{}</h1>
        

      {/* <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr> */}
      {/* {Object.keys(jaydeep).map((item, i) => {
              return (
                <>
                  <th scope="row">3</th>
                  <td>{item}</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </>
              );
            })} */}
      {/* {jaydeep.map((item) => {
              return (
                <>
                  <th scope="row">3</th>
                  <td>{item}</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </>
              );
            })}
          </tr>
        </tbody>
      </table> */}
      {/* <HStack mt={10} display={"flex"} justifyContent={"space-between"}>
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
        {jaydeep.map((item) => {
          return (
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
                  <Td>{item}</Td>
                  <Td>3</Td>
                </Tr>
              </Tbody>
            </Table>
          );
        })}
      </TableContainer> */}
    </>
  );
};

export default PresentDev;
