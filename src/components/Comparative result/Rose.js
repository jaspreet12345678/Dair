import React from "react";
import { useEffect } from "react";
// import EChartsOption  from "echarts";
// import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from "echarts";
// import {RadarChart} from 'echarts/charts';
// import {CanvasRenderer} from 'echarts/renderers';

function Rose(e) {
  useEffect(() => {
    Bubble();
    // Chart();
  }, []);

  function Bubble() {
    let title = [];
    // countries: this.countries,
    // developmentId: this.developmentId,
    // governanceId: this.governance,
    // ultimateId: this.ultimateId,
    // taxonomyId: this.taxonomy_id
    var axios = require("axios");
    var data = {
      countries: "106",
      developmentId: 1,
      governanceId: 2,
      ultimateId: 1,
      taxonomyId: 9,
    };

    var config = {
      method: "post",
      url: "http://103.127.29.85:4000/ndhs-master/stats-graph",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        title = response.data;
        console.log("title", title);
        Chart(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function Chart(data1) {
    console.log("first", data1);
    let country1 = data1[0];
    let country2 = data1[1];

    console.log("country1111", country1);
    console.log("country2222", country2);

    var dom = document.getElementById("chart-container");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    var app = {};

    var dom = document.getElementById("chart-container");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    var app = {};
    let data = [
      {
        name: "81%-100%",
        lname: "81%-100%",
        tooltipName: "",
        value: 100,
        labelLine: { show: false },
        label: { show: false },
        emphasis: { label: { show: false } },
        tooltip: { show: false },
        itemStyle: {
          borderRadius: 5,
          color: "#220055",
        },
      },
      {
        name: "61%-80%",
        lname: "61%-80%",
        tooltipName: "",
        value: 80,
        labelLine: { show: false },
        label: { show: false },
        emphasis: { label: { show: false } },
        tooltip: { show: false },
        itemStyle: {
          borderRadius: 5,
          color: "#3678B5",
        },
      },
      {
        name: "31%-60%",
        lname: "31%-60%",
        tooltipName: "",
        value: 60,
        labelLine: { show: false },
        label: { show: false },
        emphasis: { label: { show: false } },
        tooltip: { show: false },
        itemStyle: {
          borderRadius: 5,
          color: "#5FE7B1",
        },
      },
      {
        name: "0%-30%",
        lname: "0%-30%",
        value: 30,
        labelLine: { show: false },
        label: { show: false },
        emphasis: {
          label: { show: false },
        },
        tooltip: { show: false },
        itemStyle: {
          borderRadius: 5,
          color: "#fa8e15",
        },
      },
    ];

    var option;

    option = {
      legend: {
        bottom: -5,
        left: "center",
        icon: "circle",
        show: data ? true : false,
        formatter: data
          ? (name) => {
              let itemValue = data.filter((item) => item.name === name);
              return `${itemValue[0].lname}`;
            }
          : "{lname}",
      },
      // tooltip: {
      //     trigger: 'item',
      //     formatter: data ? (name: any) => {
      //         let itemValue = data.filter((item: any) => item.name === name)
      //         if (name.data.tooltipName) {
      //             return `${name.data.tooltipName}`;
      //         }
      //         return false;
      //     } : "{name}",
      // },
      series: [
        {
          name: "",
          type: "pie",
          radius: [20, 110],
          center: ["50%", "50%"],
          roseType: "area",
          avoidLabelOverlap: true,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outer",
                alignTo: "labelLine",
                overflow: "break",
                margin: 0,
                padding: 2,
              },
              labelLine: {
                show: true,
              },
            },
          },
          data: data.reverse(),
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);

    // let options = {
    //   color: ["#338A14", "rgba(92,221,189,1)", "#56A3F1", "#FF917C"],
    //   title: {
    //     text: "taxonomy_name",
    //   },
    //   legend: {},
    //   radar: [
    //     {
    //       indicator: [
    //         { text: "Availability", max: 100 },
    //         { text: "Capacity Building", max: 100 },
    //         { text: "Development Strategy", max: 100 },
    //         { text: "Readiness", max: 100 },
    //       ],
    //       center: ["55%", "55%"],
    //       radius: 110,
    //       startAngle: 90,
    //       splitNumber: 4,
    //       shape: "circle",
    //       axisName: {
    //         color: "#707070",
    //         fontSize: "10",
    //       },
    //       splitArea: {
    //         areaStyle: {
    //           color: ["#DADADA", "#DADADA", "#CED5D3", "#B9BDBC"],
    //           shadowColor: "rgba(0, 0, 0, 0.2)",
    //           shadowBlur: 10,
    //         },
    //       },
    //       axisLine: {
    //         lineStyle: {
    //           color: "rgba(154,165,162,1)",
    //         },
    //       },
    //       splitLine: {
    //         lineStyle: {
    //           color: "rgba(154,165,162,1)",
    //         },
    //       },
    //     },
    //   ],
    //   series: [
    //     {
    //       type: "radar",
    //       emphasis: {
    //         lineStyle: {
    //           width: 4,
    //         },
    //       },
    //       data: [
    //         {
    //           value: [
    //             // country1.a_score,
    //             // country1.c_score,
    //             // country1.d_score,
    //             // country1.r_score,
    //             86, 68, 95, 75,
    //           ],
    //           name: country1.country_name,
    //           areaStyle: {
    //             color: "rgba(51, 138, 20, 0.6)",
    //           },
    //         },
    //         {
    //           value: [100, 96, 85, 95],
    //           name: country2.country_name,
    //           areaStyle: {
    //             color: "rgba(92,221,189,0.6)",
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // };
  }
  // window.addEventListener("resize", myChart.resize);

  return (
    // <div
    //   options={"options"}
    //   style={{ width: "100%", height: "300px", backgroundColor: "blue" }}
    // ></div>
    <div id="chart-container" style={{ width: "100%", height: "600px" }}></div>
  );
}

export default Rose;
