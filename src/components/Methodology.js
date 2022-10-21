import { Image, Text } from "@chakra-ui/react";
import React from "react";

const Methodology = () => {
  return (
    <>
      <div style={{ width: "1170px", marginLeft: "50px", marginTop: "80px" }}>
        <h3 style={{}}>
          <u>METHODOLOGY</u>{" "}
        </h3>
        <Text>
          The Global Research Map (GRM) is a comprehensive and multi-faceted map
          that provides a clear landscape of Research and Development (R&D)
          activities across different world regions and the state of maturity of
          various National Digital Health Strategies (NDHS). The GRM is a
          powerful tool capable of providing a clear situational awareness to
          countries, regions, Funders and multilateral organisations to
          visualise, analyse and act according to identified gaps and needs in
          different settings. It will provide an inclusive vision that
          explicitly underlines the dual link between the integration of the
          Research and Development landscape in the national digital health
          strategy and the impact of national digital health strategy on the
          evolution of the national research and development outputs.{" "}
        </Text>
        <br />
        <Text>
          This dual benchmarking provides a comprehensive vision that addresses
          both the strategic and the executive levels. The developed GRM brings
          a better clarity to address, in a holistic approach, the full spectrum
          of digital health and AI development from the ground to the policy
          makers. The GRM could provide a floor to discussions in global policy
          bodies. Relevant stakeholders can use it in conjunction with the
          detailed customised report to identify policy and governance gaps in
          AI and digital health for the achievement of universal health care and
          the sustainable development goal (SDG.3). It also helps donors,
          development agencies and Digital health actors to quickly identify
          areas of interest for investment and development.{" "}
        </Text>
        <br />
        <Image src="http://3.95.161.176/assets/images/Ying-&-yong-last-one.jpg" />
        <br />
        <h1>R&D Digital Health Methodolog</h1>
        <Text>
          {" "}
          I-DAIR has developed a taxonomy that is applicable for both
          publications and patents in the digital health field. All attributes
          and classes of interest are grouped in 5 top level categories - type
          of medical device/software, purpose of medical device/software,
          healthcare information technology, healthcare analytics and enabling
          technologies. Each category has at least 5 sub-categories with several
          of them branching into smaller individual classes - for example, there
          are 16 classes in the disease/disorder targeted category within the
          purpose of medical device/software category. The taxonomy currently
          has a total of three tiers. Papers and patents both can belong to
          multiple categories in each tier, making this taxonomy overlapping in
          nature.
          <br />
          <br />
          In order to connect the data points to the geographical (9 regions
          with individual countries), socioeconomic (LMIC or not) and taxonomic
          categories, I-DAIR has partnered with PatSnap. This company takes the
          data from the free available databases of patents and publications,
          structures and cleans it using manual curation and proprietary AI. The
          added semantic layer is added to select a subset of 142 million data
          points and connect them to I-DAIR’s taxonomy and dashboards.{" "}
        </Text>
        <br />
        <br />
        <h1>NDHS maturity benchmarking</h1>
        <Text>
          I-DAIR structured the digital health strategy as a dual problem - on
          one side, it is affected by the individual state of IT and Healthcare,
          and the joint digital health on the other. Further on, by recognizing
          that the present state should be considered separately from the
          prospective development, I-DAIR defined a number of indicators in both
          the present and the future states. Present indicators are evaluated
          according to availability and readiness, while the future ones are
          evaluated for development strategy and capacity building. Each of
          these individual evaluations are performed through a number of yes/no
          questions translating to different scores and yielding a total score
          from 0-100 for each indicator aspect. The questions belonging to an
          indicator aspect are frequently scored with groups of chained value
          logic - if the first (main) question in a group is negative, no others
          can be answered. For example, in the Healthcare Governance
          Availability indicator there is a group of 4 questions concerning
          Health Insurance for Citizens and offering a maximum of 25 points.
          Answering “no” to the question “Is there a Federal Health Insurance
          Fund Available?” gives 0 score for the group, while answering “yes”
          contributes 6 points and unlocks additional questions like “Is the
          Health Insurance Available only to low income group/elderly people?”
          and others.{" "}
        </Text>
        <br />
        <Text>
          The taxonomy classes for each country were populated in a
          collaboration between I-DAIR and Xlpat. Online sources of information
          were researched and all the questions were answered with “yes”, “no”
          or “no data available” if the online search didn’t provide results. At
          this point the latter category is treated as a negative answer
          regarding the score, but is open to additional research.{" "}
        </Text>
        <br />
        <Text>
          All the results are grouped per country into two groups taken as axes
          for the new digital strategy world map - present and future
          development, each with its own indicators. An appropriate simple
          similarity measure is used to quantify the level of agreement between
          individual countries, and are then clustered according to it into 6
          groups (“continents”) which represent countries with similar levels of
          present and future development, thus enabling comparison and
          systematic review of healthcare systems and possible improvements.
        </Text>
        <br />
        <br />
        <Image src="http://3.95.161.176/assets/images/rd-landscape-web-tool.jpg" />
        <h1 style={{ textAlign: "center" }}>
          Fig.2: The National digital health Map{" "}
        </h1>
        <br />
        <br />
        <Image src="http://3.95.161.176/assets/images/ndh-map.jpg" />
        <h1 style={{ textAlign: "center" }}>
          Fig.2: The National digital health Map{" "}
        </h1>
      </div>
    </>
  );
};

export default Methodology;
