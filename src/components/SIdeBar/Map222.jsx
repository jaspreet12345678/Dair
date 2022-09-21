import React, { useEffect, useState } from "react";
// import ".../style.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import axios from "axios";
import Sidebar from "./Sidebar";
import Bar from "./Sidebar";
import { map } from "@amcharts/amcharts5/.internal/core/util/Array";
import { FaWindows } from "react-icons/fa";
import {
  Menu,
  MenuDivider,
  MenuGroup,
  MenuList,
  Button,
  MenuButton,
  MenuItem,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Map = (props) => {
  const [data, setData] = useState([]);
  const [item1, setItem] = useState([]);
  const [item2, setItem2] = useState([]);

  const [checked21, setChecked21] = useState(false);
  const [checked22, setChecked22] = useState(false);
  const [year21, setYear21] = useState("");
  const [year22, setYear22] = useState("");

  async function mappinng(item) {
    const root = am5.Root.new("chartdiv");

    // console.log("first",item)
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        wheelY: "none",
        wheelX: "none",
        projection: am5map.geoMercator(),
      })
    );

    // console.log("jaspreet", data);
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color(0xf3f3f3),
      })
    );
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: item,
      })
    );

    // console.log("1234564654", item);

    item &&
      item.map((item, key) => {
        console.log("@@@@@@@", item);
        if (item.year === 2021) {
          console.log("jjjjjaqnder", item);

          // const pointSeries = chart.series.push(
          //   am5map.MapPointSeries.new(root1, {
          //     geoJSON: data1,
          //   })
          // );
          return (
            addCity(item.lng, item.lat, item.country_name),
            pointSeries.bullets.push(function () {
              const circle = am5.Circle.new(root, {
                radius: 5,
                fill: am5.color(0x6794dc),
                tooltipText: "{title}",
              });
              circle.events.on("click", function (ev) {
                window.location = "/";
              });
              return am5.Bullet.new(root, {
                sprite: circle,
              });
            })
          );
        } else {
          return (
            addCity(item.lng, item.lat, item.country_name),
            pointSeries.bullets.push(function () {
              const circle = am5.Circle.new(root, {
                radius: 5,
                fill: am5.color(0x68dc76),
                tooltipText: "{title}",
              });
              circle.events.on("click", function (ev) {
                window.location = "/";
              });
              return am5.Bullet.new(root, {
                sprite: circle,
              });
            })
          );
        }
      });

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title,
      });
    }

    // root = root;
    // root.dispose();
  }

  const handleOnChange22 = async (props) => {
    window.scroll(0, 0);
    const res = await axios.get(
      "http://103.127.29.85:4000/ndhs-master/country-list"
    );
    const data2 = res.data;
    setData({ data: data2 });
    console.log(!checked22);
    setChecked22(!checked22);
    if (!checked22 === true) {
      // const myData1 = data.data;
      data2.map((data) => (data.year === 2022 ? item2.push(data) : ""));
      return mappinng(item2);
    } else {
      props.history.push("/");
    }
  };

  const handleOnChange21 = async (e) => {
    console.log(!checked21);
    window.scroll(0, 0);
    const res = await axios.get(
      "http://103.127.29.85:4000/ndhs-master/country-list"
    );
    const data1 = res.data;
    setData({ data: data1 });
    setChecked21(!checked21);
    if (!checked21 === true) {
      // const myData = data.data;
      data1.map((data) => (data.year === 2021 ? item1.push(data) : ""));
      // console.log(item1);
      return mappinng(item1);
    } else {
      setYear21(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <Flex>
        <Link to="/">
          <Text bg={"white"}>Home</Text>
        </Link>
      </Flex>

      <Menu>
        <MenuButton as={Button} colorScheme="blue">
          NDHS
        </MenuButton>
        <MenuList>
          <MenuGroup title="NDHS">
            <MenuButton>My Account</MenuButton>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <div style={{ width: "1000px", marginLeft: "275px" }}>
        <div>
          <h2>Countries List</h2>
          <input
            style={{ marginTop: "10px" }}
            type="checkbox"
            name="2021"
            value={year21}
            checked={checked21}
            // onClick={handle2021}
            // checked={checked21}
            onChange={handleOnChange21}
            // onChange={(e) => setChecked21(e.target.checked)}
          />
          <label style={{ marginLeft: "5px" }}>2021</label>
          <input
            style={{ marginLeft: "5px" }}
            type="checkbox"
            name="2022"
            value={year22}
            // onClick={handle2022}
            checked={checked22}
            onChange={handleOnChange22}
          />
          <label style={{ marginLeft: "5px" }}>2022</label>
        </div>
        <hr />
        <div
          id="chartdiv"
          style={{ width: "100%", height: "400px", marginTop: "20px" }}
        ></div>
      </div>
    </>
  );
};

export default Map;
