import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Progress,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as echarts from "echarts";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Questions from "../SIdeBar/Questions/ProspectiveDevelopment/PresentMain";
import ProspectiveDev from "../SIdeBar/Questions/PresentDevelopment/HealthAvailability";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit";
import "./active.css";
import { Link } from "react-router-dom";

const ResultDetail = () => {
  let name1 = "UK";
  let name2 = "USA";
  const [availableData, setAvailableData] = useState();
  const [redinessData, setredinessData] = useState();
  const [capacityData, setCapacityData] = useState();
  const [developData, setdevelopData] = useState();
  const [finaldata, setfinaldata] = useState();
  const [data, setmyData] = useState([]);
  let country_id1 = localStorage.getItem("countries");
  let d = JSON.parse(country_id1);
  [d].map((item) => {
    console.log(item);
  });

  console.log(d);
  useEffect(() => {
    // localStorage.removeItem("countries")
    dataa();
    myData();
    adata();
  }, []);

  let scoreFinal = [];
  let isLoading = true;
  let development_name = [];
  let ultimate_name = [];
  let viewDataAvalability = [];
  let taxonomy = [];
  let taxonomy1 = [];
  let ulitimate1 = [];
  let ulitimate2 = [];

  let development_type = [];

  let taxonomy_id;
  let country1 = [];
  let indicator_score = [];
  let valop = [];

  // console.log(d[0].cat)
  function dataa() {
    let localStoreData = [];
    var axios = require("axios");
    if (d) {
      var data = {
        countries: d[0].cat + "," + d[1].cat,
        governanceId: 1,
      };
    } else {
      var data = {
        countries: "74,228",
        governanceId: 1,
      };
    }
    var config = {
      method: "post",
      url: "http://103.127.29.85:4000/ndhs-master/overview",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        comaprativeResultMain(response.data, 0);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function comaprativeResultMain(info, data1) {
    console.log(info);

    let data = [];
    // apiDataService.getComparativeOverview(data).subscribe((result) => {

    var v = [];
    for (const [key, val] of Object.entries(info)) {
      development_type.push(key);
      console.log("development_type", development_type);
      v.push(val);
    }
    for (const [key1, val1] of Object.entries(v[0])) {
      ulitimate1.push(key1);
      console.log("ulitimate1", ulitimate1);
      taxonomy.push(val1);
    }
    for (const [key1, val1] of Object.entries(v[1])) {
      ulitimate2.push(key1);
      //   console.log("ulitimate1", ulitimate2);
      taxonomy1.push(val1);
      //  console.log("taxonomy", taxonomy1);
    }

    function myScore(taxonomy) {
      indicator_score = [];
      let av = [];
      for (const [key1, val1] of Object.entries(taxonomy)) {
        let y = val1;
        for (const [key, val] of Object.entries(y)) {
          let t = val;
          for (const [key4, val4] of Object.entries(t)) {
            let actual_score1 = 0;
            let actual_score2 = 0;
            let indicator_score1 = 0;
            let indicator_score2 = 0;
            let country_percantag1 = 0;
            let country_percantag2 = 0;

            Object.entries(t).forEach((el) => {
              country1 = [];
              var e = el[1];
              e.forEach((elmnt, index) => {
                taxonomy_id = elmnt.taxonomy_id;
                country1.push(elmnt.c_name);
                if (index == 0) {
                  actual_score1 += elmnt.actual_score;
                  indicator_score1 = elmnt.indicator_score;
                } else {
                  actual_score2 += elmnt.actual_score;
                  indicator_score2 = elmnt.indicator_score;
                }
              });
            });
            country_percantag1 = Math.round(
              Math.round((actual_score1 / indicator_score1) * 100) / 20
            );
            country_percantag2 = Math.round(
              Math.round((actual_score2 / indicator_score2) * 100) / 20
            );

            let score = {
              country_1: country1[0],
              country_2: country1[1],
              indicator_score1: indicator_score1,
              actual_score1: actual_score1,
              indicator_score2: indicator_score2,
              actual_score2: actual_score2,
              country_percantag1: country_percantag1,
              country_percantag2: country_percantag2,
              [key4]: val4,
              question: key4,
            };
            indicator_score.push(score);
          }
        }
      }
    }

    valop = viewDataAvalability;
    viewDataAvalability = [];
    console.log(development_type[0]);
    // myScore(10);
    if (data1 == 0) {
      development_name = development_type[0];
      //   console.log(development_name);
      ultimate_name = ulitimate1[0];
      // viewDataAvalability = taxonomy[0];
      // const jaspreetData = viewDataAvalability.push(taxonomy[0]);
      myScore(taxonomy[0]);
      scoreFinal = indicator_score;
    }
    setAvailableData(taxonomy[0]);
    console.log(availableData);

    if (data1 == 1) {
      ultimate_name = ulitimate1[1];
      development_name = development_type[1];
      // viewDataAvalability = taxonomy[1];
      development_name = development_type[0];
      myScore(taxonomy[1]);
      scoreFinal = indicator_score;
    }
    setredinessData(taxonomy[1]);
    console.log(redinessData);

    if (data1 == 3) {
      development_name = development_type[1];
      ultimate_name = ulitimate2[0];
      viewDataAvalability = taxonomy1[0];
      myScore(taxonomy1[0]);
      scoreFinal = indicator_score;
    }
    setCapacityData(taxonomy1[0]);
    console.log(capacityData);

    if (data1 == 4) {
      development_name = development_type[1];
      ultimate_name = ulitimate2[1];
      viewDataAvalability = taxonomy1[1];
      myScore(taxonomy1[1]);
      scoreFinal = indicator_score;
    }
    setdevelopData(taxonomy1[1]);
    // console.log(development_name);
    // console.log(ulitimate2[0]);
    // console.log(development_name);
    adata();
    //   informationReport()
    // })
    // console.log(taxonomy);
  }

  async function myData(data) {
    console.log("datatatattattaa", data);
    var axios = require("axios");
    if (d) {
      var data = {
        countries: d[0].cat + "," + d[1].cat,
        developmentId: 1,
        governanceId: 2,
        // taxonomyId: 10,
        ultimateId: 1,
      };
      var config = {
        method: "post",
        url: "http://103.127.29.85:4000/ndhs-master/comparative-information",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
    } else {
      var data = {
        countries: "74,228",
        developmentId: 1,
        governanceId: 2,
        // taxonomyId: 10,
        ultimateId: 1,
      };
      var config = {
        method: "post",
        url: "http://103.127.29.85:4000/ndhs-master/comparative-information",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
    }

    await axios(config)
      .then(function (response) {
        // console.log(response.data);
        setmyData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  let array = [];
  let uni = [];
  for (var i = 0; i <= data.length - 1; i++) {
    if (!uni.includes(data[i].taxonomy)) {
      uni.push(data[i].taxonomy);
    }
  }

  for (var j = 0; j < uni.length; j++) {
    var a = {};
    const my = data.filter((item) => {
      if (item.taxonomy === uni[j]) {
        return item;
      }
    });
    a["title"] = uni[j];
    a["data"] = my;
    array.push(a);
  }
  console.log("aa", array);

  function adata(data1) {
    var axios = require("axios");
    if (data1) {
      var data = {
        developmentId: 1,
        governanceId: 1,
        ultimateId: data1,
        taxonomyId: "1",
        year: "2021,2022",
      };
    } else {
      var data = {
        developmentId: 1,
        governanceId: 1,
        ultimateId: "2",
        taxonomyId: "1",
        year: "2021,2022",
      };
    }

    var config = {
      method: "post",
      url: "http://103.127.29.85:4000/ndhs-master/top-countries",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        Bar(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function Bar(data) {
    console.log("data", data);

    let chartValue = [];
    let country = [];
    let taxonomy_name;
    let source = [];
    let re_aaray = [];
    let ultimate_field;
    data.forEach(function (element, index) {
      ultimate_field = element.ultimate_field;
      taxonomy_name = element.taxonomy_name;
      if (index == 0) {
        re_aaray.push("label", element.ultimate_field);
        source.push(re_aaray);
        re_aaray = [];
      }
      re_aaray.push(element.country_name, element.score);
      source.push(re_aaray);
      re_aaray = [];
    });

    // for (let i = 0; i < data.length; i++) {
    //   chartValue.push([[data[i].country_name],[data[i].score]]);
    // //   country.push([data[i].country_name])
    //   console.log([data[i].country_name])

    //     // chartValue.map((item)=>{
    //     //     console.log("@@@@@@@@@@@",item)
    //     // })
    // }
    var dom = document.getElementById("chart-container111");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      top: 50,
      useDirtyRect: false,
    });
    var app = {};

    var option;
    console.log(chartValue);
    option = option = {
      title: {
        top: 25,
        left: 10,
        text: taxonomy_name,
        textStyle: {
          fontSize: 12,
        },
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: 25,
        textStyle: {
          fontSize: 11,
        },
      },
      tooltip: {},
      dataset: [
        {
          source: source,
          //   dimensions: ["country_name",data[0].ultimate_field],
          //   source: chartValue,
        },
        {
          transform: {
            top: 50,
            type: "sort",
            config: { dimension: "score", order: "desc" },
          },
        },
      ],

      xAxis: {
        type: "category",
        axisLabel: {
          interval: 0,
          rotate: 30,
          textStyle: {
            fontSize: 10,
          },
        },
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          itemStyle: {
            borderRadius: [6, 6, 0, 0],
            color: "#5200FF",
          },
        },
      ],
      grid: { containLabel: true },
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);
  }

  return (
    <>
      <Link to={"./map"}>
        <Button>Back</Button>
      </Link>
      <Box
        style={{
          display: "flex",
          float: "right",
          marginTop: "20px",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <div
            style={{
              boxShadow: "0 0 6px 0 lightgrey",
              width: "560px",
              marginRight: "10px",
              borderRadius: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Tabs style={{ width: "560px" }}>
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
                    Present Developnent
                  </Tab>
                  <Tab
                    style={{
                      //  background: "#f4faa0",
                      borderRadius: "5px",
                    }}
                  >
                    Prospective Development
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
                        Readiness
                      </Tab>
                      <Tab
                        class="btn"
                        style={{
                          // background: "#f2f9a0",
                          borderRadius: "5px",
                        }}
                      >
                        Availability
                      </Tab>
                    </TabList>
                    <TabPanel>
                      {availableData && (
                        <p style={{ color: "green" }}>
                          <Accordion
                            defaultIndex={[0]}
                            allowToggle
                            style={{ width: "500px" }}
                          >
                            {Object.entries(availableData).map((data) => {
                              return (
                                <>
                                  <AccordionItem>
                                    <h2>
                                      <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                          {data[0]}
                                        </Box>
                                        <AccordionIcon />
                                      </AccordionButton>
                                    </h2>
                                    <AccordionPanel
                                      pb={4}
                                      style={{ backgroundColor: "whitesmoke" }}
                                    >
                                      <Accordion defaultIndex={[0]} allowToggle>
                                        {Object.entries(data[1]).map((item) => {
                                          {
                                            /* console.log("country", item[1]); */
                                          }
                                          return (
                                            <>
                                              <AccordionItem>
                                                <h2>
                                                  <AccordionButton>
                                                    <Box
                                                      flex="1"
                                                      textAlign="left"
                                                      fontSize="15px"
                                                    >
                                                      {item[0]}
                                                    </Box>
                                                    <AccordionIcon />
                                                  </AccordionButton>
                                                </h2>
                                                <AccordionPanel
                                                  pb={4}
                                                  style={{
                                                    backgroundColor:
                                                      "ghostwhite",
                                                  }}
                                                >
                                                  {Object.entries(item[1]).map(
                                                    (item1) => {
                                                      {
                                                        /* console.log(item1[1]); */
                                                      }
                                                      return (
                                                        <>
                                                          <h1
                                                            style={{
                                                              width: "330px",
                                                              fontSize: "13px",
                                                              textAlign:
                                                                "start",
                                                            }}
                                                          >
                                                            {item1[0]}
                                                          </h1>

                                                          <div
                                                            style={{
                                                              display: "flex",
                                                              justifyContent:
                                                                "space-between",
                                                            }}
                                                          >
                                                            {item1[1].map(
                                                              (ata) => {
                                                                {
                                                                  /* console.log(ata); */
                                                                }
                                                                return (
                                                                  <>
                                                                    <span
                                                                      style={{
                                                                        // marginLeft:
                                                                        //   "50px",
                                                                        display:
                                                                          "flex",
                                                                        textAlign:
                                                                          "start",
                                                                        fontSize:
                                                                          "13px",
                                                                      }}
                                                                    >
                                                                      {
                                                                        ata.status
                                                                      }
                                                                    </span>
                                                                  </>
                                                                );
                                                              }
                                                            )}
                                                          </div>
                                                          <br />
                                                        </>
                                                      );
                                                    }
                                                  )}
                                                </AccordionPanel>
                                              </AccordionItem>
                                            </>
                                          );
                                        })}
                                      </Accordion>
                                    </AccordionPanel>
                                  </AccordionItem>
                                </>
                              );
                            })}
                          </Accordion>
                        </p>
                      )}
                    </TabPanel>
                    <TabPanel>
                      {redinessData && (
                        <p style={{ color: "green" }}>
                          <Accordion
                            defaultIndex={[0]}
                            allowToggle
                            style={{ width: "500px" }}
                          >
                            {Object.entries(redinessData).map((data) => {
                              return (
                                <>
                                  <AccordionItem>
                                    <h2>
                                      <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                          {data[0]}
                                        </Box>
                                        <AccordionIcon />
                                      </AccordionButton>
                                    </h2>
                                    <AccordionPanel
                                      pb={4}
                                      style={{ backgroundColor: "whitesmoke" }}
                                    >
                                      <Accordion defaultIndex={[0]} allowToggle>
                                        {Object.entries(data[1]).map((item) => {
                                          {
                                            /* console.log("country", item[1]); */
                                          }
                                          return (
                                            <>
                                              <AccordionItem>
                                                <h2>
                                                  <AccordionButton>
                                                    <Box
                                                      flex="1"
                                                      textAlign="left"
                                                      fontSize="15px"
                                                    >
                                                      {item[0]}
                                                    </Box>
                                                    <AccordionIcon />
                                                  </AccordionButton>
                                                </h2>
                                                <AccordionPanel
                                                  pb={4}
                                                  style={{
                                                    backgroundColor:
                                                      "ghostwhite",
                                                  }}
                                                >
                                                  {Object.entries(item[1]).map(
                                                    (item1) => {
                                                      {
                                                        /* console.log(item1[1]); */
                                                      }
                                                      return (
                                                        <>
                                                          <h1
                                                            style={{
                                                              width: "330px",
                                                              fontSize: "13px",
                                                              textAlign:
                                                                "start",
                                                            }}
                                                          >
                                                            {item1[0]}
                                                          </h1>

                                                          <div
                                                            style={{
                                                              display: "flex",
                                                              justifyContent:
                                                                "space-between",
                                                            }}
                                                          >
                                                            {item1[1].map(
                                                              (ata) => {
                                                                {
                                                                  /* console.log(ata); */
                                                                }
                                                                return (
                                                                  <>
                                                                    <span
                                                                      style={{
                                                                        // marginLeft:
                                                                        //   "50px",
                                                                        display:
                                                                          "flex",
                                                                        textAlign:
                                                                          "start",
                                                                        fontSize:
                                                                          "13px",
                                                                      }}
                                                                    >
                                                                      {
                                                                        ata.status
                                                                      }
                                                                    </span>
                                                                  </>
                                                                );
                                                              }
                                                            )}
                                                          </div>
                                                          <br />
                                                        </>
                                                      );
                                                    }
                                                  )}
                                                </AccordionPanel>
                                              </AccordionItem>
                                            </>
                                          );
                                        })}
                                      </Accordion>
                                    </AccordionPanel>
                                  </AccordionItem>
                                </>
                              );
                            })}
                          </Accordion>
                        </p>
                      )}
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
                        Capacity Building
                      </Tab>
                      <Tab
                        style={{
                          //  background: "#f2f9a0",
                          borderRadius: "5px",
                        }}
                      >
                        Development Strategy
                      </Tab>
                    </TabList>
                    <TabPanel>
                      {capacityData && (
                        <p style={{ color: "blue" }}>
                          <Accordion
                            defaultIndex={[0]}
                            allowToggle
                            style={{ width: "500px" }}
                          >
                            {Object.entries(capacityData).map((data) => {
                              return (
                                <>
                                  <AccordionItem>
                                    <h2>
                                      <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                          {data[0]}
                                        </Box>
                                        <AccordionIcon />
                                      </AccordionButton>
                                    </h2>
                                    <AccordionPanel
                                      pb={4}
                                      style={{ backgroundColor: "whitesmoke" }}
                                    >
                                      <Accordion defaultIndex={[0]} allowToggle>
                                        {Object.entries(data[1]).map((item) => {
                                          {
                                            /* console.log("country", item[1]); */
                                          }
                                          return (
                                            <>
                                              <AccordionItem>
                                                <h2>
                                                  <AccordionButton>
                                                    <Box
                                                      flex="1"
                                                      textAlign="left"
                                                      fontSize="15px"
                                                    >
                                                      {item[0]}
                                                    </Box>
                                                    <AccordionIcon />
                                                  </AccordionButton>
                                                </h2>
                                                <AccordionPanel
                                                  pb={4}
                                                  style={{
                                                    backgroundColor:
                                                      "ghostwhite",
                                                  }}
                                                >
                                                  {Object.entries(item[1]).map(
                                                    (item1) => {
                                                      {
                                                        /* console.log(item1[1]); */
                                                      }
                                                      return (
                                                        <>
                                                          <h1
                                                            style={{
                                                              width: "330px",
                                                              fontSize: "13px",
                                                              textAlign:
                                                                "start",
                                                            }}
                                                          >
                                                            {item1[0]}
                                                          </h1>

                                                          <div
                                                            style={{
                                                              display: "flex",
                                                              justifyContent:
                                                                "space-between",
                                                            }}
                                                          >
                                                            {item1[1].map(
                                                              (ata) => {
                                                                {
                                                                  /* console.log(ata); */
                                                                }
                                                                return (
                                                                  <>
                                                                    <span
                                                                      style={{
                                                                        // marginLeft:
                                                                        //   "50px",
                                                                        display:
                                                                          "flex",
                                                                        textAlign:
                                                                          "start",
                                                                        fontSize:
                                                                          "13px",
                                                                      }}
                                                                    >
                                                                      {
                                                                        ata.status
                                                                      }
                                                                    </span>
                                                                  </>
                                                                );
                                                              }
                                                            )}
                                                          </div>
                                                          <br />
                                                        </>
                                                      );
                                                    }
                                                  )}
                                                </AccordionPanel>
                                              </AccordionItem>
                                            </>
                                          );
                                        })}
                                      </Accordion>
                                    </AccordionPanel>
                                  </AccordionItem>
                                </>
                              );
                            })}
                          </Accordion>
                        </p>
                      )}
                    </TabPanel>
                    <TabPanel>
                      {developData && (
                        <p style={{ color: "blue" }}>
                          <Accordion
                            defaultIndex={[0]}
                            allowToggle
                            style={{ width: "500px" }}
                          >
                            {Object.entries(developData).map((data) => {
                              return (
                                <>
                                  <AccordionItem>
                                    <h2>
                                      <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                          {data[0]}
                                        </Box>
                                        <AccordionIcon />
                                      </AccordionButton>
                                    </h2>
                                    <AccordionPanel
                                      pb={4}
                                      style={{ backgroundColor: "whitesmoke" }}
                                    >
                                      <Accordion defaultIndex={[0]} allowToggle>
                                        {Object.entries(data[1]).map((item) => {
                                          {
                                            /* console.log("country", item[1]); */
                                          }
                                          return (
                                            <>
                                              <AccordionItem>
                                                <h2>
                                                  <AccordionButton>
                                                    <Box
                                                      flex="1"
                                                      textAlign="left"
                                                      fontSize="15px"
                                                    >
                                                      {item[0]}
                                                    </Box>
                                                    <AccordionIcon />
                                                  </AccordionButton>
                                                </h2>
                                                <AccordionPanel
                                                  pb={4}
                                                  style={{
                                                    backgroundColor:
                                                      "ghostwhite",
                                                  }}
                                                >
                                                  {Object.entries(item[1]).map(
                                                    (item1) => {
                                                      {
                                                        /* console.log(item1[1]); */
                                                      }
                                                      return (
                                                        <>
                                                          <h1
                                                            style={{
                                                              width: "330px",
                                                              fontSize: "13px",
                                                              textAlign:
                                                                "start",
                                                            }}
                                                          >
                                                            {item1[0]}
                                                          </h1>

                                                          <div
                                                            style={{
                                                              display: "flex",
                                                              justifyContent:
                                                                "space-between",
                                                            }}
                                                          >
                                                            {item1[1].map(
                                                              (ata) => {
                                                                {
                                                                  /* console.log(ata); */
                                                                }
                                                                return (
                                                                  <>
                                                                    <span
                                                                      style={{
                                                                        // marginLeft:
                                                                        //   "50px",
                                                                        display:
                                                                          "flex",
                                                                        textAlign:
                                                                          "start",
                                                                        fontSize:
                                                                          "13px",
                                                                      }}
                                                                    >
                                                                      {
                                                                        ata.status
                                                                      }
                                                                    </span>
                                                                  </>
                                                                );
                                                              }
                                                            )}
                                                          </div>
                                                          <br />
                                                        </>
                                                      );
                                                    }
                                                  )}
                                                </AccordionPanel>
                                              </AccordionItem>
                                            </>
                                          );
                                        })}
                                      </Accordion>
                                    </AccordionPanel>
                                  </AccordionItem>
                                </>
                              );
                            })}
                          </Accordion>
                        </p>
                      )}
                    </TabPanel>
                  </Tabs>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </Box>
        <Box>
          <VStack>
            <div style={{}}>
              <Box
                style={{
                  width: "400px",
                  padding: "10px",
                  marginRight: "10px",
                  // marginTop: "10px",
                  borderRadius: "10px",
                  border: "1px solid white",
                  boxShadow: "0 0 6px 0 lightgrey",
                }}
              >
                <HStack>
                  <Flex
                    style={{
                      width: "-webkit-fill-available",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Flex>
                      <Text style={{ color: "green" }}>Information Report</Text>
                    </Flex>
                    <Spacer />
                    <Flex>
                      <Text>Readiness</Text>
                    </Flex>
                  </Flex>
                </HStack>
                <Flex
                  style={{
                    width: "-webkit-fill-available",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  {/* <Text>{name0 ? name0 : name1}</Text>
                  <Text style={{ marginLeft: "10px" }}>
                    {name00 ? name00 : name2}
                  </Text> */}
                </Flex>
                {array?.map((e, key) => {
                  return (
                    <>
                      <Text>{e.title}</Text>
                      {e?.data.map((b) => {
                        return (
                          <>
                            <h5>{b.country}</h5>
                            <Progress
                              style={{ marginTop: "5px" }}
                              value={b.score}
                            />
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </Box>
            </div>
            <div
              style={{
                width: "400px",
                height: "400px",
                boxShadow: "0 0 6px 0 lightgrey",
                // border:"1px solid white",
                borderRadius: "10px",
                marginTop: "10px",
                marginRight: "10px",
              }}
            >
              <h1
                style={{
                  textAlign: "left",
                  marginLeft: "5px",
                  marginTop: "5px",
                }}
              >
                Top Countries
              </h1>
              <div
                id="chart-container111"
                style={{ width: "100%", height: "100%", marginTop: "20px" }}
              ></div>
            </div>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default ResultDetail;
