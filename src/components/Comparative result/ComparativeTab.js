import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Divider, Flex, Text, VStack } from "@chakra-ui/react";
import ComparativeMap from "./map2";

const ComparativeTab = () => {
  const [countryData, setcountryData] = useState();
  let finalData = [];
  useEffect(() => {
    data();
  }, []);

  function data() {
    var axios = require("axios");
    var data = {
      countries: "36,103",
      developmentId: "1,2",
    };

    var config = {
      method: "post",
      url: "http://103.127.29.85:4000/ndhs-master/comparative",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //     console.log(response.data);
        comparative(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function comparative(result) {
    let AvailabilityData = [];
    let ReadinessData = [];
    let CapacityData = [];
    let DevelopmentData = [];
    var a = [];
    var b = [];
    // console.log("result", result);
    const presentDevelopment = result.filter((item) => {
      if (
        item.development_type === "Present Development" &&
        item.ultimate_field === "Availability"
      ) {
        AvailabilityData.push(item);
      }
      if (
        item.development_type === "Present Development" &&
        item.ultimate_field === "Readiness"
      ) {
        ReadinessData.push(item);
      }
    });

    a.push(
      {
        ultimate_field: "Availability",
        data: AvailabilityData,
      },
      {
        ultimate_field: "Readiness",
        data: ReadinessData,
      }
    );

    finalData.push({
      development_type: "Present Development",
      subData: a,
    });
    const prospectiveDevelopment = result.filter((element) => {
      if (
        element.development_type === "Prospective Development" &&
        element.ultimate_field === "Capacity Building"
      ) {
        CapacityData.push(element);
      }
      if (
        element.development_type === "Prospective Development" &&
        element.ultimate_field === "Development Strategy"
      ) {
        DevelopmentData.push(element);
      }
    });
    b.push(
      {
        ultimate_field: "Capacity Building",
        data: CapacityData,
      },
      {
        ultimate_field: "Development Strategy",
        data: DevelopmentData,
      }
    );
    finalData.push({
      development_type: "Prospective Development",
      subData: b,
    });

    console.log("finalData", finalData);
    setcountryData(finalData);
  }

  return (
    <>
      <div
        style={{
          width: "440px",
          boxShadow: "0 0 9px 0 black",
          marginLeft: "20px",
          marginTop: "20px",
          padding: "15px",
          borderRadius: "25px",
        }}
      >
        <div>
          <button
            style={{
              float: "right",
              color: "lightskyblue",
              border: "1px solid lightskyblue",
              padding: "1px",
            }}
          >
            More Details
          </button>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <h1 style={{ textAlign: "left", marginTop: "5px" }}>
              Comparative Table
            </h1>
            <div>
              <h1>Country 1</h1>
              <h1>Country 2</h1>
            </div>
          </div>
          {/* <br /> */}
          <Flex
            style={{
              display: "flex",
              width: "-webkit-fill-available",
              justifyContent: "flex-end",
              marginTop: "5px",
            }}
          >
            <Text>Health & IT</Text>
            <Text style={{ marginLeft: "13px" }}>Digital Health</Text>
          </Flex>
          <Divider />
          {countryData?.map((item) => {
            console.log("item", item.development_type);
            return (
              <>
                <h1
                  style={{
                    textAlign: "initial",
                    color: "black",
                    marginTop: "12px",
                  }}
                >
                  {item.development_type}
                </h1>
                <br />
                <br />
                <Divider />
                <p>
                  {item.subData?.map((e) => {
                    return (
                      <>
                        <div style={{ display: "flex", marginTop: "10px" }}>
                          <h5 style={{ width: "200px" }}>{e.ultimate_field}</h5>
                          <span
                            style={{
                              display: "flex",
                              marginLeft: "30px",
                              width: "50px",
                            }}
                          >
                            {e.data?.map((score) => {
                              console.log(score.governance_name);
                              if (score.governance_name === "General Health") {
                                const col =
                                  score.country === "Canada" ? "green" : "red";
                                return (
                                  <p
                                    style={{
                                      color: col,
                                      marginLeft: "5px",
                                    }}
                                  >
                                    {Math.round(score.percentage) + "%"}
                                  </p>
                                );
                              }
                            })}
                          </span>
                          <span style={{ display: "flex", marginLeft: "40px" }}>
                            {e.data?.map((score) => {
                              console.log(score.governance_name);
                              if (score.governance_name === "Digital Health") {
                                const col =
                                  score.country === "Canada" ? "green" : "red";
                                return (
                                  <p
                                    style={{
                                      color: col,
                                      marginLeft: "5px",
                                    }}
                                  >
                                    {Math.round(score.percentage) + "%"}
                                  </p>
                                );
                              }
                            })}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </p>
                <Divider />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComparativeTab;
