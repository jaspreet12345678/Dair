import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 
import large_tree_data from "../Comparative result/NetworkData";

const NetworkChart=() =>{
    am4core.useTheme(am4themes_animated);

        let chart = am4core.create("treechart", am4plugins_forceDirected.ForceDirectedTree);
        if (chart.logo) {
            chart.logo.disabled = true;
        }
        let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

        series.data = large_tree_data.default;

        // chart.legend = new am4charts.Legend();

        series.dataFields.linkWith = "linkWith";
        series.dataFields.name = "name";
        series.dataFields.id = "name";
        series.dataFields.value = "value";
        series.dataFields.children = "children";
        series.dataFields.fixed = "fixed";
        series.dataFields.color = 'color';

        series.nodes.template.propertyFields.x = "x";
        series.nodes.template.propertyFields.y = "y";

        series.nodes.template.tooltipText = "{name}";
        series.nodes.template.fillOpacity = 1;
        series.nodes.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

        series.nodes.template.label.text = "{text}"
        series.fontSize = 7;
        series.maxLevels = 4;
        series.nodes.template.label.hideOversized = true;
        series.nodes.template.label.truncate = true;

        series.nodes.template.strokeWidth = 6;
        series.links.template.strokeOpacity = 1;
        series.nodes.template.outerCircle.strokeOpacity = 1;
        series.nodes.template.outerCircle.fillOpacity = 1;
        series.nodes.template.togglable = false;
        series.minRadius = 1;

        series.nodes.template.tooltipText = "[#ffffff]{name}";

        series.nodes.template.events.on('ready', function (event) {
            if(event.target.dataItem.dataContext) {
                var fontSize = event.target.dataItem.dataContext.sizeFont;
            }
            event.target.fontSize = fontSize;
        });
        
        
        // series.maxRadius = 35;
        series.nodes.template.events.on("hit", (e) => {
            let test = JSON.stringify(e.target.dataItem.dataContext);
            let d_info = JSON.parse(test);
            console.log("@@@@@@@@@@@",d_info)
        })
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

  return  <div id='treechart' style={{width: "100%", height: "100%"}}></div>
}

export default NetworkChart;
