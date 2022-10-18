import React from "react";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css"
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { uniqueSort } from "jquery";
//import "./table.css";

function DigitalDevelopment(props) {
  let country_flag = localStorage.getItem("country_flag");
  let country_name = localStorage.getItem("country_name");
  let country_id = localStorage.getItem("country_id");
  let country_iso_code = localStorage.getItem("country_iso_code");
  let governanceId = 1;
  let year = localStorage.getItem("year");
  const [getData, setGetData] = useState();
  const [taxnomy_name1, settaxnomy_name1] = useState([]);
  const [indicator_name1, setindicator_name1] = useState([]);
  const [ultimate_name1, setultimate_name1] = useState([]);
  const [realData1, setrealData1] = useState([]);
  const [data, setData] = useState();
  var finalData = [];
  let development_name1 = [];
  let axios = require("axios");
  let looprun = [
    "Digital Health (DH) Governance",
    "Funding and resources",
    "Legal rules",
    "Literacy (patient+ workforce)",
    "Research Program and funding",
    "DH Infrastructure",
    "Workforce (Technical and Health care)",
  ];

  const [mydata, setmydata] = useState([]);
  let temindicator = [];
  useEffect(() => {
    myData();
    //  mapping(data);
  }, [country_id]);

  let data1 = [];
  function myData() {
    //console.log("####################");

    if (!country_id === "") {
      let data = {
        countries: `${country_id}`,
        governanceId: "2",
      };

      let config = {
        method: "post",
        url: "http://103.127.29.85:4000/ndhs-master/overview",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log("data1@@@@@@@@@@@", response);
          mapping(response.data);
          data1 = response.data;
          //setmydata(response.data);
        })
        .catch(function (error) {
          //console.log(error);
        });
    } else {
      let data = {
        countries: "103",
        governanceId: "2",
      };

      let config = {
        method: "post",
        url: "http://103.127.29.85:4000/ndhs-master/overview",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log("data1@@@@@@@@@@@", response);
          mapping(response.data);
          data1 = response.data;
          //setmydata(response.data);
        })
        .catch(function (error) {
          //console.log(error);
        });
    }
  }

  function mapping(data) {
    console.log("*************", data);
    for (const [key, val] of Object.entries(data)) {
      console.log(val);
      //development_name.push(key);
      development_name1.push(key);
      for (const [key1, val1] of Object.entries(val)) {
        taxnomy_name1.push(key1);
        if (key1 === "Development Strategy") {
          //console.log("first", val1);
          for (const [key2, val2] of Object.entries(val1)) {
            ultimate_name1.push(key2);
            for (const [key3, val3] of Object.entries(val2)) {
              indicator_name1.push(key3);
              for (const [key4, val4] of Object.entries(val3)) {
                realData1.push(val4);
              }
            }
          }
        }
      }
    }
    setGetData(development_name1);
    settaxnomy_name1(taxnomy_name1);
    setultimate_name1(ultimate_name1);
    setindicator_name1(indicator_name1);
    setrealData1(realData1);

    for (var i = 0; i < indicator_name1.length; i++) {
      const inValue = realData1.filter((e) => {
        if (e.indicator_name === indicator_name1[i]) {
          return e;
        }
      });

      finalData.push({
        indecatorName: indicator_name1[i],
        indecatorValue: inValue,
      });
    }

    setData(finalData);
    console.log("indi", finalData);
  }
  looprun.map((item, key) => {
    data?.map((item1, key) => {
      if (item === item1.indecatorValue[0].taxonomy_name) {
        item1.indecatorValue.slice(0, 1).map((data, key) => {
          console.log(data.c_name);
        });
      }
    });
  });

  return (
    <>
      <Box>
        {looprun.map((item, key) => {
          return (
            <>
              <HStack
                key={key}
                ml={5}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Heading style={{textAlign:"start"}}>{item}</Heading>
                <Flex style={{ marginRight: "20px" }}>
                  <Text>Yes</Text>
                  <Text ml={5}>No</Text>
                  <Text ml={5}>Data Not Available</Text>
                </Flex>
              </HStack>
              <Text ml={5}>Development Strategy</Text>
              <table style={{ marginLeft: "20px" }}>
                <tr
                  style={
                    {
                      //border: "1px solid white",
                    }
                  }
                >
                  <th
                    style={{
                      border: "1px solid white",
                      width: "400px",
                      textAlign:"center"
                    }}
                  >
                    Indicators Name
                  </th>
                  <th
                    style={{
                      border: "1px solid white",
                      width: "600px",
                      textAlign:"center"
                    }}
                  >
                    Questions
                  </th>
                  <th
                    style={{
                      border: "1px solid white",
                      width: "200px",
                      textAlign:"center"
                    }}
                  >
                    {country_name}
                  </th>
                </tr>
                {/* <th width="100px">{country_name}</th> */}
                {data?.map((item1, key) => {
                  if (item === item1.indecatorValue[0].taxonomy_name) {
                    return (
                      <>
                        <tr key={key} style={{ border: "1px solid white" }}>
                          <td style={{ border: "1px solid white",textAlign:"start" }}>
                            {item1.indecatorName}
                          </td>
                          {item1.indecatorValue.slice(0, 1).map((data, key) => {
                            //console.log("5555", item1.indecatorValue);
                            return (
                              // <tr>
                              <>
                                <tr
                                  key={key}
                                  style={{ border: "1px solid white" }}
                                >
                                  <td style={{ border: "1px solid white",textAlign:"start" }}>
                                    {data.question}
                                  </td>
                                </tr>
                                <td style={{ border: "1px solid white",textAlign:"center" }}>
                                  {data.status}
                                </td>
                              </>
                              //</tr>
                            );
                          })}
                        </tr>
                      </>
                    );
                  }
                })}
              </table>
            </>
          );
        })}
      </Box>
    </>
  );
}

export default DigitalDevelopment;
