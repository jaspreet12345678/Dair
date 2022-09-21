// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// import { Text } from "@chakra-ui/react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5map from "@amcharts/amcharts5/map";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

// function MainMap() {
//   const [checked21, setChecked21] = useState(false);
//   const [checked22, setChecked22] = useState(false);
//   const [year21, setYear21] = useState("");
//   const [year22, setYear22] = useState("");
//   const [data, setData] = useState([]);
//   const [item1, setItem] = useState([]);
//   const [item2, setItem2] = useState([]);

//   function map(item) {
//     console.log("shubham", item);

//     const root = am5.Root.new("chartdiv");
//     root.setThemes([am5themes_Animated.new(root)]);

//     const chart = root.container.children.push(
//       am5map.MapChart.new(root, {
//         projection: am5map.geoMercator(),
//       })
//     );

//     const polygonSeries = chart.series.push(
//       am5map.MapPolygonSeries.new(root, {
//         geoJSON: am5geodata_worldLow,
//         exclude: ["AQ"],
//         fill: am5.color(0xf3f3f3),
//       })
//     );
//     const pointSeries = chart.series.push(
//       am5map.MapPointSeries.new(root, {
//         geoJSON: item,
//       })
//     );

//     item &&
//       item.map((item, key) => {
//         console.log("@@@@@@@", item);
//         if (item.year === 2021) {
//           console.log("jjjjjaqnder", item);
//           return addCity(item.lng, item.lat, item.country_name);
//         }
//       });

//     pointSeries.bullets.push(function () {
//       return am5.Bullet.new(root, {
//         sprite: am5.Circle.new(root, {
//           radius: 5,
//           fill: am5.color(0x6794dc),
//           tooltipText: "{title}",
//         }),
//       });
//     });

//     function addCity(longitude, latitude, title) {
//       pointSeries.data.push({
//         geometry: { type: "Point", coordinates: [longitude, latitude] },
//         title: title,
//       });
//     }

//     root = root;
//   }

//   const handle21 = async () => {
//     const data1 = await axios.get(
//       "http://103.127.29.85:4000/ndhs-master/country-list"
//     );
//     const result = data1.data;
//     setData(result);
//     console.log(!checked21);
//     setChecked21(!checked21);
//     if (!checked21 === true) {
//       //   const myData = data.data;
//       result.map((data) => (data.year === 2021 ? item1.push(data) : ""));
//       // console.log(item1);
//       return map(item1);
//     } else {
//       setYear21("");
//     }
//   };

//   const handle22 = async () => {
//     const data1 = await axios.get(
//       "http://103.127.29.85:4000/ndhs-master/country-list"
//     );
//     const result = data1.data;
//     setData(result);
//     console.log(!checked22);
//     setChecked22(!checked22);
//     if (!checked22 === true) {
//       //   const myData1 = data.data;
//       result.map((data) => (data.year === 2022 ? item2.push(data) : ""));
//       return map(item2);
//     } else {
//       setYear22("null");
//     }
//   };

//   map(item1);
//   return (
//     <>
//       <div style={{ marginLeft: "20px" }}>
//         <h2>Countries List</h2>
//         <input
//           type="checkbox"
//           name="2021"
//           value={year21}
//           checked={checked21}
//           // onClick={handle2021}
//           // checked={checked21}
//           onChange={handle21}
//           // onChange={(e) => setChecked21(e.target.checked)}
//         />
//         2021
//         <input
//           type="checkbox"
//           name="2022"
//           value={year22}
//           // onClick={handle2022}
//           checked={checked22}
//           onChange={handle22}
//         />
//         2022
//       </div>
//       <div
//         id="chartdiv"
//         style={{ width: "100%", height: "500px", marginTop: "20px" }}
//       ></div>
//     </>
//   );
// }

// export default MainMap;
