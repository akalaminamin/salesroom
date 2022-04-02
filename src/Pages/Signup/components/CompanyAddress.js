import React, { useState, useContext } from "react";
 
import { Formik } from "formik";
import { Input, InputNumber } from "formik-antd";
import * as Yup from 'yup';
import MultiStepFormContext from "./MultiStepFormContext";
import Loader from "./Loader";
import { Button } from "@mui/material";

const SignupSchema = Yup.object().shape({
  Address1: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  Address2: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  Landmark: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  PinCode: Yup.string()
    .min(4, 'Too Short!')
    .required('Required'),
  District: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  State: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});



const CompanyAddress = () => {

  const [Isloading, setLoading] = React.useState(false)

  const { companyAddress, setCompanyAddress, next, prev } =
    useContext(MultiStepFormContext);
  const SalesroomForm = () => {
    const handleSubmitNext = (e) => {
      e.preventDefault()
      next();
    };

    const SendCompanyAddress=(Address)=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setCompanyAddress(Address);
        next();
      }, 1000);
    }


    return (
      <Formik
        initialValues={companyAddress}
        onSubmit={(values) =>SendCompanyAddress(values)}

        validationSchema={SignupSchema}
      >
        {({ handleSubmit, errors }) => {
          return (
            <>
              <form onSubmit={() => handleSubmit(handleSubmitNext)}>
                <div className="body">
                  <div className="grid grid-cols-4 gap-3">
                    {/* 1 */}
                    <div className="col-span-4">
                      <div className={`form__item ${errors.Address1 && "input__error"}`}>
                        <Input
                          name="Address1"
                          placeholder="Address 1"
                          autoComplete="off"
                        />
                        <p className={"error__feedback mb-0"}>{errors.Address1}</p>
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="col-span-4">
                      <div className={`form__item ${errors.Address2 && "input__error"}`}>
                        <Input
                          name="Address2"
                          placeholder="Address 2"
                          autoComplete="off"
                        />
                        <p className={"error__feedback mb-0"}>{errors.Address2}</p>
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="col-span-3">
                      <div className={`form__item ${errors.Landmark && "input__error"}`}>
                        <Input
                          name="Landmark"
                          placeholder="Landmark"
                          autoComplete="off"
                        />
                        <p className={"error__feedback mb-0"}>{errors.Landmark}</p>
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="col-span-1">
                      <div className={`form__item ${errors.PinCode && "input__error"}`}>
                        <Input
                          type="number"
                          name="PinCode"
                          placeholder="PinCode"
                          autoComplete="off"
                        />
                        <p className={"error__feedback mb-0"}>{errors.PinCode}</p>
                      </div>
                    </div>
                    {/* 5 */}
                    <div className="col-span-2">
                      <div className={`form__item ${errors.District && "input__error"}`}>
                        <Input
                          name="District"
                          placeholder="District"
                          autoComplete="off"
                        />
                        <p className={"error__feedback mb-0"}>{errors.District}</p>
                      </div>
                    </div>
                    {/* 6 */}
                    <div className="col-span-2">
                      <div className={`form__item ${errors.State && "input__error"}`}>
                        <Input
                          name="State"
                          placeholder="State"
                          autoComplete="off"
                        />
                        <p className={"error__feedback mb-0"}>{errors.State}</p>
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
              </form>
            </>
          );
        }}
      </Formik>
    );
  };

  return (
    <div className="grid">
      <div className="header  mb-7">
        <h2 className="text-[26px] font-medium">Enter your company address</h2>
      </div>
      <SalesroomForm />
    </div>
  );
};

export default CompanyAddress;
