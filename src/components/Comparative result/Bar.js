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
      ultimateId: "1",
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
      useDirtyRect: false,
    });
    var app = {};

    var option;
    console.log(chartValue);
    option = option = {
      title: {
        text: taxonomy_name,
        textStyle: {
          fontSize: 12,
        },
      },
      legend: {
        orient: "vertical",
        right: 0,
        top: 0,
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
        id="chart-container111"
        style={{ width: "100%", height: "600px" }}
      ></div>
    </>
  );
};

export default Bar;
