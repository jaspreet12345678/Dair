// import React, { useEffect, useState } from "react";
// // import ".../style.css";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5core from "@amcharts/amcharts5";
// import * as am5map from "@amcharts/amcharts5/map";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
// import axios from "axios";
// import * as am5percent from "@amcharts/amcharts5/percent";
// import Sidebar from "./Sidebar";
// import Bar from "./Sidebar";
// import {
//   Box,
//   Center,
//   Text,
//   Stack,
//   List,
//   ListItem,
//   ListIcon,
//   Button,
//   useColorModeValue,
// } from "@chakra-ui/react";

// const Map = () => {
//   const [data, setData] = useState([]);

//   async function mappinng(item1, item2) {
//     window.scroll(0, 0);
//     const res = await axios.get(
//       "http://103.127.29.85:4000/ndhs-master/governance-stats/1/103/2021"
//     );
//     const data1 = res.data;

//     console.log("1234566", data1);

//     setData(data1);

//     console.log("data", data1);
//     console.log("item11111", item1);
//     console.log("item222222", item2);

//     // console.log(data);

//     // Create root and chart
//     let root = am5.Root.new("chartdiv");
//     let chart = root.container.children.push(
//       am5percent.PieChart.new(root, {
//         radius: am5.percent(30),
//         innerRadius: am5.percent(75),
//       })
//     );

//     //const jjj = "Present Development"
//     // const jjj = JSON.parse("Present Development")
//     // console.log(typeof jjj)
//     console.log("545646847586456", data1);

//     console.log(
//       "daaaaaaataaaaaaa",
//       data1["Present Development"]["AI Workforce/Infrastructure"]
//     );

//     let realData = data1["Present Development"]["AI Workforce/Infrastructure"];

//     console.log(
//       "realData",
//       Number(realData[0].score) + Number(realData[1].score)
//     );

//     // let tt = 0;
//     // realData.map((item) => {
//     //   console.log("hubhma",item)
//     //   tt = tt + (item.score);
//     // });

//     // console.log(tt)

//     //Define data
//     let data = [
//       {
//         title: "Readiness",
//         score: 77,
//       },
//       {
//         title: "Availability",
//         score: 65,
//       },
//       {
//         title: "No Data Avialable",
//         score: 53,
//       },
//     ];

//     // const mydata = data1.map((ites, key) => {
//     //   return ites;
//     // });
//     // console.log("kjnfdkfhdjfk", mydata);

//     const title = data.map((item, key) => {
//       console.log("first", item.title);
//       return item.title;
//     });

//     let text = "Jaspreet";
//     // Create series
//     let series = chart.series.push(
//       am5percent.PieSeries.new(root, {
//         // name: "Series",
//         valueField: "score",
//         categoryField: "title",
//         alignLabels: false,
//       })
//     );
//     console.log(":::::::");

//     const total = (Number(realData[0].score) + Number(realData[1].score)) / 2;

//     series.data.setAll(data, {
//       fill: am5.color(0x550000),
//     });

//     series.labels.template.setAll({
//       text: "{category}",
//       // textType: "middle",
//       // inside: true,
//       fontSize: 10,
//       radius: 10,
//     });
//     // series.labels.template.set({
//     //   text: "JASPREET",
//     //   textType: "middle",
//     //   inside: true,
//     //   fontSize: 12,

//     //   radius: 10,
//     // });
//     console.log(total);

//     let label = chart.seriesContainer.children.push(
//       am5.Label.new(root, {
//         textAlign: "center",
//         centerY: am5.p50,
//         centerX: am5.p50,
//         text: `${total}%`,
//       })
//     );
//     // series.horizontalCenter = "middle";
//     // series.verticalCenter = "middle";
//     //series.labels.template.set("visible", false);
//     //series.ticks.template.set("visible", false);
//     series.slices.template.states.create("active", {
//       shiftRadius: 0.5,
//       stroke: am5.color(0xffffff),
//       strokeWidth: 2,
//     });
//     series.ticks.template.set(data, {
//       // stroke: am5.color(0xffffff),
//       strokeWidth: 2,
//       location: 1,
//     });
//     series.ticksContainer.template.setAll("visible", false);

//     // Add legend
//     let legend = chart.children.push(
//       am5.Legend.new(root, {
//         centerX: am5.percent(50),
//         x: am5.percent(50),
//         layout: root.horizontalLayout,
//       })
//     );

//     legend.data.setAll(series.dataItems);
//     chart.current = chart;
//     root.current = root;
//     return () => {
//       root.dispose();
//       chart.dispose();
//     };
//   }

//   useEffect(() => {
//     mappinng();
//   }, []);
//   console.log(data);

//   return (
//     <>
//       <Center>
//         <Box
//           maxH={"330px"}
//           maxW={"330px"}
//           w={"full"}
//           bg={useColorModeValue("white", "gray.800")}
//           boxShadow={"2xl"}
//           rounded={"md"}
//           overflow={"hidden"}
//         >
//           {/* <Stack
//             textAlign={"center"}
//             p={6}
//             color={useColorModeValue("gray.800", "white")}
//             align={"center"}
//           >
//             <Text
//               fontSize={"sm"}
//               fontWeight={500}
//               bg={useColorModeValue("green.50", "green.900")}
//               p={2}
//               px={3}
//               color={"green.500"}
//               rounded={"full"}
//             >
//               Hobby
//             </Text>
//             <Stack direction={"row"} align={"center"} justify={"center"}>
//               <Text fontSize={"3xl"}>$</Text>
//               <Text fontSize={"6xl"} fontWeight={800}>
//                 79
//               </Text>
//               <Text color={"gray.500"}>/month</Text>
//             </Stack>
//           </Stack> */}

//           <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
//         </Box>
//       </Center>
//     </>
//   );
// };

// export default Map;
