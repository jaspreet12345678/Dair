import React from "react";
import { useEffect } from "react";
// import EChartsOption  from "echarts";
// import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from "echarts";
// import {RadarChart} from 'echarts/charts';
// import {CanvasRenderer} from 'echarts/renderers';

function Radar(e) {
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
      countries: "36,103",
      developmentId: "1,2",
      governanceId: 2,
      ultimateId: "1,2,3,4",
      taxonomyId: 10,
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

  function Chart(data) {
    console.log("first", data);
    let country1 = data[0];
    let country2 = data[1];

    console.log("country1111", country1);
    console.log("country2222", country2);

    var dom = document.getElementById("chart-container");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    var app = {};

    var option;

    option = {
      color: ["#338A14", "rgba(92,221,189,1)", "#56A3F1", "#FF917C"],
      title: {
        text: "",
      },
      legend: {},
      radar: [
        {
          indicator: [
            { text: "Availability", max: 100 },
            { text: "Capacity Building", max: 100 },
            { text: "Development Strategy", max: 100 },
            { text: "Readiness", max: 100 },
          ],
          center: ["45%", "55%"],
          radius: 110,
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          axisName: {
            color: "#707070",
            fontSize: "10",
          },
          splitArea: {
            areaStyle: {
              color: ["#DADADA", "#DADADA", "#CED5D3", "#B9BDBC"],
              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowBlur: 10,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(154,165,162,1)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(154,165,162,1)",
            },
          },
        },
      ],
      series: [
        {
          type: "radar",
          emphasis: {
            lineStyle: {
              width: 4,
            },
          },
          data: [
            {
              value: [
                // country1.actual_score,
                // // country1.c_score,
                // // country1.d_score,
                // // country1.r_score,
                85, 0, 65, 95,
              ],
              name: country1.country_name,
              areaStyle: {
                color: "rgba(51, 138, 20, 0.6)",
              },
            },
            {
              value: [55, 100, 100, 70],
              name: country2.country_name,
              areaStyle: {
                color: "rgba(92,221,189,0.6)",
              },
            },
          ],
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

  return (
    <div style={{width:"500px"}}>
      <div
        id="chart-container"
        style={{marginLeft:"40px", width: "100%", height: "300px" }}
      ></div>
    </div>
  );
}

export default Radar;
