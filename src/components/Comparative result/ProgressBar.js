import {
  Box,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Progress } from "@chakra-ui/react";
import * as echarts from "echarts";

const ProgressBar = () => {
  let country1 = localStorage.getItem("country1");
  let country2 = localStorage.getItem("country2");
  const [finaldata, setfinaldata] = useState();
  const [data, setmyData] = useState([]);

  useEffect(() => {
    myData();
    adata();
  }, []);

  async function myData() {
    
    console.log(country1);
    var axios = require("axios");
    var data = {
      countries: "106,108",
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

  function adata() {
    var axios = require("axios");
    var data = {
      developmentId: 1,
      governanceId: 1,
      ultimateId: "2",
      taxonomyId: "1",
      year: "2021,2022",
    };

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

  // setfinaldata(array);

  return (
    <>
    <Box>
      <Box style={{float:"right"}}>
        <VStack>
          <div style={{}}>
            <Box
              style={{
                width: "400px",
                padding: "10px",
                marginRight: "10px",
                marginTop: "10px",
                borderRadius:"10px",
                border: "1px solid white",
                boxShadow:"0 0 6px 0 lightgrey"
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
                    <Text>Information Report</Text>
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
                <Text>Iran</Text>
                <Text style={{ marginLeft: "10px" }}>Italy</Text>
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
            <h1 style={{ textAlign: "left", marginLeft: "5px", marginTop:"5px" }}>
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

export default ProgressBar;
