import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";

function Questions() {
  let country_flag = localStorage.getItem("country_flag");
  let country_name = localStorage.getItem("country_name");
  let country_id = localStorage.getItem("country_id");
  let country_iso_code = localStorage.getItem("country_iso_code");
  let governanceId = 1;
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  let [development_name1, setdevelopment_name1] = useState([]);
  let [taxnomy_name1, settaxnomy_name1] = useState([]);
  let [indicator_name1, setindicator_name1] = useState([]);
  let [ultimate_name1, setultimate_name1] = useState([]);
  let [realData1, setrealData1] = useState([]);

  function mydata() {
    var axios = require("axios");
    var data = JSON.stringify({
      countries: `${country_id}`,
      governanceId: `${governanceId}`,
    });
    // console.log(data);

    // return false;

    var config = {
      method: "post",
      url: "http://103.127.29.85:4000/ndhs-master/overview",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        console.log(response.data);
        //var data1 = response.data;
        setData(response.data);
        //mapping(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // function mapping(data) {
  //   development_name1 = [];
  //   taxnomy_name1 = [];
  //   ultimate_name1 = [];
  //   indicator_name1 = [];
  //   console.log("data", data);

  //   for (const [key, val] of Object.entries(data)) {
  //     //development_name.push(key);
  //     development_name1.push(key);
  //     setdevelopment_name1(val);
  //     console.log("111111111111", development_name1);
  //     for (const [key1, val1] of Object.entries(val)) {
  //       taxnomy_name1.push(val1);
  //       settaxnomy_name1(val1);
  //       if (key1 === "Availability") {
  //         //console.log("first", val1);
  //         for (const [key2, val2] of Object.entries(val1)) {
  //           ultimate_name1.push(val2);
  //           setultimate_name1(val2);
  //           //console.log("second", val2);
  //           for (const [key3, val3] of Object.entries(val2)) {
  //             // indicator_name.push(key3);

  //             setindicator_name1(key3);
  //             indicator_name1.push(val3);
  //             for (const [key4, val4] of Object.entries(val3)) {
  //               realData1.push(val4);
  //               setrealData1(val4);
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // //console.log(indicator_name1);
  // {Object.keys(indicator_name1).map((data) => {
  //   //console.log("5464654",data)
  //  })}

  useEffect(() => {
    mydata();
    if (data.length > 0 && !value) setData(data[0]);
    //mapping();
  }, []);

  // console.log(data);
  //console.log("2222222222", ultimate_name1);
  //console.log("333333", ultimate_name1);
  return (
    <>
      <Box>
        {/* {Array.from(data).map((element) => {
          return (
            <div key={element}>
              <h2>{element}</h2>
            </div>
          );
        })} */}
      </Box>
    </>
  );
}

export default Questions;
