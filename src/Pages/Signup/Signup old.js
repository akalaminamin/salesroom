import React from "react";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
import CompanyAddress from "./components/CompanyAddress";
import CompanyLogoWebsite from "./components/CompanyLogoWebsite";
import EnterOTP from "./components/EnterOTP old";
import EnterPassword from "./components/EnterPassword";
import NameYourRoom from "./components/NameYourRoom";
import SalesroomToWork from "./components/SalesroomToWork";
import SocialMediaLink from "./components/SocialMediaLinks";

import WorkEmail from "./components/WorkEmail";

var url = window.location.href;

const Signup = ({ provideEmail }) => {
  const step0Content = <h1>11</h1>;
  const step1Content = <WorkEmail />;
  const step2Content = <EnterOTP />;
  const step3Content = <EnterPassword  />;
  const step4Content = <NameYourRoom />;
  const step5Content = <CompanyLogoWebsite />;
  const step6Content = <CompanyAddress />;
  const step7Content = <SalesroomToWork/>;
  const step8Content = <SocialMediaLink />;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }
  return (
    <div className="bg-[#ecedf0] signup">
      <div className="grid grid-cols-1  h-screen">
        <div className="header flex justify-center h-fit">
          <h1 className="text-[#174fba] font-bold py-3 text-6xl">Salesroom</h1>
        </div>
        <div className="min-h-[84vh]">
          <StepProgressBar
            // progressclassName="progressClass"
            startingStep={1}
            nextBtnName="Done"
            submitBtnName="Done"
            // onSubmit={}
            steps={
              provideEmail
                ? [
                    {
                      // label: "Briefing",
                      name: "Briefing",
                      content: step0Content,
                    },
                    {
                      name: "Briefing",
                      content: step1Content,
                    },
                    {
                      name: "Image-Acquisition",
                      content: step2Content,
                    },

                    {
                      name: "Finish",
                      content: step3Content,
                    },
                    {
                      name: "Finish",
                      content: step4Content,
                    },
                    {
                      name: "Finish",
                      content: step5Content,
                    },
                    {
                      name: "Finish",
                      content: step6Content,
                    },
                    {
                      name: "Finish",
                      content: step7Content,
                    },
                    {
                      name: "Finish",
                      content: step8Content,
                    },
                  ]
                : [
                    {
                      // label: "Briefing",
                      name: "Briefing",
                      content: step0Content,
                    },
                    {
                      name: "Image-Acquisition",
                      content: step2Content,
                    },

                    {
                      name: "Finish",
                      content: step3Content,
                    },
                    {
                      name: "Finish",
                      content: step4Content,
                    },
                    {
                      name: "Finish",
                      content: step5Content,
                    },
                    {
                      name: "Finish",
                      content: step6Content,
                    },
                    {
                      name: "Finish",
                      content: step7Content,
                    },
                    {
                      name: "Finish",
                      content: step8Content,
                    },
                  ]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
