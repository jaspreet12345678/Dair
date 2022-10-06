import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import "./map.css";

function ComparativeMap(props) {
  var show = true;

  function showCheckboxes(e) {
    let checkboxes = e.target.value("checkBoxes");

    if (show) {
      checkboxes.style.display = "block";
      show = false;
    } else {
      checkboxes.style.display = "none";
      show = true;
    }
  }
  useLayoutEffect(() => {
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
        geoJSON: "india",
      })
    );
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
    });

    // root.current = root;

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <>
      <select id="test">
        <option value="1">American Black Bear</option>
        <option value="2">Asiatic Black Bear</option>
        <option value="3">Brown Bear</option>
        <option value="4">Giant Panda</option>
        <option value="5">Sloth Bear</option>
        <option value="6">Sun Bear</option>
        <option value="7">Polar Bear</option>
        <option value="8">Spectacled Bear</option>
      </select>

      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
}

export default ComparativeMap;
