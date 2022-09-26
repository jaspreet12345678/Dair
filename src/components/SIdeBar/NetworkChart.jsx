// import React from "react";
// import * as echarts from "echarts";
// import networkData from "./network.json";
// function Network() {
//   var chartDom = document.getElementById("main");

  

//   var myChart = echarts.init(chartDom);
//   var option;

//   //graph = networkData;

//   networkData.nodes.forEach(function (node) {
//       node.label = {
//         show: node.symbolSize > 30
//       };
//     });
//   option = {
//     title: {
//       text: "Les Miserables",
//       subtext: "Default layout",
//       top: "bottom",
//       left: "right",
//     },
//     tooltip: {},
//     legend: [
//       {
//         // selectedMode: 'single',
//         data: networkData.categories.map(function (a) {
//           return a.name;
//         }),
//       },
//     ],
//     animationDuration: 1500,
//     animationEasingUpdate: "quinticInOut",
//     series: [
//       {
//         name: "Les Miserables",
//         type: "graph",
//         layout: "none",
//         data: networkData.nodes,
//         links: networkData.links,
//         categories: networkData.categories,
//         roam: true,
//         label: {
//           position: "right",
//           formatter: "{b}",
//         },
//         lineStyle: {
//           color: "source",
//           curveness: 0.3,
//         },
//         emphasis: {
//           focus: "adjacency",
//           lineStyle: {
//             width: 10,
//           },
//         },
//       },
//     ],
//   };
//   myChart.setOption(option);

//   option && myChart.setOption(option);

//   return <div id="main" style={{ width: "500px", height: "500px" }}></div>;
// }

// export default Network;
