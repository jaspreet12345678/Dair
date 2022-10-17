import React, { useEffect, useState } from "react";
import "../style.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import axios from "axios";
import Sidebar from "./Sidebar";
import Bar from "./Sidebar";

const Map = () => {
  const [data, setData] = useState([]);
  const [item1, setItem] = useState([]);
  const [item2, setItem2] = useState([]);
  const year1 = 2021;
  const year2 = 2022;
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };

  async function mappinng() {
    window.scroll(0, 0);
    const res = await axios.get(
      "http://103.127.29.85:4000/ndhs-master/country-list"
    );
    const data1 = res.data;
    setData({ data: data1 });
    // console.log(data);

    //   const root = am5.Root.new("chartdiv");
    //   root.setThemes([am5themes_Animated.new(root)]);

    //   const chart = root.container.children.push(
    //     am5map.MapChart.new(root, {
    //       projection: am5map.geoMercator(),
    //     })
    //   );

    //  // console.log(typeof cities);

    //   const polygonSeries = chart.series.push(
    //     am5map.MapPolygonSeries.new(root, {
    //       geoJSON: am5geodata_worldLow,
    //       exclude: ["AQ"],
    //       fill: am5.color(0xf3f3f3),
    //     })
    //   );

    //   console.log("!!!!!!!!!!!", item1);

    //   item1.map((item, key) => {
    //     console.log("@@@@@@@", item);
    //     if (item.year === 2021 || item.year === 2022) {
    //       console.log("jjjjj", item);
    //       return addCity(item.lng, item.lat, item.country_name);
    //     }
    //   });
    //   const pointSeries = chart.series.push(
    //     am5map.MapPointSeries.new(root, {
    //       geoJSON: item1,
    //     })
    //   );
    //   pointSeries.bullets.push(function () {
    //     return am5.Bullet.new(root, {
    //       sprite: am5.Circle.new(root, {
    //         radius: 5,
    //         fill: am5.color(0x6794dc),
    //         tooltipText: "{title}",
    //       }),
    //     });
    //   });

    //   function addCity(longitude, latitude, title) {
    //     pointSeries.data.push({
    //       geometry: { type: "Point", coordinates: [longitude, latitude] },
    //       title: title,
    //     });
    //   }

    //   root = root;
  }

  const handle2021 = () => {
    // console.log(data)
    // console.log("***************",this.state.data);
    // console.log(data.data);
    const myData = data.data;
    // myData &&
    //   myData.map((item, key) => {
    //     if (item.year === 2021) {
    //       item1.push(data);
    //       console.log(item1)
    //     }
    //   });
    myData.map((data) => (data.year === 2021 ? item1.push(data) : ""));
    console.log(item1);

    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
      })
    );

    console.log("data", data);
    // console.log(typeof cities);

    console.log("name", item2);

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color(0xf3f3f3),
      })
    );
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: item1,
      })
    );

    console.log("!!!!@@@@@@@@@@@@@!", item1);

    item1 &&
      item1.map((item, key) => {
        console.log("@@@@@@@", item);
        if (item.year === 2021) {
          console.log("jjjjjaqnder", item);
          return addCity(item.lng, item.lat, item.country_name);
        }
      });
    // const pointSeries = chart.series.push(
    //   am5map.MapPointSeries.new(root, {
    //     geoJSON: item1,
    //   })
    // );
    console.log("123456", pointSeries);
    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0x6794dc),
          tooltipText: "{title}",
        }),
      });
    });

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title,
      });
    }

    root = root;
  };

  const handle2022 = (e) => {
    const myData1 = data.data;
    myData1.map((data) => (data.year === 2022 ? item2.push(data) : ""));
    console.log(item2);
    // data &&
    // data.map((item, key) => {
    //   if (item.year === 2022) {
    //     console.log(item);
    //   }
    // });
  };

  useEffect(() => {
    mappinng();
  }, []);

  return (
    <>
    
      <div>
        <h2>Countries List</h2>
        <input
          type="checkbox"
          id="vehicle1"
          name="2021"
          value={checked}
          onClick={handle2021}
        />
        2021
        <input
          type="checkbox"
          id="vehicle2"
          name="2022"
          value={checked}
          onClick={handle2022}
        />
        2022
      </div>
      <div
        id="chartdiv"
        style={{ width: "100%", height: "500px", marginTop: "20px" }}
      ></div>
    </>
  );
};

export default Map;
