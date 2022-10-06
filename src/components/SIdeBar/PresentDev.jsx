import React from "react";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css"
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Heading } from "@chakra-ui/react";
import { uniqueSort } from "jquery";

function PresentDev(props) {
  let country_flag = localStorage.getItem("country_flag");
  let country_name = localStorage.getItem("country_name");
  let country_id = localStorage.getItem("country_id");
  let country_iso_code = localStorage.getItem("country_iso_code");
  let governanceId = 1;
  let year = localStorage.getItem("year");
  const [getData, setGetData] = useState();
  const [taxnomy_name1, settaxnomy_name1] = useState([]);
  const [indicator_name1, setindicator_name1] = useState([]);
  const [ultimate_name1, setultimate_name1] = useState([]);
  const [realData1, setrealData1] = useState([]);
  let development_name1 = [];
  let axios = require("axios");
  let looprun = [
    "IT Workforce & Infrastructure",
    "IT Governance",
    "Healthcare workforce and Infrastructure",
    "Healthcare Governance",
    "AI Workforce/Infrastructure",
  ];

  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    myData();
    //  mapping(data);
  }, [country_id]);

  let data1 = [];
  function myData() {
    //console.log("####################");

    let data = JSON.stringify({
      countries: `${country_id}`,
      governanceId: `${governanceId}`,
    });

    let config = {
      method: "post",
      url: "http://103.127.29.85:4000/ndhs-master/overview",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
       // console.log("data1@@@@@@@@@@@", response);
        mapping(response.data);
        data1 = response.data;
        //setmydata(response.data);
      })
      .catch(function (error) {
        //console.log(error);
      });
  }

  function mapping(data) {
    console.log("*************", data);

    for (const [key, val] of Object.entries(data)) {
      //development_name.push(key);
      development_name1.push(key);
      for (const [key1, val1] of Object.entries(val)) {
        taxnomy_name1.push(key1);
        if (key1 === "Availability") {
          //console.log("first", val1);
          for (const [key2, val2] of Object.entries(val1)) {
            ultimate_name1.push(key2);
            for (const [key3, val3] of Object.entries(val2)) {
              indicator_name1.push(val3);
              for (const [key4, val4] of Object.entries(val3)) {
                realData1.push(val4);
              }
            }
          }
        }
      }
    }
    setGetData(development_name1);
    settaxnomy_name1(taxnomy_name1);
    setultimate_name1(ultimate_name1);
    setindicator_name1(indicator_name1);
    setrealData1(realData1);
  }

  //console.log("mydat", mydata);
 // console.log("getData$$$$$$$$$$$", getData);
  return (
    <>
      {looprun.map((item1) => {
        return (
          <>
            <Heading>{item1}</Heading>

            <table>
              <>
                <tr>
                  <th>Indicators Name</th>
                  <th>Questions</th>
                  <th>{country_name}</th>
                </tr>

                {realData1.map((data) => {
                  if (item1 === data.taxonomy_name) {
                    //console.log("maindata", data.indicator_name.filter(item));
                    return (
                      <>
                        <tr>
                          {" "}
                          <td>{data.indicator_name}</td>
                          <tr>
                            <td>{data.question}</td>
                          </tr>
                          <td>{data.status}</td>
                        </tr>
                      </>
                    );
                  }
                })}
              </>
            </table>
          </>
        );
      })}
    </>
  );
}

export default PresentDev;
