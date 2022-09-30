import React from "react";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css"
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Heading } from "@chakra-ui/react";
import { uniqueSort } from "jquery";

function ProspectiveDev(props) {
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
  const [data, setData] = useState();
  var finalData = [];
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
  let temindicator = [];
  useEffect(() => {
    myData();
    //  mapping(data);
  }, [country_id]);

  let data1 = [];
  function myData() {
    console.log("####################");

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
        console.log("data1@@@@@@@@@@@", response);
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
        if (key1 === "Readiness") {
          //console.log("first", val1);
          for (const [key2, val2] of Object.entries(val1)) {
            ultimate_name1.push(key2);
            for (const [key3, val3] of Object.entries(val2)) {
              indicator_name1.push(key3);
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

    for (var i = 0; i < indicator_name1.length; i++) {
      const inValue = realData1.filter((e) => {
        if (e.indicator_name === indicator_name1[i]) {
          return e;
        }
      });

      finalData.push({
        indecatorName: indicator_name1[i],
        indecatorValue: inValue,
      });
    }

    setData(finalData);
    console.log("indi", finalData);
  }

  return (
    <>
      {data?.map((item1) => {
        //15
        return (
          <>
            {/* <Heading>{item1.indecatorName}</Heading> */}

            <table>
              <>
                <tr>
                  <th>Indicators Name</th>
                  <th>Questions</th>
                  <th>{country_name}</th>
                </tr>
            <tr>
                <td>{item1.indecatorName}</td>
                {item1.indecatorValue.map((data) => {
                  return (
                    <>
                      <tr>
                        <td>
                        <tr>
                        {data.question}
                        </tr></td>
                        <td>{data.status}</td>
                      </tr>
                    </>
                  );
                })}
              </tr>
              </>
            </table>
          </>
        );
      })}
    </>
  );
}

export default ProspectiveDev;
