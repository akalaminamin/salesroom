import React, { useContext } from "react";
import { Formik } from "formik";
 
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import Loader from "./Loader";
import { Button } from "@mui/material";

const NameYourRoom = () => {
  const { roomName, setRoomName, next, prev } =
    useContext(MultiStepFormContext);
  const [Isloading, setLoading] = React.useState(false)

  const SendRoom = (Name) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setRoomName(Name);
      next();
    }, 1000);
  }

  return (
    <Formik
      initialValues={roomName}
      onSubmit={(values) => SendRoom(values)}
      validate={(values) => {
        const errors = {};
        if (!values.roomName) {
          errors.roomName = "Required";
        }
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header mb-7">
              <h2 className="text-[26px] font-medium">Name your room</h2>
              <p className="text-gray-500 text-lg absolute">
                Store, create and share - all in one room
              </p>

            </div>
            <div className="grid grid-cols-4 gap-3">

              <div className="body col-span-4 pt-12">

                <h5>Room name</h5>
                <div
                  className={`form__item ${errors.roomName && "input__error"}`}
                >
                  <Input
                    name={"roomName"}
                    placeholder="You can enter your company name *"
                  />
                  <p className={"error__feedback"}>{errors.roomName}</p>
                </div>
                <div
                  className={
                    "form__item button__items d-flex justify-content-end"
                  }
                ></div>
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

export default NameYourRoom;
