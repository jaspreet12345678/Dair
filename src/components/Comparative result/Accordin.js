import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Questions from "../SIdeBar/Question";
const Accordin = () => {
  const [availableData, setAvailableData] = useState();
  useEffect(() => {
    data();
  }, []);

  let scoreFinal = [];
  let isLoading = true;
  let development_name = [];
  let ultimate_name = [];
  let viewDataAvalability = [];
  let taxonomy = [];
  let taxonomy1 = [];
  let ulitimate1 = [];
  let ulitimate2 = [];

  let development_type = [];

  let taxonomy_id;
  let country1 = [];
  let indicator_score = [];
  let valop = [];

  function data() {
    var axios = require("axios");
    var data = {
      countries: "108,110",
      governanceId: 1,
    };

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
        console.log(response.data);
        comaprativeResultMain(response.data, 0);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function comaprativeResultMain(info, data1) {
    console.log(data1);

    let data = [];
    // apiDataService.getComparativeOverview(data).subscribe((result) => {

    var v = [];
    for (const [key, val] of Object.entries(info)) {
      development_type.push(key);
      //   console.log("development_type", development_type);
      v.push(val);
    }
    for (const [key1, val1] of Object.entries(v[0])) {
      ulitimate1.push(key1);
      console.log("ulitimate1", ulitimate1);
      taxonomy.push(val1);
    }
    for (const [key1, val1] of Object.entries(v[1])) {
      ulitimate2.push(key1);
      //   console.log("ulitimate1", ulitimate2);
      taxonomy1.push(val1);
      //  console.log("taxonomy", taxonomy1);
    }
    // myScore(taxonomy);
    // function myScore(taxonomy) {
    //   let jas = taxonomy
    //   console.log("TAXONOMY", jas);
    //   indicator_score = [];
    //   let av = [];
    //   for (const [key1, val1] of Object.entries(taxonomy)) {
    //     let y = val1;
    //     // console.log(y);
    //     // console.log("val1", y);
    //     for (const [key, val] of Object.entries(y)) {
    //       let t = val;
    //       // console.log("val1", t);
    //       for (const [key4, val4] of Object.entries(t)) {
    //         let actual_score1 = 0;
    //         let actual_score2 = 0;
    //         let indicator_score1 = 0;
    //         let indicator_score2 = 0;
    //         let country_percantag1 = 0;
    //         let country_percantag2 = 0;

    //         Object.entries(t).forEach((el) => {
    //           country1 = [];
    //           // console.log(el)
    //           var e = el[1];

    //           Object.entries(el[1]).forEach((elmnt, index) => {
    //             elmnt[1].map((item) => {
    //               // console.log(item.c_name);
    //               taxonomy_id = item.taxonomy_id;
    //               country1.push(item.c_name);
    //               console.log("@@@@@@@@@@@@`", taxonomy_id);
    //               if (index == 0) {
    //                 actual_score1 += item.actual_score;
    //                 indicator_score1 = item.indicator_score;
    //               } else {
    //                 actual_score2 += item.actual_score;
    //                 indicator_score2 = item.indicator_score;
    //               }
    //             });
    //           });
    //         });
    //         country_percantag1 = Math.round(
    //           Math.round((actual_score1 / indicator_score1) * 100) / 20
    //         );
    //         country_percantag2 = Math.round(
    //           Math.round((actual_score2 / indicator_score2) * 100) / 20
    //         );

    //         let score = {
    //           country_1: country1[0],
    //           country_2: country1[1],
    //           indicator_score1: indicator_score1,
    //           actual_score1: actual_score1,
    //           indicator_score2: indicator_score2,
    //           actual_score2: actual_score2,
    //           country_percantag1: country_percantag1,
    //           country_percantag2: country_percantag2,
    //           [key4]: val4,
    //           question: key4,
    //         };
    //         indicator_score.push(score);
    //         // console.log("indicator_score", indicator_score);
    //       }
    //     }
    //   }
    // }
    function myScore(taxonomy) {
      indicator_score = [];
      let av = [];
      for (const [key1, val1] of Object.entries(taxonomy)) {
        let y = val1;
        for (const [key, val] of Object.entries(y)) {
          let t = val;
          for (const [key4, val4] of Object.entries(t)) {
            let actual_score1 = 0;
            let actual_score2 = 0;
            let indicator_score1 = 0;
            let indicator_score2 = 0;
            let country_percantag1 = 0;
            let country_percantag2 = 0;

            Object.entries(t).forEach((el) => {
              country1 = [];
              var e = el[1];
              e.forEach((elmnt, index) => {
                taxonomy_id = elmnt.taxonomy_id;
                country1.push(elmnt.c_name);
                if (index == 0) {
                  actual_score1 += elmnt.actual_score;
                  indicator_score1 = elmnt.indicator_score;
                } else {
                  actual_score2 += elmnt.actual_score;
                  indicator_score2 = elmnt.indicator_score;
                }
              });
            });
            country_percantag1 = Math.round(
              Math.round((actual_score1 / indicator_score1) * 100) / 20
            );
            country_percantag2 = Math.round(
              Math.round((actual_score2 / indicator_score2) * 100) / 20
            );

            let score = {
              country_1: country1[0],
              country_2: country1[1],
              indicator_score1: indicator_score1,
              actual_score1: actual_score1,
              indicator_score2: indicator_score2,
              actual_score2: actual_score2,
              country_percantag1: country_percantag1,
              country_percantag2: country_percantag2,
              [key4]: val4,
              question: key4,
            };
            indicator_score.push(score);
          }
        }
      }
    }

    valop = viewDataAvalability;
    viewDataAvalability = [];
    // console.log(development_type[0]);
    // myScore(10);
    if (data1 == 0) {
      development_name = development_type[0];
      console.log(development_name);
      ultimate_name = ulitimate1[0];
      // viewDataAvalability = taxonomy[0];
      // const jaspreetData = viewDataAvalability.push(taxonomy[0]);
      setAvailableData(taxonomy[0]);
      myScore(taxonomy[0]);
      scoreFinal = indicator_score;
    }

    if (data1 == 1) {
      ultimate_name = ulitimate1[1];
      development_name = development_type[1];
      // viewDataAvalability = taxonomy[1];
      viewDataAvalability.push(taxonomy[1]);
      development_name = development_type[0];
      myScore(taxonomy[1]);
      scoreFinal = indicator_score;
    }

    if (data1 == 3) {
      development_name = development_type[1];
      ultimate_name = ulitimate2[0];
      viewDataAvalability = taxonomy1[0];
      myScore(taxonomy1[0]);
      scoreFinal = indicator_score;
    }

    if (data1 == 4) {
      development_name = development_type[1];
      ultimate_name = ulitimate2[1];
      viewDataAvalability = taxonomy1[1];
      myScore(taxonomy1[1]);
      scoreFinal = indicator_score;
    }

    //   informationReport()
    // })
    // console.log(taxonomy);
  }
  console.log("oo------------------)))))))))", availableData);

  if (availableData) {
    return (
      <>
        {/* {
      console.log("oaaya-----------------@@@",availableData)
    } */}
        {/* {
      availableData.map((data) => {
        console.log(data);
        return <h3 className="student_name">{data}</h3>;
      })} */}
        {/* {Object.entries(availableData)
          .slice(4, 5)
          .map((data) => {
            console.log("=================>>>>", data[1]);
            return (
              <>
                <h1>{data[0]}</h1>
                <div>
                  {Object.entries(data[1])
                    .slice(4, 5)
                    .map((item) => {
                      console.log("=================>>>>", item);
                      return (
                        <>
                          <h1>{item[0]}</h1>
                          <div>
                            {Object.entries(item[1]).map((item1) => {
                              console.log(item1[1]);
                              return (
                                <>
                                  <h1>{item1[0]}</h1>
                                  <div>
                                    {item1[1].map((e) => {
                                      {

                                      }
                                      return <h1>{e.status}</h1>;
                                    })}
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                </div>
              </>
            );
          })} */}

        {/* <Accordion allowToggle>
          {Object.entries(availableData).map((data) => {
            return (
              <>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <h1>{data[0]}</h1>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Accordin allowToggle>
                      {Object.entries(data[1]).map((item) => {
                        return (
                          <>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex="1" textAlign="left">
                                    jaspreet
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                            </AccordionItem>
                          </>
                        );
                      })}
                    </Accordin>
                  </AccordionPanel>
                </AccordionItem>
              </>
            );
          })}
        </Accordion> */}

        <Accordion defaultIndex={[0]} allowToggle>
          {Object.entries(availableData).map((data) => {
            return (
              <>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {data[0]}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Accordion defaultIndex={[0]} allowToggle>
                      {Object.entries(data[1]).map((item) => {
                        return (
                          <>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex="1" textAlign="left">
                                    {item[0]}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                {Object.entries(item[1]).map((item1) => {
                                  console.log(item1[1]);
                                  return <>
                                    <h1>{item[0]}</h1>
                                    <br />
                                  </>;
                                })}

                              </AccordionPanel>
                            </AccordionItem>
                          </>
                        );
                      })}
                    </Accordion>
                  </AccordionPanel>
                </AccordionItem>
              </>
            );
          })}
        </Accordion>
      </>
    );
  }
};

export default Accordin;
