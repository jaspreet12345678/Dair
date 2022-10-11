import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Questions from '../SIdeBar/Question';
const Accordin = () => {
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
  useEffect(() => {
    data();
  }, []);

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
        comaprativeResultMain(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function comaprativeResultMain(data1) {
    let data = [];
    // apiDataService.getComparativeOverview(data).subscribe((result) => {

    var v = [];
    for (const [key, val] of Object.entries(data1)) {
      development_type.push(key);
      //   console.log("development_type", development_type);
      v.push(val);
    }
    for (const [key1, val1] of Object.entries(v[0])) {
      ulitimate1.push(key1);
      //   console.log("ulitimate1", ulitimate1);
      taxonomy.push(val1);
        // console.log("taxonomy", taxonomy);
    }
    for (const [key1, val1] of Object.entries(v[1])) {
      ulitimate2.push(key1);
      //   console.log("ulitimate1", ulitimate2);
      taxonomy1.push(val1);
      //  console.log("taxonomy", taxonomy1);
    }
    myScore(taxonomy);
    function myScore(taxonomy) {
      //console.log("TAXONOMY", taxonomy);
      indicator_score = [];
      let av = [];
      for (const [key1, val1] of Object.entries(taxonomy)) {
        let y = val1;
        console.log(y)
        // console.log("val1", y);
        for (const [key, val] of Object.entries(y)) {
          let t = val;
            // console.log("val1", t);
          for (const [key4, val4] of Object.entries(t)) {
            let actual_score1 = 0;
            let actual_score2 = 0;
            let indicator_score1 = 0;
            let indicator_score2 = 0;
            let country_percantag1 = 0;
            let country_percantag2 = 0;

            Object.entries(t).forEach((el) => {
              country1 = [];
              // console.log(el)
              var e = el[1];

              Object.entries(el[1]).forEach((elmnt, index) => {
                elmnt[1].map((item) => {
                  // console.log(item.c_name);
                  taxonomy_id = item.taxonomy_id;
                  country1.push(item.c_name);
                  console.log("@@@@@@@@@@@@`", taxonomy_id);
                  if (index == 0) {
                    actual_score1 += item.actual_score;
                    indicator_score1 = item.indicator_score;
                  } else {
                    actual_score2 += item.actual_score;
                    indicator_score2 = item.indicator_score;
                  }
                });
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
            console.log("indicator_score", indicator_score);
          }
        }
      }
    }

    console.log(development_type[0]);
    // myScore(10);
    if (data1 == 1) {
      development_name = development_type[0];
      console.log(development_name);
      ultimate_name = ulitimate1[0];
      viewDataAvalability = taxonomy[0];
      myScore(taxonomy[0]);
      scoreFinal = indicator_score;
    }
    if (data1 == 2) {
      ultimate_name = ulitimate1[1];
      viewDataAvalability = taxonomy[1];
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
  }
// console.log(taxonomy)

  return (
    <>
   
      {/* <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
            <Box flex="1" textAlign="left">
                      Section 1 title
                    </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion allowToggle>
              <AccordionItem style={{ border: "none" }}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={{ border: "none" }}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={{ border: "none" }}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={{ border: "none" }}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion> */}

      {/* <div id="container">
            <div class="list" id="one">
                <div class="data-vertical-label">
                    <h3>Indicators</h3>
                    <h3>Comparison</h3>
                </div>
                <div class="loading" >
                    <div class="spinner"></div>
                </div>
                <mat-accordion>
                    <ng-container *ngFor="let taxonomy_key of objectKeys(viewDataAvalability)">
                        <mat-expansion-panel hideToggle>
                            <mat-expansion-panel-header>
                                <mat-panel-title>
                                    {{taxonomy_key}}
                                </mat-panel-title>
                                <mat-panel-description>
                                    <mat-icon>arrow_drop_down</mat-icon>
                                </mat-panel-description>
                            </mat-expansion-panel-header>
                            <div class="accordion-content">
                                <div class="content-row"
                                    *ngFor="let indicator_key of objectKeys(viewDataAvalability[taxonomy_key])">
                                    <mat-accordion>
                                        <div class="content-inner">
                                            <mat-expansion-panel hideToggle>
                                                <mat-expansion-panel-header>
                                                    <div class="left-content col-md-7">
                                                        <mat-panel-title>
                                                            {{indicator_key}}
                                                        </mat-panel-title>
                                                    </div>
                                                    <div class="right-content col-md-5" 
                                                        *ngFor="let question of objectKeys(viewDataAvalability[taxonomy_key][indicator_key]); let i = index">

                                                        <div
                                                            *ngFor="let country of scoreFinal">
                                                            <div class="country-1"
                                                                *ngIf="mapCountryData.length == 2">
                                                                <Span *ngIf="question == country.question" >
                                                                    {{country.country_1}}
                                                                    <mat-icon>arrow_drop_up
                                                                    </mat-icon>
                                                                </Span>
                                                                <div class="rating"
                                                                    *ngIf="question == country.question">
                                                                    <ng-container
                                                                        *ngFor="let dash of dash_array;">
                                                                        <span class="green"
                                                                            *ngIf="dash <= country.country_percantag1; else val">
                                                                        </span>
                                                                        <ng-template #val>
                                                                            <span
                                                                                class="gray"></span>
                                                                        </ng-template>
                                                                    </ng-container>
                                                                </div>
                                                                <Span *ngIf="question == country.question">
                                                                    {{country.country_2}}
                                                                    <mat-icon>arrow_drop_up
                                                                    </mat-icon>
                                                                </Span>
                                                                <div class="rating" style="padding-right: 160px;"
                                                                    *ngIf="question == country.question">
                                                                    <ng-container
                                                                        *ngFor="let dash of dash_array;">
                                                                        <span class="blue"
                                                                            *ngIf="dash <= country.country_percantag2; else val ">
                                                                        </span>
                                                                        <ng-template #val>
                                                                            <span
                                                                                class="gray"></span>
                                                                        </ng-template>
                                                                    </ng-container>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <mat-panel-description>
                                                        <mat-icon>arrow_drop_down</mat-icon>
                                                    </mat-panel-description>
                                                </mat-expansion-panel-header>
                                                <div class="content-row"
                                                    *ngFor="let question of objectKeys(viewDataAvalability[taxonomy_key][indicator_key])">
                                                    <div class="query-right-content col-md-12">
                                                        <div class="query-name col-md-6">

                                                            {{question}}
                                                        </div>
                                                        <div
                                                            *ngFor="let status of viewDataAvalability[taxonomy_key][indicator_key][question]">

                                                            <div class="country-1 col-md-3">
                                                                <div class="rating">
                                                                    <span
                                                                        *ngIf="status.status == 'Yes'"
                                                                        class="green success"></span>
                                                                    <span
                                                                        *ngIf="status.status == 'No'"
                                                                        class="alert-red danger"></span>
                                                                    <span
                                                                        *ngIf="status.status == 'Data not available'"
                                                                        class="gray disable-status"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </mat-expansion-panel>
                                        </div>
                                    </mat-accordion>
                                </div>
                            </div>
                        </mat-expansion-panel>
                    </ng-container>
                </mat-accordion>
            </div>
        </div>
    </div> */}
    </>
  );
};

export default Accordin;
