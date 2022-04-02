import React, { useContext } from "react";
import { Formik } from "formik";
 
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import linkedin from "../../../Assets/images/image/linkedin.jpeg";
import Instagram from "../../../Assets/images/image/Instagram.jpeg";
import twitter from "../../../Assets/images/image/twitter.jpeg";
import Loader from "./Loader";
import { Button } from "@mui/material";

const SocialMediaLinks = () => {
  const { socialMedia, setSocialMedia, next, prev } =
    useContext(MultiStepFormContext);
  const [Isloading, setLoading] = React.useState(false)

  const handleSocialMedia = (data) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSocialMedia(data)
      next();
    }, 1000);
  };

  return (
    <Formik
      initialValues={socialMedia}
      onSubmit={(values) => handleSocialMedia(values)}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header ">
              <h2 className="text-[26px] font-medium">Enter social media links</h2>
              <p className="text-gray-500 text-lg absolute">
                This will help us customise salesroom for you
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3 ">

              <div className="body col-span-4 pt-14">
                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-4">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center mr-3">
                        <img className="w-10/12" src={linkedin} alt="linkedin" />
                      </div>
                      <input
                        className="!mb-0"
                        name="linkedin"
                        placeholder="Enter LinkedIn profile link"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center mr-3">
                        <img className="w-10/12" src={Instagram} alt="Instagram" />
                      </div>
                      <input
                        className="!mb-0"
                        name="Instagram"
                        placeholder="Enter Instagram profile link"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center mr-3">
                        <img className="w-10/12" src={twitter} alt="twitter" />
                      </div>
                      <input
                        className="!mb-0"
                        name="twitter"
                        placeholder="Enter twitter profile link"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                </div>
              </div>
              <div className="footer col-span-4 flex justify-between mb-5">
                <Button type={"default"} onClick={prev}>
                  Back
                </Button>
                <Button type="button" className="btn-blue" onClick={handleSubmit}>
                  {Isloading ? <Loader isLoading={Isloading} /> : "Done"}
                </Button>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default SocialMediaLinks;
