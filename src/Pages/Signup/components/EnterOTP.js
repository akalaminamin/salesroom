import React, { useContext, useState } from "react";
import { Formik } from "formik";

import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import OtpInput from "react-otp-input";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { number } from "prop-types";
import { Button } from "@mui/material";

const EnterOTP = () => {
  const { EnterOPT, setEnterOPT, next, prev } = useContext(MultiStepFormContext);

  const [otpCode, setOtpCode] = useState('');
  const [Isloading, setLoading] = useState(false)
  const [isLangth, setIslangth] = useState(0)
  const [ErrorBundle, setBundle] = useState({
    Error: false,
    Message: 'Required',
  })
  const onSubmit = (data) => {

    console.log('hwllo')
  };

  const handleChange = (otpCode) => {
    setIslangth(otpCode.length)
    setBundle({ ...ErrorBundle, Error: false })
    setOtpCode(otpCode)
  }
  const OtpSend = (otpValue) => {
    console.log(isLangth)
    if (isLangth < 6) {
      setBundle({ ...ErrorBundle, Error: true })
    }
    else {

      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setEnterOPT(otpValue);
        next();
      }, 1000);

    }

  }

  return (
    <Formik
      initialValues={EnterOPT}
      onSubmit={(values) => OtpSend(values)}
      validate={(values) => {
        const errors = {};
        // if (!values.otp) {
        //   errors.otp = 'Required';
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.otp)) {
        //   errors.otp = 'Invalid email address';
        // }

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header  mb-7">
              <h2 className="text-[26px] font-medium">Enter OTP sent to your email</h2>
            </div>
            <div className="OPTscreen grid grid-cols-4 gap-3">

              <div className="body col-span-4 pt-12">
                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-4 flex justify-center items-center">
                    <div className={`form__item ${errors.website && "input__error"}`} >
                      <OtpInput
                        // value={code}
                        value={otpCode}
                        onChange={handleChange}
                        // onChange={(e) => setOtpCode(e.target.value)}
                        numInputs={6}
                        separator={<span style={{ width: '8px' }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                          border: '1px solid #136fcb',
                          borderRadius: '0px',
                          width: '55px',
                          height: '55px',
                          fontSize: '20px',
                          color: '#000',
                          fontWeight: '500',
                          caretColor: 'blue',
                        }}
                        focusStyle={{
                          border: '1px solid #CFD3DB',
                        }}

                      />
                      <span className="errormsg" style={{ margin: 0 }}>
                        {ErrorBundle.Error ? ErrorBundle.Message : null}
                        <div className="mt-[110px]">

                          {/* {otpCode.length <= 0 && 'Please Enter OPT'} */}
                          <p className={"error__feedback"}>{errors.otp}</p>
                        </div>
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="footer col-span-4 flex justify-between mb-5" >
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
export default EnterOTP;
