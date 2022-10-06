import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import axios from "axios";

function BubbleChart(data) {
  let range25 = [];
  let range60 = [];
  let range80 = [];
  let range100 = [];
  let result = data;

  result.forEach((element) => {
    console.log("element", element.percentage);
    let b_chart = {
      name: element.country,
      value: 2,
    };
    if (element.percentage <= 25) {
      range25.push(b_chart);
    } else if (element.percentage <= 60) {
      range60.push(b_chart);
    } else if (element.percentage <= 80) {
      range80.push(b_chart);
    } else if (element.percentage <= 100) {
      range100.push(b_chart);
    }
  });
  console.log("datataaaa", data);
  console.log("range25", range25);
  console.log("range60", range60);
  console.log("range80", range80);
  console.log("range100", range100);
  am4core.useTheme(am4themes_animated);

  var chart = am4core.create(
    "chartdiv1",
    am4plugins_forceDirected.ForceDirectedTree
  );
  var networkSeries = chart.series.push(
    new am4plugins_forceDirected.ForceDirectedSeries()
  );

  networkSeries.data = [];
  networkSeries.data = [
    {
      id: "1",
      name: "25%",
      value: 2,
      fixed: true,
      color: "#FA8E15",
      x: am4core.percent(40),
      y: am4core.percent(60),
      children: range25,
    },
    {
      id: "2",
      name: "100%",
      color: "#00306C",
      fixed: true,
      value: 2,
      x: am4core.percent(50),
      y: am4core.percent(60),
      children: range100,
    },
    {
      id: "3",
      name: "80%",
      color: "#4A92EC",
      fixed: true,
      value: 2,
      x: am4core.percent(50),
      y: am4core.percent(80),
      children: range80,
    },
    {
      id: "4",
      name: "60%",
      color: "#4AEC9B",
      fixed: true,
      value: 2,
      x: am4core.percent(60),
      y: am4core.percent(60),
      children: range60,
    },
    {
      name: "",
      fixed: true,
      value: 1,
      x: am4core.percent(150),
      y: am4core.percent(40),
      children: [
        {
          name: "",
          value: 4,
        },
      ],
    },
  ];

  networkSeries.dataFields.linkWith = "linkWith";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.id = "id";
  networkSeries.dataFields.value = "value";
  networkSeries.dataFields.children = "children";
  networkSeries.dataFields.fixed = "fixed";
  networkSeries.dataFields.color = "color";
  // networkSeries.nodes.template.width = 100;

  networkSeries.nodes.template.propertyFields.x = "x";
  networkSeries.nodes.template.propertyFields.y = "y";

  networkSeries.nodes.template.tooltipText = "{name}";
  networkSeries.nodes.template.fillOpacity = 1;

  networkSeries.nodes.template.label.text = "{name}";
  networkSeries.fontSize = 8;
  // networkSeries.maxLevels = 3;
  networkSeries.nodes.template.label.hideOversized = true;
  networkSeries.nodes.template.label.truncate = true;
  networkSeries.links.template.distance = 0;
  networkSeries.links.template.disabled = true;
  networkSeries.nodes.template.interactionsEnabled = false;

  networkSeries.nodes.template.strokeWidth = 0;
  networkSeries.links.template.strokeOpacity = 0;
  networkSeries.nodes.template.label.fill = am4core.color("#fff");

  networkSeries.nodes.template.outerCircle.strokeOpacity = 0;
  networkSeries.nodes.template.outerCircle.fillOpacity = 0;

  var title2 = chart.titles.create();

  title2.align = "left";
  title2.rotation = 0;
  title2.marginBottom = -180;

  var title = chart.titles.create();
  title.text = "element.taxonomy";
  title.marginTop = 10;
  title.marginLeft = 60;
  title.fontSize = 15;
  title.align = "left";
}

function Bubble() {
  let title = [];
  var axios = require("axios");
  var data = {
    countries: "36",
    developmentId: 1,
    governanceId: 1,
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

  axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      title = response.data;
      //console.log("title", title);
      BubbleChart(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <div
        style={{
          background: "#000",
          "margin-top": "20px",
          "margin-left": "50px",
          width: "50px",
          color: "#fff",
          height: "200px",
          padding: "10px",
          "text-align": "center",
          "border-radius": "15px 0px 0 15px",
        }}
      >
        <div
          id="chartdiv1"
          style=
          {{width: "400px", height: "250px",margin: "0 auto"}}
        ></div>
      </div>
    </>
  );
}

export default Bubble;
