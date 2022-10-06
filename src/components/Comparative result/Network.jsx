import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import large_tree_data from "./NetworkData";
import { data } from "jquery";
var axios = require("axios");

const Tree = () => {
  var data2 = [];
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
    series.nodes.template.events.on("hit", (e) => {
      let test = JSON.stringify(e.target.dataItem.dataContext);
      let d_info = JSON.parse(test);
      console.log("d_info", d_info);
      let developmentId = d_info.d_id;
      let governanceId = d_info.g_id;
      let ultimateId = d_info.u_id;
      let taxonomyId = d_info.t_id;
      let year = "2021,2022";
      let loading = false;
      console.log("taxonomy_id", taxonomyId);
      console.log("governance", governanceId);
      console.log("ultimateId", ultimateId);
      console.log("developmentId", developmentId);
      Bubble({
        taxonomyId,
        governanceId,
        ultimateId,
        developmentId,
        year,
      });
      // taxonomyTableDetails();
      // overviewRadarChart();
      // overviewBarChart();
    });
  }

  function myData() {
    chart();
  }

  useEffect(() => {
    myData();
    Bubble();
  }, []);

  function BubbleChart(data) {
    let range25 = [];
    let range60 = [];
    let range80 = [];
    let range100 = [];
    let result = data;

    result.forEach((element) => {
      console.log("element", element.percentage);
      let b_chart = {
        name: element.country_name,
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

    
    data2.push(result);

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
    if (chart.logo) {
      chart.logo.disabled = true;
    }

    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.paddingLeft = 4;
    chart.legend.labels.template.paddingRight = -20;
    chart.legend.fontSize = 10;
    var markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 12;
    markerTemplate.height = 12;
    chart.legend.scrollable = true;
    var networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    networkSeries.data = [];
    networkSeries.data = [
      {
        id: "1",
        name: "0%-30%",
        iso_code: "30%",
        value: 1,
        fixed: true,
        color: "#FA8E15",
        x: am4core.percent(40),
        y: am4core.percent(40),
        children: range25,
      },
      {
        id: "2",
        name: "31%-60%",
        iso_code: "60%",
        color: "#5FE7B1",
        fixed: true,
        value: 1,
        x: am4core.percent(60),
        y: am4core.percent(40),
        children: range60,
      },
      {
        id: "3",
        name: "61%-80%",
        iso_code: "80%",
        color: "#3678B5",
        fixed: true,
        value: 1,
        x: am4core.percent(50),
        y: am4core.percent(65),
        children: range80,
      },
      {
        id: "4",
        name: "81%-100%",
        iso_code: "100%",
        color: "#220055",
        fixed: true,
        value: 1,
        x: am4core.percent(50),
        y: am4core.percent(35),
        children: range100,
      },
    ];

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "{name}";
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
    // networkSeries.nodes.template.interactionsEnabled = false;

    networkSeries.nodes.template.strokeWidth = 0;
    networkSeries.links.template.strokeOpacity = 0;
    networkSeries.nodes.template.label.fill = am4core.color("#fff");

    networkSeries.nodes.template.outerCircle.strokeOpacity = 0;
    networkSeries.nodes.template.outerCircle.fillOpacity = 0;
    networkSeries.nodes.template.togglable = false;

    networkSeries.minRadius = 5;
    networkSeries.maxRadius = 12;
    var title2 = chart.titles.create();
    const mac = navigator.appVersion.indexOf("Mac") != -1 ? "62%" : "38%";
    //console.log("3333333333333333",data[0].development_type)

    title2.align = "left";
    title2.rotation = 0;
    //title2.marginBottom = -40;

    var title = chart.titles.create();
    title.text = data[0].taxonomy_name;
    title.marginTop = 0;
    // title.marginBottom = 60;
    // title.marginLeft = 60;
    title.fontSize = 15;
    title.fontWeight = "300";
    title.align = "center";
  }

  function Bubble(data) {
    if (data) {
      let title = [];
      var data = data;

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
          //console.log("title", title);
          BubbleChart(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      let title = [];
      var data = {
        developmentId: 1,
        governanceId: 2,
        ultimateId: 1,
        taxonomyId: 10,
        year: "2021,2022",
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
          //console.log("title", title);
          BubbleChart(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  data2?.map((item) => {
    console.log("data", item);

  })
  console.log("$$$$$$$$$$$$$$$$$$$$", data2[0]);
 // console.log("type", typeof data2);

  return (
    <>
      <div
        style={{
          width: "43.33333333%",
          height: "85vh",
          "margin-top": "20px",
          "margin-left": "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div id="Tree0" style={{ width: "100%", height: "100%" }}></div>

        <div
          style={{
            background: "#000",
            "margin-top": "20px",
            "margin-left": "100px",
            width: "70px",
            color: "#fff",
            height: "280px",
            padding: "10px",
            "text-align": "center",
            "border-radius": "15px 0px 0 15px",
          }}
        >
          <div
            style={{
              transform: "rotate(-90deg)",
              position: "absolute",
              left: "435px",
              top: "20%",
            }}
          >
            <label
              style={{
                "font-size": "12px",
                width: "200px",
                position: "relative",

                height: "100%",
              }}
            >
              {console.log("5555555555555", data)}
            </label>
            <br />
            <span style={{ "font-size": "12px" }}>
              <b> </b>
            </span>
          </div>

          <div
            id="chartdiv1"
            style={{ width: "400px", height: "280px", margin: "0 auto" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Tree;
