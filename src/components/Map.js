import React, { Component } from "react";
import "../style.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    window.scroll(0, 0);
    const res = await axios.get(
      "http://103.127.29.85:4000/ndhs-master/country-list"
    );
    const data = res.data;
    this.setState({ data });
    // console.log(data);

    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
      })
    );

    console.log(typeof cities);

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

    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0x6794dc),
          tooltipText: "{title}",
        }),
      });
    });
    data &&
      data.map((item, key) => {
        console.log("jjjjj", item);
        return addCity(item.lng, item.lat, item.country_name);
      });

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title,
      });
    }

    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return (
      <div
        id="chartdiv"
        style={{ width: "100%", height: "500px", marginTop: "20px" }}
      ></div>
    );
  }
}

export default App;
