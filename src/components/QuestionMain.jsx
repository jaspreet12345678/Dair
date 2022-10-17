import React from "react";
import Footer from "./Footer";
import Header from "./Header1";
import PresentDev from "./SIdeBar/Questions/PresentDevelopment/HealthReadiness";
import ProspectiveDev from "./SIdeBar/Questions/PresentDevelopment/HealthAvailability";

const Ques = () => {
  return (
    <>
      <Header />
      <PresentDev />
      <ProspectiveDev />
      <Footer />
    </>
  );
};

export default Ques;
