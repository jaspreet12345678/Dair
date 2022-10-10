import { Box, Flex, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Progress } from "@chakra-ui/react";

const ProgressBar = () => {
  const [finaldata, setfinaldata] = useState();
  const [data, setmyData] = useState([]);

  useEffect(() => {
    myData();
  }, []);

  async function myData() {
    var axios = require("axios");
    var data = {
      countries: "106,108",
      developmentId: 1,
      governanceId: 2,
      // taxonomyId: 10,
      ultimateId: 1,
    };
    var config = {
      method: "post",
      url: "http://103.127.29.85:4000/ndhs-master/comparative-information",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        // console.log(response.data);
        setmyData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // function chunkArray(data,n){
  //      var chunkLength = Math.max(data.length/n ,1);
  //      var chunks = [];
  //      for (var i = 0; i < n; i++) {
  //          if(chunkLength*(i+1)<=data.length)chunks.push(data.slice(chunkLength*i, chunkLength*(i+1)));
  //      }
  //      return chunks;
  //  }

  let array = [];
  let uni = [];
  for (var i = 0; i <= data.length - 1; i++) {
    if (!uni.includes(data[i].taxonomy)) {
      uni.push(data[i].taxonomy);
    }
  }

  for (var j = 0; j < uni.length; j++) {
    var a = {};
    const my = data.filter((item) => {
      if (item.taxonomy === uni[j]) {
        return item;
      }
    });
    a["title"] = uni[j];
    a["data"] = my;
    array.push(a);
  }
  console.log("aa", array);

  // setfinaldata(array);

  return (
    <>
      <div style={{}}>
        <Box style={{ width: "30.33333333%",padding:"10px" ,marginLeft: "10px", marginTop: "10px",border:"1px solid black" }}>
          <HStack>
            <Flex
              style={{
                width: "-webkit-fill-available",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Flex>
                <Text>Information Report</Text>
              </Flex>
              <Spacer />
              <Flex>
                <Text>Readiness</Text>
              </Flex>
            </Flex>
          </HStack>
          <Flex
            style={{
              width: "-webkit-fill-available",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Text>Iran</Text>
            <Text style={{ marginLeft: "10px" }}>Italy</Text>
          </Flex>
          {array?.map((e, key) => {
            return (
              <>
                <Text>{e.title}</Text>
                {e?.data.map((b) => {
                  return (
                    <>
                      <h5>{b.country}</h5>
                      <Progress style={{ marginTop: "5px" }} value={b.score} />
                    </>
                  );
                })}
              </>
            );
          })}
        </Box>
      </div>
      {/* {array?.map((e) => {
        return (
          <>
            <h1>{e.title}</h1>
            <h1>sub country</h1>
            {e?.data.map((b) => {
              return (
                <>
                  <h5>{b.country}</h5>
                  <Progress style={{ marginTop: "5px" }} value={b.score} />
                </>
              );
            })}
          </>
        );
      })} */}
    </>
  );
};

export default ProgressBar;
