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
import { Box, HStack, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import Header from "./Header1";
import { Link } from "react-router-dom";

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
          country: "Capacity Building",
          litres: prospective[data1][0].score,
        },
        {
          country: "Development Strategy",
          litres: prospective[data1][1].score,
        },
        {
          litres: `${noData}`,
        },
      ];

      //console.log("timpeasss", present[data1[0]].taxonomy_name);
      //title = present[data1[0]].taxonomy_id;
      chart.innerRadius = 70;
      chart.depth = 5;
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

      series.colors.list = ["#282B30", "#033592", "#E2E2E4"].map(function (
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

      series.alignLabels = false;
      series.labels.template.radius = 30;
      series.labels.template.text = "{category}";
      series.labels.template.fontSize = 12;
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
      <Box style={{ "margin-top": "30px" }}>
        {/* <Center > */}
        <Box
          style={{
            "box-shadow": "0 0 9px 0 grey",
            width: "1000px",
            "border-radius": "20px",
          }}
        >
          <HStack justifyContent={"space-between"}>
            <Heading mt={5} ml={5}>
              Prospective Development
            </Heading>
            <Link to="/prospective">
              <Button
                style={{
                  "margin-top": "20px",
                  "margin-right": "10px",
                  color: "lightblue",
                  "background-color": "white",
                  border: "1px solid lightblue",
                }}
              >
                View Data
              </Button>
            </Link>
          </HStack>
          <SimpleGrid mt={8} columns={[2, null, 3]}>
            {looprun.map((data, key) => {
              return (
                <Box
                  mt={20}
                  style={{
                    border: "1px solid black",
                    width: "320px",
                    // maxW: "250px",
                    margin: "8px",
                    maxH: "100vh",
                    "box-shadow": "0 0 10px black",
                    "border-radius": "25px",
                  }}
                  height="300px"
                >
                  <Box
                    style={{
                      "box-shadow": "0 0 5px 0 grey",
                      "border-radius": "30px",
                      width: "-webkit-fill-available",
                      "background-color": "lightgrey",
                      "margin-right": "30px",
                      "margin-left": "30px",
                      "margin-top": "10px",
                    }}
                    textAlign={"center"}
                  >
                    {country_name}
                  </Box>
                  <div
                    id={`chartdivPros` + key}
                    style={{
                      width: "100%",
                      height: "200px",
                      marginTop: "20px",
                    }}
                  >
                    {/* {data} */}
                  </div>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
        {/* </Center> */}
      </Box>
    </>
  );
};

export default Map23D;
