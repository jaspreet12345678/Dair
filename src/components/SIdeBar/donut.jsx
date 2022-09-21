import React, { useEffect, useState } from "react";
// import ".../style.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5core from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import axios from "axios";
import * as am5percent from "@amcharts/amcharts5/percent";
import Sidebar from "./Sidebar";
import Bar from "./Sidebar";

const Map = () => {
  const [data, setData] = useState([]);

  async function mappinng(item1, item2) {
    window.scroll(0, 0);
    const res = await axios.get(
      "http://103.127.29.85:4000/ndhs-master/governance-stats/1/103/2021"
    );
    const data1 = res.data;

    console.log("1234566", data1);

    setData(data1);

    console.log("data", data1);
    console.log("item11111", item1);
    console.log("item222222", item2);

    // console.log(data);

    // Create root and chart
    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        radius: am5.percent(95),
        innerRadius: am5.percent(75),
      })
    );

    //const jjj = "Present Development"
    // const jjj = JSON.parse("Present Development")
    // console.log(typeof jjj)
console.log("545646847586456",data1)

    console.log(
      "daaaaaaataaaaaaa",
      data1["Present Development"]["AI Workforce/Infrastructure"]
    );

    const realData =
      data1["Present Development"]["AI Workforce/Infrastructure"];

    realData.map((item) => {
        console.log(item.score)
    })

    //Define data
    let data = [
      {
        country: {},
        sales: 100000,
      },
      {
        country: "Spain",
        sales: 160000,
      },
      {
        country: "United Kingdom",
        sales: 80000,
      },
    ];

    // const mydata = data1.map((ites, key) => {
    //   return ites;
    // });
    // console.log("kjnfdkfhdjfk", mydata);

    let text = "Jaspreet";
    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
        alignLabels: false,
      })
    );

    series.data.setAll(data, {
      fill: am5.color(0x550000),
    });

    series.labels.template.setAll({
      text: `${text}`,
      textType: "middle",
      inside: true,
      fontSize: 12,
      radius: 10,
    });

    series.horizontalCenter = "middle";
    series.verticalCenter = "middle";
    // series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);
    series.ticksContainer.template.set("visible", false);

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        layout: root.horizontalLayout,
      })
    );

    legend.data.setAll(series.dataItems);
  }

  //   console.log(mydata);

  useEffect(() => {
    mappinng();
  }, []);

  return (
    <>
      <div
        id="chartdiv"
        style={{ width: "100%", height: "500px", marginTop: "20px" }}
      ></div>
    </>
  );
};

export default Map;
