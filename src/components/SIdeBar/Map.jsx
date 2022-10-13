import React, { useEffect, useState } from "react";
// import ".../style.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import axios from "axios";
import DropdownTreeSelect from "react-dropdown-tree-select";
import data from './demo-data.json'
// import Sidebar from "./Sidebar";
// import Bar from "./Sidebar";
// import { map } from "@amcharts/amcharts5/.internal/core/util/Array";
// import { FaWindows } from "react-icons/fa";
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
import { withRouter } from "react-router-dom";

function Graph(props) {
  const [data, setData] = useState([]);
  const [item1, setItem] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [mydhdata, setdata] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checked21, setChecked21] = useState(true);
  const [checked22, setChecked22] = useState(false);
  const [year21, setYear21] = useState("");
  const [year22, setYear22] = useState("");
  let countries = [];

  async function mappinng(item) {
    am5.array.each(am5.registry.rootElements, function (root) {
      if (root && root.dom && root.dom.id === "chartdiv") {
        root.dispose();
      }
    });

    const root = am5.Root.new("chartdiv");

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
        geoJSON: item,
      })
    );

    console.log(item.length);
    var l = item.length;
    item &&
      item.map((item, key) => {
        if (item.year === 2021 && l == 22) {
          return (
            addCity(item),
            pointSeries.bullets.push(function () {
              const circle = am5.Circle.new(root, {
                radius: 5,
                fill: am5.color(0x6794dc),
                tooltipText: "{title}",
              });
              circle.events.on("click", function (e) {
                let country_id1 = e.target.dataItem.dataContext.country_id;
                let country_flag1 = e.target.dataItem.dataContext.flag;
                let country_iso_code1 = e.target.dataItem.dataContext.iso_code;
                let year1 = e.target.dataItem.dataContext.year;
                let country_name1 = e.target.dataItem.dataContext.title;
                let country_id = [];
                let country_name = [];
                let year = [];
                let country_iso_code = [];
                let country_flag = [];
                console.log("jasjdksad", country_name1);

                // countries = [
                //   country_id1,
                //   country_flag1,
                //   country_iso_code1,
                //   year1,
                //   country_name1,
                // ];
                console.log(countries);
                country_id = localStorage.setItem("country_id", country_id1);
                country_name = localStorage.setItem(
                  "country_name",
                  country_name1
                );
                country_iso_code = localStorage.setItem(
                  "country_iso_code",
                  country_iso_code1
                );
                country_flag = localStorage.setItem(
                  "country_flag",
                  country_flag1
                );
                year = localStorage.setItem("year", year1);
                // console.log(country_id);
                // console.log(year);
                // console.log(country_name);
                // console.log(country_iso_code);
                // console.log(country_flag);
                props.history.push(`/graph/${country_id1}`);
              });
              return am5.Bullet.new(root, {
                sprite: circle,
              });
            })
          );
        } else if (item.year === 2022 && l == 26) {
          return (
            addCity(item),
            pointSeries.bullets.push(function () {
              const circle = am5.Circle.new(root, {
                radius: 5,
                fill: am5.color(0x68dc76),
                tooltipText: "{title}",
              });
              circle.events.on("click", (e) => {
                let country_id1 = e.target.dataItem.dataContext.country_id;
                let country_flag1 = e.target.dataItem.dataContext.flag;
                let country_iso_code1 = e.target.dataItem.dataContext.iso_code;
                let year1 = e.target.dataItem.dataContext.year;
                let country_name1 = e.target.dataItem.dataContext.title;
                let country_id = [];
                let country_name = [];
                let year = [];
                let country_iso_code = [];
                let country_flag = [];
                console.log("jasjdksad", country_name1);

                // countries = [
                //   country_id1,
                //   country_flag1,
                //   country_iso_code1,
                //   year1,
                //   country_name1,
                // ];
                console.log(countries);
                country_id = localStorage.setItem("country_id", country_id1);
                country_name = localStorage.setItem(
                  "country_name",
                  country_name1
                );
                country_iso_code = localStorage.setItem(
                  "country_iso_code",
                  country_iso_code1
                );
                country_flag = localStorage.setItem(
                  "country_flag",
                  country_flag1
                );
                year = localStorage.setItem("year", year1);
                // console.log(country_id);
                // console.log(year);
                // console.log(country_name);
                // console.log(country_iso_code);
                // console.log(country_flag);
                props.history.push(`/graph/${country_id1}`);
              });
              return am5.Bullet.new(root, {
                sprite: circle,
              });
            })
          );
        } else {
          return (
            addCity(item),
            pointSeries.bullets.push(function () {
              const circle = am5.Circle.new(root, {
                radius: 5,
                fill: am5.color(0xff0000),
                tooltipText: "{title}",
              });
              circle.events.on("click", function (e) {
                let country_id1 = e.target.dataItem.dataContext.country_id;
                let country_flag1 = e.target.dataItem.dataContext.flag;
                let country_iso_code1 = e.target.dataItem.dataContext.iso_code;
                let year1 = e.target.dataItem.dataContext.year;
                let country_name1 = e.target.dataItem.dataContext.title;
                let country_id = [];
                let country_name = [];
                let year = [];
                let country_iso_code = [];
                let country_flag = [];
                console.log("jasjdksad", country_name1);

                // countries = [
                //   country_id1,
                //   country_flag1,
                //   country_iso_code1,
                //   year1,
                //   country_name1,
                // ];
                console.log(countries);
                country_id = localStorage.setItem("country_id", country_id1);
                country_name = localStorage.setItem(
                  "country_name",
                  country_name1
                );
                country_iso_code = localStorage.setItem(
                  "country_iso_code",
                  country_iso_code1
                );
                country_flag = localStorage.setItem(
                  "country_flag",
                  country_flag1
                );
                year = localStorage.setItem("year", year1);
                // console.log(country_id);
                // console.log(year);
                // console.log(country_name);
                // console.log(country_iso_code);
                // console.log(country_flag);
                props.history.push(`/graph/${country_id1}`);
              });
              return am5.Bullet.new(root, {
                sprite: circle,
              });
            })
          );
        }
      });

    function addCity(item) {
      const longitude = item.lng;
      const latitude = item.lat;
      const title = item.country_name;
      const id = item.country_id;
      const iso_code = item.iso_code;
      const year = item.year;
      const flag = item.flag;
      const name = item.name;
      const country_id = item.country_id;
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title,
        id: id,
        iso_code: iso_code,
        year: year,
        flag: flag,
        year: year,
        name: name,
        country_id: country_id,
      });
    }
  }

  const handleOnChange22 = async (e) => {
    setItem2([]);
    setChecked22(true);
    setChecked21(false);
    setChecked(false);
    window.scroll(0, 0);
    let res = e;
    // const res = await axios.get(
    //   "http://103.127.29.85:4000/ndhs-master/country-list"
    // );
    // const data2 = res.data;
    // setData({ data: data2 });
    // setChecked22(!checked22);
    if (e.length != 48) {
      res = await axios.get(
        "http://103.127.29.85:4000/ndhs-master/country-list"
      );
      res = res.data;
    }
    const data1 = res;
    setData({ data: data1 });
    data1.map((data) => (data.year === 2022 ? item2.push(data) : ""));
    return mappinng(item2);
    // if (!checked22 === true) {
    //   data2.map((data) => (data.year === 2022 ? item2.push(data) : ""));
    //   return mappinng(item2);
    // }
  };

  const handleOnChange21 = async (e) => {
    setItem([]);
    setChecked(false);
    setChecked21(true);
    setChecked22(false);
    window.scroll(0, 0);
    let res = e;
    if (e.length != 48) {
      res = await axios.get(
        "http://103.127.29.85:4000/ndhs-master/country-list"
      );
      res = res.data;
    }
    const data1 = res;
    setData({ data: data1 });
    data1.map((data) => (data.year === 2021 ? item1.push(data) : ""));
    return mappinng(item1);
  };

  const handleOnChange = async (props) => {
    setItem3([]);
    setChecked(true);
    setChecked21(false);
    setChecked22(false);

    window.scroll(0, 0);
    const res = await axios.get(
      "http://103.127.29.85:4000/ndhs-master/country-list"
    );
    const data2 = res.data;
    setData({ data: data2 });
    //setChecked(!checked);
    if (!checked === true) {
      data2.map((data) => {
        data = item3.push(data);
      });
      return mappinng(item3);
    }
  };

  function mydata() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://103.127.29.85:4000/ndhs-master/country-list",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setdata(response.data);
        handleOnChange21(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function data2021() {
    const data1 = mydhdata;
    setData({ data: data1 });
    setChecked21(!checked21);
    if (checked21 === true) {
      data1.map((data) => (data.year === 2021 ? item1.push(data) : ""));
      return mappinng(item1);
    } else {
      setYear21(false);
    }
  }

  useEffect(() => {
    mydata();
    data2021();
  }, []);

  return (
    <>
      <Flex>
        <Link to="/">
          <Text ml={10} bg={"white"}>
            Home
          </Text>
        </Link>
      </Flex>
      <DropdownTreeSelect data={data} keepTreeOnSearch />

      <div
        style={{
          "box-shadow": "0 0 9px 0 grey",
          width: "1000px",
          marginLeft: "260px",
          height: "580px",
        }}
      >
        <div>
          <h2
            style={{
              "margin-left": "10px",
              "margin-top": "10px",
              padding: "18px",
            }}
          >
            Countries List
          </h2>
          <div
            style={{
              "margin-left": "10px",
              "margin-top": "10px",
              padding: "18px",
            }}
          >
            <input
              type="checkbox"
              name="2021"
              value={year21}
              checked={checked21}
              onClick={handleOnChange21}
              // onChange={(e) => setChecked21(e.target.checked)}
            />
            <label style={{ marginLeft: "5px" }}>2021</label>
            <input
              style={{ marginLeft: "5px" }}
              type="checkbox"
              name="2022"
              value={year22}
              checked={checked22}
              onClick={handleOnChange22}
            />
            <label style={{ marginLeft: "5px" }}>2022</label>
            <input
              style={{ marginLeft: "5px" }}
              type="checkbox"
              name="2022"
              //value={year22}
              checked={checked}
              onClick={handleOnChange}
            />
            <label style={{ marginLeft: "5px" }}>All Data</label>
          </div>
        </div>
        <hr />
        <div
          id="chartdiv"
          style={{ width: "100%", height: "400px", marginTop: "20px" }}
        ></div>
      </div>
    </>
  );
}

export default withRouter(Graph)
