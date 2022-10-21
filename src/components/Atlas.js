import { Box, Image } from "@chakra-ui/react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Atlas.css"

const Atlas = () => {
  return (
    <Box>
      <div class="w-100">
        <section class="advance-digital atlas">
          <div class="container">
            <h3 style={{textAlign:"start"}}>
              <strong > TABLE OF CONTENTS </strong>
            </h3>
            <br  />
            <hr />
            <br  />
            <ul>
                <li style={{textAlign:"start"}}><a href="#research-and-findings">1- Research and Development Findings</a></li>
                <li style={{textAlign:"start"}}><a href="#national-digital-health-strategy">2- National Digital Health Strategy
                        Findings</a></li>
            </ul><br /><br /><br />
            <section id="research-and-findings">
                <div class="
    container-fluid
    research-and-findings
    d-flex
    flex-row
    align-items-center
  ">
                    <div>
                        <h2><span
                                style={{"letter-spacing": "-0.9rem", "margin-left": "4rem", "margin-right": "4rem", "font-size": "6rem","font-family": "fivo-sans"}}>1.</span>Research
                            and Development Findings </h2>
                    </div>
                </div>
            </section><br />
            <h5><strong> 1.1- Overview </strong></h5>
            <p> Publications in the world have an exponential growth with the predominance of disorder/disease subject.
                Still, it is interesting to see that the number of patents in this group is a bit smaller than the
                number of patents in the therapy/diagnostics group which is the second group according to the number of
                publications. In numbers, diagnostics/therapy has approximately two papers per patent, while the
                disorder disease has 8 papers per patent when summing across all the years. On average, one patent
                follows every four publications overall. Interestingly enough, LMIC constitutes less than one third of
                research publications but over one half of patents. Both categories are mostly in the EMR/EHR and
                diagnostics/therapeutics areas. USA and Chinese universities predominate in the publication world. </p>
            <div class="row">
                <div class="col-md-12 images"><Image
                        src="/images-1/images/subject-of-publication-trends-evolution.jpg"
                        alt="Publication Subject Trends" class="img-fluid center-block d-block mx-auto has-border"
                        style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> Publication Subject Trends </div>
            </div><br />
            <div class="row">
                <div class="col-md-6">
                    <div class="col-md-12 images"><img src="/images-1/images/img14.jpg"
                            alt="Distribution of Patent by Country and by Region"
                            class="img-fluid center-block d-block mx-auto" style={{"max-width": "80%"}}/></div>
                    <div class="col text-center figure-title"> Distribution of Patent by Country and by Region </div>
                </div>
                <div class="col-md-6">
                    <div class="col-md-12 images"><img src="/images-1/images/img15.jpg"
                            alt="Distribution of Publication by Country and by Region"
                            class="img-fluid center-block d-block mx-auto" style={{"max-width": "80%"}}/></div>
                    <div class="col text-center figure-title"> Distribution of Patent by Country and by Region </div>
                </div>
            </div><br /><br />
            <h5><strong> 1.2- SADC and East Africa (SADC-EA)</strong></h5>
            <p> Compared to the global trends, SADC-EA doesn’t have the gradually exponential growth of publications.
                After a period of stagnation from the beginning of the collection period (2011) until 2018 there is a
                constant number of publications, and then there is a marked jump consisting mostly of disease/disorder
                targeted publications. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/img1.jpg"
                        alt=" SADC-EA Publications Subject Trend" class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%" }}/></div>
                <div class="col text-center figure-title"> SADC-EA Publications Subject Trends </div>
                <div class="col-md-12 images"><img  src="/images-1/images/img2.jpg"
                        alt="SADC-EA R&amp;D domain evolution" class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%" }}/></div>
                <div class="col text-center figure-title"> SADC-EA R&amp;D Domain Evolution </div>
            </div><br />
            <p> South Africa is by far the biggest local contributor to the research and development landscape. Out of
                12 largest university contributors, 10 are located in South Africa (the remaining two being in Ethiopia
                and Zimbabwe) - note that some multinational organizations have their br /anches in South Africa. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/top-assignees_1.jpg"
                        alt="SADC-EA Major Actors" class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title">SADC-EA Major Actors</div>
            </div><br />
            <p> 3 out of 4 approved patents are from there, in the areas of disease/disorder and
                diagnostics/therapeutics. Note that there aren’t any patents in EHR and information, contrary to the
                world trend, but this is likely due to the small number of overall patents. </p>
            <div class="row">
                <div class="col-md-12 images"><img 
                        src="/images-1/images/SADC-EA-Trends-in-patents.jpg" alt="SADC-EA Trends in patents"
                        class="img-fluid center-block d-block mx-auto has-border" style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> SADC-EA Trends in Patents </div>
            </div><br />
            <h5><strong> 1.3- Africa Central and West Africa</strong></h5>
            <p> This region has a relatively small number of publications (0.17% of Global) and only 2 patents, both in
                Sudan. Interestingly enough, the country with over 70% of publications is a different one - Nigeria,
                originating from many of the countrys universities. Top publishing universities in Sudan are Khartoum
                and Sudan universities. </p>
            <div class="row">
                <div class="col-md-12 images"><img src="/images-1/images/top-assignees_2.jpg"
                        alt="AC-WA Major Actors " class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%"}} /></div>
                <div class="col text-center figure-title">AC-WA Major Actors</div>
            </div><br />
            <p> Recent increase in the number in the disease/disorder targeted papers started in 2018. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/img6.jpg"
                        alt="AC-WA Publications Subject Trend" class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> AC-WA Publications Subject Trend </div>
            </div><br />
            <h5><strong> 1.4- MENA</strong></h5>
            <p> Looking at publications, the exponential growth seems to mimic the global one. Still, the patents are
                not following the publications like on a global scale - patent/publication ratio is around 4 times
                smaller. This is even more prominent for the LMIC, which holds a total of 6 patents and 1304
                publications. </p>
            <div class="row">
                <div class="col-md-12 images"><img src="/images-1/images/top-assignees_3.jpg"
                        alt="MENA Major Actors" class="img-fluid center-block d-block mx-auto" style={{"max-width": "80%"}}/>
                </div>
                <div class="col text-center figure-title">MENA Major Actors</div>
            </div><br />
            <p> General sparsity of patents across the region leads to a notable majority (89.07%) being held by Israel.
                A third of all publications come from Iran, with the Islamic Azad University being the most fruitful in
                the region. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/Capture4.jpg"
                        alt="MENA Translational Research Overview " class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> MENA Translational Research Overview </div>
            </div><br />
            <h5><strong>1.5- Asia Central and East Asia</strong></h5>
            <p> This region excels in translational research, as the number of patents (16,220) nearly reaches the
                number of publications (20824). </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/top-assignees_4.jpg"
                        alt="AC-EA Major Actors" class="img-fluid center-block d-block mx-auto" style={{"max-width": "80%"}}/>
                </div>
                <div class="col text-center figure-title">AC-EA Major Actors</div>
            </div><br />
            <p> Apart from disease/disorder groups, the number of patents in individual groups even exceeds the number
                of papers. It is of note that in the Electronic Medical/Health Records group there are three times more
                patents than publications. </p>
            <div class="row">
                <div class="col-md-12 images"><img src="/images-1/images/img13.jpg" alt=""
                        class="img-fluid center-block d-block mx-auto" style={{"max-width": "90%"}}/></div>
                <div class="col text-center figure-title"> AC-EA Translational Research Overview </div>
            </div><br />
            <p> China is the regional leader in both types of research, the largest source of patents globally (47.32%)
                and the second largest source of publications (14.82%). Outside of China, one should mention the
                universities in Tokyo and Seoul. </p><br />
            <h5><strong>1.6- Asia Southeast, South, West and Australasia</strong></h5>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/top-assignees_5.jpg"
                        alt="" class="img-fluid center-block d-block mx-auto" style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> ASE-SWA Asia Translational Research Overview </div>
            </div><br />
            <p> In this region the leader of both patents and publications is India, but the translation of research is
                under the global average - one patent comes for every 14 publications, with no difference in ratio
                between LMIC and others. </p>
            <p> Interestingly, top universities from this region according to the amount of research come from Australia
                and Singapore, showing that India contributes with a large amount of smaller universities. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/img-1.jpg" alt=""
                        class="img-fluid center-block d-block mx-auto" style={{"max-width": "90%"}} /></div>
                <div class="col text-center figure-title"> ASE-SWA Asia R&amp;D Domain Evolution </div>
            </div><br />
            <h5><strong>1.7- North America</strong></h5>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/top-assignees_6.jpg"
                        alt="" class="img-fluid center-block d-block mx-auto" style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> North America Major Actors </div>
            </div><br />
            <p> This region is dominated by the USA in both types of research - globally, it has the highest number of
                publications (24.74%) and second highest number of patents (23.48%). Translational trends follow the
                global ones. </p>
            <p> There is very little contribution from the LMIC, solely in the publication part. Largest amount of
                research comes from the University of California, followed by some Ivy League schools. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/img-2.jpg" alt=""
                        class="img-fluid center-block d-block mx-auto" style={{"max-width": "90%"}}/></div>
                <div class="col text-center figure-title"> North America R&amp;D Domain Evolution </div>
            </div><br />
            <h5><strong> 1.8- Latin America and the Caribbean </strong></h5>
            <div class="row">
                <div class="col-md-12 images"><img src="/images-1/images/top-assignees_7.jpg"
                        alt="" class="img-fluid center-block d-block mx-auto" style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title">LAC Major Actors</div>
            </div><br />
            <p> This region is dominated by the patents from Columbia (39%) and publications from Br /azil (61.93%), but
                both have relatively small global contributions. </p>
            <p> Translation of research is on the low side, one patent for every 9 publications. Proportion of LMIC
                contributions is very small in both areas of research. Research is mostly generated by the universities
                in São Paulo. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/img-3.jpg" alt=""
                        class="img-fluid center-block d-block mx-auto has-border" style={{"max-width": "90%"}}/></div>
                <div class="col text-center figure-title"> LAC Translational Research Overview </div>
            </div><br />
            <h5><strong> 1.9- South, North and West Europe</strong></h5>
            <p> Publications per year follow the global trend, but translation of research is lower, one patent for
                every 9 publications. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/img28.jpg"
                        alt="SNW Europe Publications Trends" class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> SNW Europe Publications Trends </div>
            </div><br />
            <p> Most publications come from the UK and its leading universities, while most patents come from Germany.
                There are important contributions from Swiss universities as well. Interestingly enough, the most
                research from an individual university comes from the Philips university in Cyprus. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/top-assignees_8.jpg"
                        alt="SNW Europe Major Actors" class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> SNW Europe Major Actors </div>
            </div><br />
            <h5><strong> 1.10- Eastern Europe and Russia</strong></h5>
            <p> The Russian Federation is the clear leader in providing research in both patent (69.34%) and publication
                (28.14%) areas. </p>
            <p> In addition to Russian universities, one can notice Polish and universities from ex-Yugoslav republics.
                Still, the global contribution is very small. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/top-assignees_9.jpg"
                        alt="" class="img-fluid center-block d-block mx-auto" style={{"max-width": "80%"}}/></div>
                <div class="col text-center figure-title"> EE Russia Major Actors </div>
            </div><br />
            <p> This region has the largest proportion of granted patents (70%). </p>
            <p> Translation is on the low side (a patent for 11 publications). LMIC contribution is moderate. </p>
            <div class="row">
                <div class="col-md-12 images"><img  src="/images-1/images/img-4.jpg" alt=""
                        class="img-fluid center-block d-block mx-auto has-border" style={{"max-width": "90%"}}/></div>
                <div class="col text-center figure-title"> EE Russia Translational Research Overview </div>
            </div><br /><br />
            <section id="national-digital-health-strategy">
                <div class="
    container-fluid
    national-digital-health-strategy
    d-flex
    flex-row
    align-items-center
  ">
                    <h2><span
                            style={{"letter-spacing": "-0.9rem", "margin-left": "4rem", "margin-right": "4rem", "font-size": "6rem", "font-family": "fivo-sans"}}>2 .</span>National
                        Digital Health Strategy Finding </h2>
                </div>
            </section><br />
            <p> GRM uses the original methodology to map the individual country to a 2D-model showing the present and
                future development. The new national digital health strategy (NDHS) maps groups the countries into 6 new
                continents according to the development distance, and facilitates comparison of policies, metrics and
                solutions. There is generally a strong positive correlation between current and future development. Four
                continents essentially lie on the line connecting the same values on both axes, showing an incremental
                growth of development for both the present and the future. One continent has a higher future readiness
                compared to their current situation, while another continent has invested more into the current
                readiness than the future one. </p><br />
            <h5><strong>2.1- Low balanced continent</strong></h5>
            <p> The low balanced continent encompasses two countries which are below 50 percent on both accounts -
                Bangladesh and Columbia. The present values of these two countries are marked by a very low availability
                in several categories of digital health (DH) - workforce, Funding &amp; Research and literacy. These
                values are followed by medium or even high readiness levels, providing a clear action point. In general,
                other categories in DH and Health &amp; IT present overviews are mediocre. <br /> The prospective
                development values of Bangladesh and Colombia diverge, and Bangladesh has around 20 points more on the
                scale. The biggest difference is in the DH prospective development where Columbia has very low values in
                almost all categories, primarily due to the values not being available in almost all the categories.
                Even so, this whole continent suffers from similar low data availability for prospective development.
            </p><br />
            <h5><strong>2.2- Medium balanced continent </strong></h5>
            <p> Both present and future development are marked by overall medium values. Br /azil and Saudi Arabia have a
                very low funding &amp; research availability at present, while Israel is very good in that aspect.
                Although for Saudi Arabia and Israel the prospective development of literacy is the worst overall
                category, all three countries have a very low capacity building for it. That being said, capacity
                building seems to lag behind the development strategy for multiple future development categories and all
                the countries. </p><br />
            <h5><strong>2.3- Medium high balanced continent</strong></h5>
            <p> Tee countries in this group have both their present and future development scores close to 70, thus
                having a balanced present and future development. <br /> The present development is medium or better in
                all the Health &amp; IT categories. DH is solid but seems to be problematic for all three countries in
                the Workforce and Literacy categories, with the availability being worse than readiness. <br /> Future
                development for Health &amp; IT in all three countries is medium or better in all categories. For DH,
                all three countries lack the capacity for literacy. New Zealand lacks the capacity building for legal
                rules as well. UAE and New Zealand have exceptionally good IT governance and Funding &amp; Research.
            </p><br />
            <h5><strong>2.4- High balanced continent</strong></h5>
            <p> 5 countries in this group (India, Austria, Australia, UK, USA) score very well in all the Health &amp;
                IT categories, and mostly well in all the DH categories in both the present and the future. Most of them
                have missing data in literacy causing occasional bad scores. </p><br />
            <h5><strong>2.5- Present high continent</strong></h5>
            <p> Diverging from the line of balanced present and future development scores, these 5 countries (Denmark,
                Canada, Singapore, Japan, Switzerland) showcase a present development score better than the future one.
                Most present categories are exceptionally good, apart from the workforce which is ranging from poor to
                moderate. Conversely, future development scores range from medium to good, with some cases of bad scores
                e.g. literacy for all, workforce for Japan and Denmark. </p><br />
            <h5><strong>2.6- Future high continent </strong></h5>
            <p> Rwanda, Fiji, Mauritius and South Africa have a prospective development above the current development
                level. Most indicators for the present development are medium or better, with the workforce in DH being
                below average and problematic literacy. On the other hand, the future development looks br /ight - medium
                to good scores in most categories, and an overall tendency of improvement from the current scores. </p>
            <br />
            <div class="row">
                <div class="col-md-12 images"><img src="/images-1/images/cluster-map.jpg"
                        alt="The Digital Health World Map" class="img-fluid center-block d-block mx-auto"
                        style={{"max-width": "80%"}}/></div>
                <div class="col-md-12 caption text-center blod figure-title"> The Digital Health World Map </div>
            </div>
          </div>
        </section>
      </div>
    </Box>
  );
};

export default Atlas;
