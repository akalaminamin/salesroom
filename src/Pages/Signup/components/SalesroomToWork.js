import React, { useContext } from "react";
import { Formik } from "formik";
 
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import Loader from "./Loader";
import { Button } from "@mui/material";

const SalesroomToWork = () => {
  const { salesToWork, setSalesToWork, next, prev } =
    useContext(MultiStepFormContext);
  const [Isloading, setLoading] = React.useState(false)

  const handleSalesroomWork = (data) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSalesToWork(data)
      next();
    }, 1000);
  };

  return (
    <Formik
      initialValues={salesToWork}
      onSubmit={(values) => handleSalesroomWork(values)}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header mb-7">
              <h2 className="text-[26px] font-medium">Put Salesroom to work</h2>
              <p className="text-gray-500 text-lg absolute">
                This will help us customise salesroom for you
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3">

              <div className="body col-span-4 pt-5">

                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-4">
                    <label
                      htmlFor="members"
                      className="block mb-2 text-md font-medium text-gray-800"
                    >
                      How many members do you have in your organisation?
                    </label>
                    <select id="members" name="members" className="form-select mb-4">
                      <option value="">Eg. 5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                  <div className="col-span-4">
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-md font-medium text-gray-800"
                    >
                      Which industry does your organisation belong to ?
                    </label>
                    <select name="industry" className="form-select mb-4 ">
                      <option value="">Eg. Engineering tools</option>
                      <option value="Software Developement">
                        Software Developement
                      </option>
                      <option value="Web Development">Web Development</option>
                    </select>
                  </div>
                  <div className="col-span-4">
                    <label
                      htmlFor="manufacture"
                      className="block mb-2 text-md font-medium text-gray-800"
                    >
                      What does your company manufacture ?
                    </label>
                    <select name="manufacture" className="form-select mb-4 ">
                      <option value="">Eg. Furnace machines</option>
                      <option value="Eg. Furnace machines">
                        Eg. Furnace machines
                      </option>
                      <option value="Eg. Furnace machines">
                        Eg. Furnace machines
                      </option>
                    </select>
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

export default SalesroomToWork;
