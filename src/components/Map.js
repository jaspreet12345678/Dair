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
    // let chart = root.container.children.push(
    //   am5map.MapChart.new(root, {})
    // );

    // Define data

    // Create Y-axis

    // Create X-Axis

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
      })
    );

    data.map((item, key) => {
        addCity(item.longitude, item.latitude, item.title);
        console.log("jbjkghkjgd",item)
      
      }
    );

    // var cities = [
    //   {
    //     title: "Brussels",
    //     latitude: 50.8371,
    //     longitude: 4.3676
    //   },
    //   {
    //     title: "Copenhagen",
    //     latitude: 55.6763,
    //     longitude: 12.5681
    //   },
    //   {
    //     title: "Paris",
    //     latitude: 48.8567,
    //     longitude: 2.351
    //   },
    //   {
    //     title: "Reykjavik",
    //     latitude: 64.1353,
    //     longitude: -21.8952
    //   },
    //   {
    //     title: "Moscow",
    //     latitude: 55.7558,
    //     longitude: 37.6176
    //   },
    //   {
    //     title: "Madrid",
    //     latitude: 40.4167,
    //     longitude: -3.7033
    //   },
    //   {
    //     title: "London",
    //     latitude: 51.5002,
    //     longitude: -0.1262,
    //     url: "http://www.google.co.uk"
    //   },
    //   {
    //     title: "Peking",
    //     latitude: 39.9056,
    //     longitude: 116.3958
    //   },
    //   {
    //     title: "New Delhi",
    //     latitude: 28.6353,
    //     longitude: 77.225
    //   },
    //   {
    //     title: "Tokyo",
    //     latitude: 35.6785,
    //     longitude: 139.6823,
    //     url: "http://www.google.co.jp"
    //   },
    //   {
    //     title: "Ankara",
    //     latitude: 39.9439,
    //     longitude: 32.856
    //   },
    //   {
    //     title: "Buenos Aires",
    //     latitude: -34.6118,
    //     longitude: -58.4173
    //   },
    //   {
    //     title: "Brasilia",
    //     latitude: -15.7801,
    //     longitude: -47.9292
    //   },
    //   {
    //     title: "Ottawa",
    //     latitude: 45.4235,
    //     longitude: -75.6979
    //   },
    //   {
    //     title: "Washington",
    //     latitude: 38.8921,
    //     longitude: -77.0241
    //   },
    //   {
    //     title: "Kinshasa",
    //     latitude: -4.3369,
    //     longitude: 15.3271
    //   },
    //   {
    //     title: "Cairo",
    //     latitude: 30.0571,
    //     longitude: 31.2272
    //   },
    //   {
    //     title: "Pretoria",
    //     latitude: -25.7463,
    //     longitude: 28.1876
    //   }
    // ];
    
   


    const cities = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "New York City",
          },
          geometry: {
            type: "Point",
            coordinates: [-73.778137, 40.641312],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "London",
          },
          geometry: {
            type: "Point",
            coordinates: [-0.454296, 51.47002],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "Beijing",
          },
          geometry: {
            type: "Point",
            coordinates: [116.597504, 40.072498],
          },
        },
      ],
    };

    console.log(typeof cities);

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: data,
      })
    );

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title
      });
    }


    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0xff0000),
        }),
      });
    });

    this.root = root;
  }

  // componentWillUnmount() {
  //   if (this.root) {
  //     this.root.dispose();
  //   }
  // }

  render() {
    return <div id="chartdiv" style={{ width: "100%", height: "400px" }}></div>;
  }
}

export default App;
