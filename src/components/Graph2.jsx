import React, { useEffect, useState } from "react";
// import ".../style.css";
// import * as am4 from "@amcharts/amcharts4";
import * as am5core from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import axios from "axios";
import * as am5percent from "@amcharts/amcharts5/percent";
import Sidebar from "./Sidebar";
import Bar from "./Sidebar";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Header from "./Header1";

const Map23D = (props) => {
  let [data, setData] = useState([]);
  let title = [];
  let axios = require("axios");
  let country_flag = localStorage.getItem("country_flag");
  let country_name = localStorage.getItem("country_name");
  let country_id = localStorage.getItem("country_id");
  let country_iso_code = localStorage.getItem("country_iso_code");
  let year = localStorage.getItem("year");
  console.log("country_id", country_id);
  console.log("country_id", year);

  let config = {
    method: "get",
    url: `http://103.127.29.85:4000/ndhs-master/governance-stats/1/${country_id}/${year}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      title = response.data;
      console.log(response.data);
      mappinng(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  const looprun = [0, 1, 2, 3, 4];
  const present = [];
  const prospective = [];

  async function mappinng(pieData) {
    // console.log(pieData);
    // am4core.disposeAllCharts();

    for (const [key, val] of Object.entries(pieData)) {
      for (const [key1, val1] of Object.entries(val)) {
        if (key == "Prospective Development") {
          prospective.push(val1);
        } else {
          present.push(val1);
        }
      }
    }

    console.log("jdfhsdfhdsfh", prospective);

    console.log("prospective", title["Prospective Development"]);
    looprun.map((data1, key) => {
      // present.map((item, key) => {
      let chart = am4core.create("chartdivPros" + data1, am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      let noData =
        (300 -
          (Number(prospective[data1][0].score) +
            Number(prospective[data1][1].score))) /
        3;

      chart.data = [
        {
          country: "Readiness",
          litres: prospective[data1][0].score,
        },
        {
          country: "Availabilty",
          litres: prospective[data1][1].score,
        },
        {
          litres: `${noData}`,
        },
      ];

      //console.log("timpeasss", present[data1[0]].taxonomy_name);
      //title = present[data1[0]].taxonomy_id;
      chart.innerRadius = 70;
      chart.depth = 10;
      chart.radius = 50;

      let total = Math.round(
        (Number(prospective[data1][0].score) +
          Number(prospective[data1][1].score)) /
          2
      );
      //(Number(present[data1][0].score) + Number(present[data1][1].score)) / 2

      let series = chart.series.push(new am4charts.PieSeries3D());
      series.dataFields.value = "litres";
      series.dataFields.category = "country";
      // series.tooltip.disabled = true;
      series.slices.template.tooltipText = "{category}";

      series.colors.list = ["#d3d000", "#ff0000", "#E2E2E4"].map(function (
        color
      ) {
        return new am4core.color(color);
      });

      title = prospective[data1][0].taxonomy_name;

      let label = series.createChild(am4core.Label);
      label.text = `${total}%`;
      label.horizontalCenter = "middle";
      label.verticalCenter = "middle";
      label.fontSize = 20;
      label.fontWeight = "normal";

      series.labels.template.text = "{category}";
      series.ticks.template.events.on("ready", hideSmall);
      series.ticks.template.events.on("visibilitychanged", hideSmall);
      series.labels.template.events.on("ready", hideSmall);
      series.labels.template.events.on("visibilitychanged", hideSmall);
      series.labels.template.maxWidth = 100;
      series.labels.template.wrap = true;

      function hideSmall(ev) {
        if (
          ev.target.dataItem.hasProperties == false ||
          ev.target.dataItem.dataContext.percentage == 0
        ) {
          ev.target.hide();
        } else {
          ev.target.show();
        }
      }
    });
    //console.log(prospective);
  }

  useEffect(() => {
    // mappinng();
  }, []);
  console.log(data);

  return (
    <>
      <Center>
        <Box mt={10}>
          <SimpleGrid columns={[2, null, 3]} spacing="40px">
            {looprun.map((data, key) => {
              return (
                <Box
                  style={{
                    border: "1px solid black",
                    maxW: "100%",
                    margin: "8px",
                    maxH: "100vh",
                  }}
                  height="250px"
                >
                  {" "}
                  <Text textAlign={"center"}>{title}</Text>
                  <div id={`chartdivPros` + key} style={{ margin: "20px" }}>
                    {/* {data} */}
                  </div>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Center>
    </>
  );
};

export default Map23D;
