import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import "./map.css";
import { data } from "jquery";
import Main from "../Main";
import { useEffect } from "react";
import { Box, VStack, Flex, Text, Divider, Button } from "@chakra-ui/react";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Link } from "react-router-dom";

function ComparativeMap(props) {
  let state = {
    options: [
      { name: "Option 1", id: 1 },
      { name: "Option 2️", id: 2 },
    ],
  };
  const [totalCountry, settotalCountry] = useState();
  const [myCountries, setmyCountries] = useState();
  function onSelect(selectedList, selectedItem) {}

  function onRemove(selectedList, removedItem) {}

  var show = true;
  const [countryData, setcountryData] = useState();
  useEffect(() => {
    data();
    mydata1();
  }, []);

  let finalData = [];

  function mydata(dataId) {
    console.log(dataId[0].country_id);
    var axios = require("axios");
    // if (dataId == "undefined") {
    //   var data = {
    //     countries: "36,103",
    //     developmentId: "1,2",
    //   };
    // } else if(dataId != "undefined") {
    //   var data = {
    //     countries: dataId[0],
    //     developmentId: "1,2",
    //   };
    // }

    if (!dataId) {
      console.log(dataId);
      var data = {
        countries: "74,228",
        developmentId: "1,2",
      };
    } else {
      var data = {
        countries: dataId[0].country_id + "," + dataId[1].country_id,
        developmentId: "1,2",
      };
    }

    console.log(data);

    var config = {
      method: "post",
      url: "http://103.127.29.85:4000/ndhs-master/comparative",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //     console.log(response.data);
        comparative(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function comparative(result) {
    let AvailabilityData = [];
    let ReadinessData = [];
    let CapacityData = [];
    let DevelopmentData = [];
    var a = [];
    var b = [];
    // console.log("result", result);
    const presentDevelopment = result.filter((item) => {
      if (
        item.development_type === "Present Development" &&
        item.ultimate_field === "Availability"
      ) {
        AvailabilityData.push(item);
      }
      if (
        item.development_type === "Present Development" &&
        item.ultimate_field === "Readiness"
      ) {
        ReadinessData.push(item);
      }
    });

    a.push(
      {
        ultimate_field: "Availability",
        data: AvailabilityData,
      },
      {
        ultimate_field: "Readiness",
        data: ReadinessData,
      }
    );

    finalData.push({
      development_type: "Present Development",
      subData: a,
    });
    const prospectiveDevelopment = result.filter((element) => {
      if (
        element.development_type === "Prospective Development" &&
        element.ultimate_field === "Capacity Building"
      ) {
        CapacityData.push(element);
      }
      if (
        element.development_type === "Prospective Development" &&
        element.ultimate_field === "Development Strategy"
      ) {
        DevelopmentData.push(element);
      }
    });
    b.push(
      {
        ultimate_field: "Capacity Building",
        data: CapacityData,
      },
      {
        ultimate_field: "Development Strategy",
        data: DevelopmentData,
      }
    );
    finalData.push({
      development_type: "Prospective Development",
      subData: b,
    });

    console.log("finalData", finalData);
    setcountryData(finalData);
  }

  function data() {
    var axios = require("axios");
    var data = JSON.stringify({
      countries: "108,110",
      governanceId: 1,
    });

    var config = {
      method: "get",
      url: "http://103.127.29.85:4000/ndhs-master/country-list",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setmyCountries(response.data);
        let data = response.data;
        let totalCountry1 = [];
        for (let r = 0; r < data.length; r++) {
          totalCountry1.push({
            cat: data[r].country_id,
            key: data[r].country_name,
          });
        }
        console.log(totalCountry1);
        settotalCountry(totalCountry1);
        Commap(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function Commap(data) {
    console.log(data);

    if (data.length > 2) {
      let obj = data.find((o) => o.id === 74);
      let obj1 = data.find((o) => o.id === 228);
      data = [];
      data.push(obj);
      data.push(obj1);
    } else {
      let obj = myCountries.find((o) => o.id === data[0].cat);
      let obj1 = myCountries.find((o) => o.id === data[1].cat);
      data = [];
      data.push(obj);
      data.push(obj1);
    }
    console.log(data);

    am5.array.each(am5.registry.rootElements, function (root) {
      if (root && root.dom && root.dom.id == "chartdiv") {
        root.dispose();
      }
    });
    let root = am5.Root.new("chartdiv");
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        wheelY: "none",
        wheelX: "none",
        projection: am5map.geoMercator(),
      })
    );
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color(0xf3f3f3),
      })
    );
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: data,
      })
    );
    console.log(data.length);

    data.map((item) => {
      return (
        addCity(item.lng, item.lat, item.name),
        pointSeries.bullets.push(function () {
          const circle = am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0x6794dc),
            tooltipText: "{title}",
          });
          return am5.Bullet.new(root, {
            sprite: circle,
          });
        })
      );
    });

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
    });

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title,
      });
    }
    mydata(data);
  }

  function chart() {
    // Themes begin
    am4core.useTheme(am4themes_animated);

    // var chart = am4core.create("Tree0", am4plugins_forceDirected.ForceDirectedTree);
    // var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    // chart.data = large_tree_data.default;

    let chart = am4core.create(
      "Tree0",
      am4plugins_forceDirected.ForceDirectedTree
    );
    if (chart.logo) {
      chart.logo.disabled = true;
    }
    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    chart.data = [
      {
        name: "Health & It",
        text: "Health & It",
        value: 45,
        g_id: 1,
        d_id: 1,
        u_id: 2,
        t_id: 1,
        sizeFont: 14,
        color: "#64D3BB",
        fixed: true,
        x: am4core.percent(23.25),
        y: am4core.percent(13),
        children: [
          {
            name: "Present Development",
            text: "Present\nDevelopment",
            value: 27.5,
            d_id: 1,
            g_id: 1,
            u_id: 2,
            t_id: 1,
            sizeFont: 11,
            fixed: true,
            x: am4core.percent(12),
            y: am4core.percent(35),
            children: [
              {
                name: "Availability",
                text: "Availability",
                value: 17.5,
                u_id: 2,
                d_id: 1,
                g_id: 1,
                t_id: 1,
                sizeFont: 9,
                fixed: true,
                x: am4core.percent(6),
                y: am4core.percent(55),
                children: [
                  {
                    name: "AI Workforce/Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 5,
                    g_id: 1,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(2),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Healthcare Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 1,
                    g_id: 1,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(3.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Healthcare workforce and Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 4,
                    g_id: 1,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(6),
                    y: am4core.percent(76),
                  },
                  {
                    name: "IT Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 2,
                    g_id: 1,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(8.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "IT Workforce & Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 3,
                    g_id: 1,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(10),
                    y: am4core.percent(70),
                  },
                ],
              },
              {
                name: "Readiness",
                text: "Readiness",
                value: 17.5,
                u_id: 1,
                d_id: 1,
                g_id: 1,
                t_id: 1,
                sizeFont: 9,
                fixed: true,
                x: am4core.percent(18),
                y: am4core.percent(55),
                children: [
                  {
                    name: "AI Workforce/Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 5,
                    g_id: 1,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(14),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Healthcare Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 1,
                    g_id: 1,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(15.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Healthcare workforce and Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 4,
                    g_id: 1,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(18),
                    y: am4core.percent(76),
                  },
                  {
                    name: "IT Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 2,
                    g_id: 1,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(20.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "IT Workforce & Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 3,
                    g_id: 1,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(22),
                    y: am4core.percent(70),
                  },
                ],
              },
            ],
          },
          {
            name: "Prospective Development",
            text: "Prospective\nDevelopment",
            value: 27.5,
            d_id: 2,
            g_id: 1,
            u_id: 3,
            t_id: 1,
            sizeFont: 11,
            fixed: true,
            x: am4core.percent(34.5),
            y: am4core.percent(35),
            children: [
              {
                name: "Capacity Building",
                text: "Capacity\nBuilding",
                value: 17.5,
                u_id: 4,
                d_id: 2,
                g_id: 1,
                t_id: 1,
                sizeFont: 9,
                fixed: true,
                x: am4core.percent(29),
                y: am4core.percent(55),
                children: [
                  {
                    name: "AI Workforce/Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 5,
                    g_id: 1,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(25),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Healthcare Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    fixed: true,
                    t_id: 1,
                    g_id: 1,
                    d_id: 2,
                    u_id: 4,
                    x: am4core.percent(26.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Healthcare workforce and Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 4,
                    g_id: 1,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(29),
                    y: am4core.percent(76),
                  },
                  {
                    name: "IT Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 2,
                    sizeFont: 0,
                    g_id: 1,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(31.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "IT Workforce & Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 3,
                    sizeFont: 0,
                    g_id: 1,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(33),
                    y: am4core.percent(70),
                  },
                ],
              },
              {
                name: "Development Strategy",
                text: "Development\nStrategy",
                value: 17.5,
                u_id: 3,
                d_id: 2,
                g_id: 1,
                t_id: 1,
                sizeFont: 9,
                fixed: true,
                x: am4core.percent(40),
                y: am4core.percent(55),
                children: [
                  {
                    name: "AI Workforce/Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 5,
                    sizeFont: 0,
                    g_id: 1,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(36),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Healthcare Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 1,
                    sizeFont: 0,
                    g_id: 1,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(37.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Healthcare workforce and Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 4,
                    sizeFont: 0,
                    g_id: 1,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(40),
                    y: am4core.percent(76),
                  },
                  {
                    name: "IT Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 2,
                    sizeFont: 0,
                    g_id: 1,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(42.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "IT Workforce & Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 3,
                    sizeFont: 0,
                    g_id: 1,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(44),
                    y: am4core.percent(70),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Digital Health",
        text: "Digital Health",
        value: 45,
        color: "#5470C6",
        fixed: true,
        g_id: 2,
        d_id: 1,
        u_id: 2,
        t_id: 6,
        sizeFont: 14,
        x: am4core.percent(72.25),
        y: am4core.percent(13),
        children: [
          {
            name: "Present Development",
            text: "Present\nDevelopment",
            value: 27.5,
            d_id: 1,
            g_id: 2,
            u_id: 2,
            t_id: 6,
            sizeFont: 11,
            fixed: true,
            x: am4core.percent(58.5),
            y: am4core.percent(35),
            children: [
              {
                name: "Availability",
                text: "Availability",
                value: 17.5,
                u_id: 2,
                d_id: 1,
                g_id: 2,
                t_id: 6,
                sizeFont: 9,
                fixed: true,
                x: am4core.percent(51.5),
                y: am4core.percent(55),
                children: [
                  {
                    name: "DH Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 7,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(46.5),
                    y: am4core.percent(66),
                  },
                  {
                    name: "Digital Health (DH) Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 6,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(47.5),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Funding and resources",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 9,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(49),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Legal rules",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 10,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(51.5),
                    y: am4core.percent(76),
                  },
                  {
                    name: "Literacy (patient+ workforce)",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 12,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(54),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Research Program and funding",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 11,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(55.5),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Workforce (Technical and Health care)",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 8,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 2,
                    fixed: true,
                    x: am4core.percent(56.5),
                    y: am4core.percent(66),
                  },
                ],
              },
              {
                name: "Readiness",
                text: "Readiness",
                value: 17.5,
                u_id: 1,
                d_id: 1,
                g_id: 2,
                t_id: 6,
                sizeFont: 9,
                fixed: true,
                x: am4core.percent(65.5),
                y: am4core.percent(55),
                children: [
                  {
                    name: "DH Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 7,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(60.5),
                    y: am4core.percent(66),
                  },
                  {
                    name: "Digital Health (DH) Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 6,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(61.5),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Funding and resources",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 9,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(63),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Legal rules",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 10,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(65.5),
                    y: am4core.percent(76),
                  },
                  {
                    name: "Literacy (patient+ workforce)",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 12,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(68),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Research Program and funding",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 11,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(69.5),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Workforce (Technical and Health care)",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 8,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 1,
                    u_id: 1,
                    fixed: true,
                    x: am4core.percent(70.5),
                    y: am4core.percent(66),
                  },
                ],
              },
            ],
          },
          {
            name: "Prospective Development",
            text: "Prospective\nDevelopment",
            value: 27.5,
            d_id: 2,
            g_id: 2,
            u_id: 4,
            t_id: 6,
            sizeFont: 11,
            fixed: true,
            x: am4core.percent(86),
            y: am4core.percent(35),
            children: [
              {
                name: "Capacity Building",
                text: "Capacity\nBuilding",
                value: 17.5,
                u_id: 4,
                d_id: 2,
                g_id: 2,
                t_id: 6,
                sizeFont: 9,
                fixed: true,
                x: am4core.percent(79),
                y: am4core.percent(55),
                children: [
                  {
                    name: "DH Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 7,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(74),
                    y: am4core.percent(66),
                  },
                  {
                    name: "Digital Health (DH) Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 6,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(75),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Funding and resources",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 9,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(76.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Legal rules",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 10,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(79),
                    y: am4core.percent(76),
                  },
                  {
                    name: "Literacy (patient+ workforce)",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 12,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(81.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Research Program and funding",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 11,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(83),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Workforce (Technical and Health care)",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 8,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 4,
                    fixed: true,
                    x: am4core.percent(84),
                    y: am4core.percent(66),
                  },
                ],
              },
              {
                name: "Development Strategy",
                text: "Development\nStrategy",
                value: 17.5,
                u_id: 3,
                d_id: 2,
                g_id: 2,
                t_id: 6,
                sizeFont: 9,
                fixed: true,
                x: am4core.percent(93),
                y: am4core.percent(55),
                children: [
                  {
                    name: "DH Infrastructure",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 7,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(88),
                    y: am4core.percent(66),
                  },
                  {
                    name: "Digital Health (DH) Governance",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 6,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(89),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Funding and resources",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 9,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(90.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Legal rules",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 10,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(93),
                    y: am4core.percent(76),
                  },
                  {
                    name: "Literacy (patient+ workforce)",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 12,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(95.5),
                    y: am4core.percent(74),
                  },
                  {
                    name: "Research Program and funding",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 11,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(97),
                    y: am4core.percent(70),
                  },
                  {
                    name: "Workforce (Technical and Health care)",
                    text: "",
                    children: [{}],
                    value: 1,
                    t_id: 8,
                    sizeFont: 0,
                    g_id: 2,
                    d_id: 2,
                    u_id: 3,
                    fixed: true,
                    x: am4core.percent(98),
                    y: am4core.percent(66),
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    chart.legend = new am4charts.Legend();

    series.dataFields.linkWith = "linkWith";
    series.dataFields.name = "name";
    series.dataFields.id = "name";
    series.dataFields.value = "value";
    series.dataFields.children = "children";
    series.dataFields.fixed = "fixed";
    series.dataFields.color = "color";

    series.nodes.template.propertyFields.x = "x";
    series.nodes.template.propertyFields.y = "y";

    series.nodes.template.tooltipText = "{name}";
    series.nodes.template.fillOpacity = 1;
    series.nodes.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    series.nodes.template.label.text = "{text}";
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

    series.nodes.template.events.on("ready", function (event) {
      if (event.target.dataItem.dataContext) {
        var fontSize = event.target.dataItem.dataContext.sizeFont;
      }
      event.target.fontSize = fontSize;
    });

    // series.maxRadius = 35;
    // series.nodes.template.events.on("hit", (e) => {
    //   let test = JSON.stringify(e.target.dataItem.dataContext);
    //   let d_info = JSON.parse(test);
    //   // console.log("d_info", d_info);
    //   let developmentId = d_info.d_id;
    //   let governanceId = d_info.g_id;
    //   let ultimateId = d_info.u_id;
    //   let taxonomyId = d_info.t_id;
    //   let year = "2021,2022";
    //   let loading = false;
    //   // console.log("taxonomy_id", taxonomyId);
    //   // console.log("governance", governanceId);
    //   // console.log("ultimateId", ultimateId);
    //   // console.log("developmentId", developmentId);
    //   Radar({
    //     countries: "106,108",
    //     developmentId: "1,2",
    //     governanceId: governanceId,
    //     taxonomyId: taxonomyId,
    //   });

    //   Bubble({
    //     taxonomyId,
    //     governanceId,
    //     ultimateId,
    //     developmentId,
    //     year,
    //   });
    //   Rose({
    //     // countries: "36,103",
    //     // taxonomyId: taxonomyId,
    //     // governanceId: governanceId,
    //     // ultimateId: ultimateId,
    //     // developmentId: developmentId,

    //     countries: "106,108",
    //     developmentId,
    //     governanceId,
    //     ultimateId,
    //     taxonomyId,
    //   });
    //   // taxonomyTableDetails();
    //   // overviewRadarChart();
    //   // overviewBarChart();
    // });
  }

  function mydata1() {
    chart();
  }

  console.log(totalCountry);
  return (
    <>
      <Box
        style={{
          display: "flex",
          marginTop: "10px",
          float: "right",
          marginRight: "10px",
        }}
      >
        <Box style={{ width: "700px", marginLeft: "20px" }}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>**Select Two Countries for comparison**</Text>
            <Box style={{ width: "300px", fontSize: "12px" }}>
              <Multiselect
                displayValue="key"
                onKeyPressFn={function noRefCheck() {}}
                onRemove={function noRefCheck() {}}
                onSearch={function noRefCheck() {}}
                onSelect={function noRefCheck(selectedValues) {
                  console.log(selectedValues);
                  if (selectedValues.length > 1) {
                    Commap(selectedValues);
                  }
                }}
                options={totalCountry}
                selectedValues={[
                  { cat: 74, key: "UK" },
                  { cat: 228, key: "USA" },
                ]}
                selectionLimit={2}
                showCheckbox
              />
            </Box>
          </Box>
          <Box
            style={{
              marginTop: "20px",
              boxShadow: "0 0 9px 0 black",
              marginLeft: "2px",
            }}
          >
            <div
              id="chartdiv"
              style={{
                width: "650px",
                marginLeft: "20px",
                height: "500px",
                display: "flex",
                justifyContent: "center",
              }}
            ></div>
          </Box>
        </Box>

        <Box style={{}}>
          <VStack>
            <Box>
              {" "}
              <div
                style={{
                  width: "400px",
                  boxShadow: "0 0 9px 0 black",
                  marginLeft: "20px",
                  // marginTop: "20px",
                  padding: "15px",
                  borderRadius: "25px",
                }}
              >
                <div>
                  <button
                    style={{
                      float: "right",
                      color: "lightskyblue",
                      border: "1px solid lightskyblue",
                      padding: "1px",
                    }}
                  >
                    More Details
                  </button>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <h1 style={{ textAlign: "left", marginTop: "5px" }}>
                      Comparative Table
                    </h1>
                    <div>
                      <h1>Country 1</h1>
                      <h1>Country 2</h1>
                    </div>
                  </div>
                  <Flex
                    style={{
                      display: "flex",
                      width: "-webkit-fill-available",
                      justifyContent: "flex-end",
                      marginTop: "5px",
                    }}
                  >
                    <Text>Health & IT</Text>
                    <Text style={{ marginLeft: "13px" }}>Digital Health</Text>
                  </Flex>
                  <Divider />
                  {countryData?.map((item) => {
                    console.log("item", item.development_type);
                    return (
                      <>
                        <h1
                          style={{
                            textAlign: "initial",
                            color: "black",
                            marginTop: "12px",
                          }}
                        >
                          {item.development_type}
                        </h1>
                        <br />
                        <br />
                        <Divider />
                        <p>
                          {item.subData?.map((e) => {
                            return (
                              <>
                                <div
                                  style={{ display: "flex", marginTop: "10px" }}
                                >
                                  <h5 style={{ width: "200px" }}>
                                    {e.ultimate_field}
                                  </h5>
                                  <span
                                    style={{
                                      display: "flex",
                                      marginLeft: "30px",
                                      width: "50px",
                                    }}
                                  >
                                    {e.data?.map((score) => {
                                      console.log(score);
                                      if (
                                        score.governance_name ===
                                        "General Health"
                                      ) {
                                        const col =
                                          score.country === "UK"
                                            ? "green"
                                            : "red";
                                        return (
                                          <p
                                            style={{
                                              color: col,
                                              marginLeft: "5px",
                                            }}
                                          >
                                            {Math.round(score.percentage) + "%"}
                                          </p>
                                        );
                                      }
                                    })}
                                  </span>
                                  <span
                                    style={{
                                      display: "flex",
                                      marginLeft: "40px",
                                    }}
                                  >
                                    {e.data?.map((score) => {
                                      console.log(score.score);
                                      if (
                                        score.governance_name ===
                                        "Digital Health"
                                      ) {
                                        const col =
                                          score.country === "USA"
                                            ? "green"
                                            : "red";
                                        return (
                                          <p
                                            style={{
                                              color: col,
                                              marginLeft: "5px",
                                            }}
                                          >
                                            {Math.round(score.percentage) + "%"}
                                          </p>
                                        );
                                      }
                                    })}
                                  </span>
                                </div>
                              </>
                            );
                          })}
                        </p>
                        <Divider />
                      </>
                    );
                  })}
                </div>
              </div>
            </Box>
            <Box
              style={{ width: "400px", height: "370px", marginRight: "10px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  "margin-top": "20px",
                  "margin-left": "20px",
                  // display: "flex",
                  // justifyContent: "space-between",
                  boxShadow: "0 0 9px 0 black",
                  borderRadius: "25px",
                }}
              >
                <div
                  style={{
                    width: "97%",
                    textAlign: "center",
                    marginTop: "5px",
                  }}
                >
                  <Link to="/network">
                    <Button
                      style={{
                        width: "inherit",
                        textAlign: "end",
                        marginRight: "30px",
                      }}
                    >
                      Over View
                    </Button>
                  </Link>
                </div>
                <div
                  id="Tree0"
                  style={{ width: "100%", height: "95%", padding: "10px" }}
                ></div>
              </div>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default ComparativeMap;
