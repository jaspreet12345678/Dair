import React from "react";
// import * as echarts from "echarts";

// const Graph2 = () => {
//   var ROOT_PATH = "https://echarts.apache.org/examples";

//   var chartDom = document.getElementById("main");
//   var myChart = echarts.init(chartDom);
//   var option;

//   myChart.showLoading();
//   $.getJSON(
//     ROOT_PATH + "/data/asset/data/npmdepgraph.min10.json",
//     function (json) {
//       myChart.hideLoading();
//       myChart.setOption(
//         (option = {
//           title: {
//             text: "NPM Dependencies",
//           },
//           animationDurationUpdate: 1500,
//           animationEasingUpdate: "quinticInOut",
//           series: [
//             {
//               type: "graph",
//               layout: "none",
//               // progressiveThreshold: 700,
//               data: json.nodes.map(function (node) {
//                 return {
//                   x: node.x,
//                   y: node.y,
//                   id: node.id,
//                   name: node.label,
//                   symbolSize: node.size,
//                   itemStyle: {
//                     color: node.color,
//                   },
//                 };
//               }),
//               edges: json.edges.map(function (edge) {
//                 return {
//                   source: edge.sourceID,
//                   target: edge.targetID,
//                 };
//               }),
//               emphasis: {
//                 focus: "adjacency",
//                 label: {
//                   position: "right",
//                   show: true,
//                 },
//               },
//               roam: true,
//               lineStyle: {
//                 width: 0.5,
//                 curveness: 0.3,
//                 opacity: 0.7,
//               },
//             },
//           ],
//         }),
//         true
//       );
//     }
//   );

//   option && myChart.setOption(option);
//   return;
// };

// export default Graph2;
