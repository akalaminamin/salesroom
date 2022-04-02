import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./components/MultiStepFormContext";
import WorkEmail from "./components/WorkEmail";
import EnterOTP from "./components/EnterOTP";
import EnterPassword from "./components/EnterPassword";
import NameYourRoom from "./components/NameYourRoom";
import CompanyLogoWebsite from "./components/CompanyLogoWebsite";
import CompanyAddress from "./components/CompanyAddress";
import SalesroomToWork from "./components/SalesroomToWork";
import SocialMediaLinks from "./components/SocialMediaLinks";
import './components/Signup.module.scss';


const { Step } = Steps;

const workEmailInitialState = {
  email: "",
};

const enterOTPInitialState = {
  otp: "",
};
const passwordInitialState = {
  password: "",
};
const roomNameInitialState = {
  roomName: "",
};
const websiteInitialState = {
  website: "",
};
const CompanyAddressInitialState = {
  Address1: "",
  Address2: "",
  Landmark: "",
  PinCode: "",
  District: "",
  state: "",
};
const salesToWorkInitialState = {
  members: "",
  industry: "",
  manufacture: "",
};
const socialMediaInitialState = {
  linkedin: "",
  instagram: "",
  twitter: "",
};



const renderStep = (step, provideEmail, loginWith) => {

  console.log("provideEmail", provideEmail)
  console.log("loginWith", loginWith)
//   switch (step) {
//     case 0:
//       return provideEmail ? <WorkEmail /> : loginWith == true  ? <EnterOTP /> : null ;
//     case 1:
      
//       return loginWith ? <EnterOTP /> : <EnterPassword />;
//     // case 2:
//     //   return loginWith ? null : <EnterPassword /> ;
    
//     case 2:
//       return <NameYourRoom />;
//     case 3:
//       return <CompanyLogoWebsite />;
//     case 4:
//       return <CompanyAddress />;
//     case 5:
//       return <SalesroomToWork />;
//     case 6:
//       return <SocialMediaLinks />;
//     default:
//       return null;
//   }
// };

switch (step) {
  case 0:
    return provideEmail ? <WorkEmail /> : <EnterOTP />;
  case 1:
    return provideEmail ? <EnterOTP /> : <EnterPassword />;
  case 2:
    return provideEmail ? <EnterPassword />:<NameYourRoom />;
  case 3:
    return provideEmail ?<NameYourRoom />:<CompanyLogoWebsite />;
  case 4:
    return provideEmail ?<CompanyLogoWebsite />:<CompanyAddress />;
  case 5:
    return provideEmail?<CompanyAddress />:<SalesroomToWork />;
  case 6:
    return provideEmail?<SalesroomToWork />: <SocialMediaLinks />;
  case 7:
     return provideEmail?<SocialMediaLinks />: <EnterPassword />
    //  return <SocialMediaLinks />;
  default:
    return null;
}
};


const MultiStepForm = ({ provideEmail, loginWith }) => {
  const [WorkEmail, setWorkEmail] = useState(workEmailInitialState);
  const [EnterOPT, setEnterOPT] = useState(enterOTPInitialState);
  const [Password, setPassword] = useState(passwordInitialState);
  const [roomName, setRoomName] = useState(roomNameInitialState);
  const [website, setWebsite] = useState(websiteInitialState);
  const [companyAddress, setCompanyAddress] = useState(
    CompanyAddressInitialState
  );
  const [salesToWork, setSalesToWork] = useState(salesToWorkInitialState);
  const [socialMedia, setSocialMedia] = useState(socialMediaInitialState);

  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 7) {
      setCurrentStep(0);
      setWorkEmail(workEmailInitialState);
      setEnterOPT(enterOTPInitialState);
      setPassword(passwordInitialState);
      setRoomName(roomNameInitialState);
      setWebsite(websiteInitialState);
      setCompanyAddress(CompanyAddressInitialState);
      setSalesToWork(salesToWorkInitialState);
      setSocialMedia(socialMediaInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <div className="11bg-[#ecedf0] signup">
      <div className="grid grid-cols-1  h-screen">
        <div className="header flex justify-center h-[0vh]">
          <h1 className="text-[#174fba] font-bold py-3 text-6xl mb-3">
            Salesroom
          </h1>
        </div>
        <Provider
          value={{
            WorkEmail,
            setWorkEmail,
            next,
            prev,
            EnterOPT,
            setEnterOPT,
            Password,
            setPassword,
            roomName,
            setRoomName,
            website,
            setWebsite,
            companyAddress,
            setCompanyAddress,
            salesToWork,
            setSalesToWork,
            socialMedia,
            setSocialMedia,
          }}
        >
          <Steps current={currentStep}>
            {/* <Step title={"Fill in your WorkEmail"} /> */}
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
          </Steps>
          {/* <main>{renderStep(currentStep)}</main> */}
          <main>
            <div className="formbox grid  ">
              {renderStep(currentStep, provideEmail, loginWith)}
            </div>
          </main>
        </Provider>
      </div>
    </div>
  );
};
export default MultiStepForm;
