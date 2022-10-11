import React, { useEffect } from "react";
import * as echarts from "echarts";

const Bar = () => {
  useEffect(() => {
    data();
  }, []);

  function data() {
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
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "400px",
          boxShadow: "0 0 9px 0 black",
          borderRadius: "10px",
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
      <h1 style={{textAlign:"left",marginLeft:"5px"}}>Top Countries</h1>
        <div
          id="chart-container111"
          style={{ width: "100%", height: "100%", marginTop: "20px" }}
        ></div>
      </div>
    </>
  );
};

export default Bar;
