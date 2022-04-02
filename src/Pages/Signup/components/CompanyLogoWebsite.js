import React, { useContext, useState } from "react";
import { Formik } from "formik";
 
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

import ImageUpload from 'image-upload-react'
//important for getting nice style.
import 'image-upload-react/dist/index.css'
import { FaRegWindowClose } from 'react-icons/fa';
import Loader from "./Loader";
import { Button } from "@mui/material";

const CompanyLogoWebsite = () => {
  const { website, setWebsite, next, prev } = useContext(MultiStepFormContext);
  const [IDCard, setIDCard] = React.useState(null);
  const [errorMessage, SeterrorMessage] = React.useState();
  const [Type, setType] = React.useState('');
  const [imageSrc, setImageSrc] = useState()
  const [Isloading, setLoading] = React.useState(false)


  const onImageChange = (event) => {
    var fileName = event.target.files[0];
    var fileExtension = fileName.name.split('.').pop();
    var ext = fileExtension.toLowerCase();
    if (ext != 'jpeg' && ext != 'jpg' && ext != 'png') {
      setType('Invalid file type');
    } else if (event.target.files && event.target.files[0]) {
      setType('');
      setIDCard(URL.createObjectURL(event.target.files[0]));
      localStorage.setItem(
        'first_image',
        URL.createObjectURL(event.target.files[0])
      );
    }
  };

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }
  let fileInput = '';

  const SendCompanyInfo = (Name) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setWebsite(Name);
      next();
    }, 1000);
  }

  return (
    <Formik
      initialValues={website}
      onSubmit={(values) => SendCompanyInfo(values)}
      validate={(values) => {
        const errors = {};
        if (!values.website) {
          errors.website = "Required";
        }
        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
        //   errors.password = 'Invalid password address';
        // }

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header  mb-7">
              <h2 className="text-[26px] font-medium">
                Enter your company logo {"&"} Website
              </h2>
            </div>





            <div className="grid grid-cols-4 gap-3">
              <div className="body col-span-4 ">

                {/* Upload Logo Start  */}
                <div className="flex gap-4 items-center justify-center mb-5">
                  {IDCard ? (
                    <label>
                      <div className="upload__image-wrapper">
                        <div
                          className="btnUD "
                          style={{ color: 'red', marginTop: '35px' }}
                          onClick={() => {
                            SeterrorMessage(
                              'Please remove the selected image first then select again... '
                            );
                          }}>
                          <img
                            src={require("../../../Assets/images/icon/upload.png")}
                            width={160}
                            height={207}
                          />
                        </div>
                      </div>
                    </label>
                  ) : (
                    <label htmlFor={'upload-button'}>
                      <div className="upload__image-wrapper">
                        <div
                          className="btnUD "
                          style={{ color: 'red', marginTop: '35px' }}>
                          <img
                            src={require("../../../Assets/images/icon/upload.png")}
                            width={160}
                            height={207}
                          />
                        </div>
                        &nbsp;
                      </div>
                    </label>
                  )}
                  {IDCard && (
                    <div className="image-item ml-3 mt-12">
                      <img src={IDCard} alt="" className="max-h-[120px]" />
                      <div className="image-item__btn-wrapper">
                        <button
                          className="btnUD"
                          onClick={() => {
                            fileInput.value = '';
                            setIDCard(null);
                            SeterrorMessage(null);
                            localStorage.removeItem('first_image');
                          }}>
                          <FaRegWindowClose />
                        </button>
                      </div>
                    </div>
                  )}
                  <input
                    id="upload-button"
                    style={{ display: 'none' }}
                    type="file"
                    onChange={onImageChange}
                    // accept="image/*"
                    accept="image/x-png,image/jpg,image/jpeg,image/png"
                    ref={(ref) => (fileInput = ref)}
                  />
                </div>
                {errorMessage && (
                  <div className="flex justify-center">
                    <p className="error text-red-500">{errorMessage}</p>
                  </div>
                )}
                {Type && (
                  <div className="flex justify-center">
                    <p className="error text-red-500">{Type}</p>
                  </div>
                )}
                {/* Upload Logo End  */}
                <div className={`form__item flex uploadImage justify-center ${errors.website && "input__error"}`} >
                  {/* <ImageUpload
                    handleImageSelect={handleImageSelect}
                    imageSrc={imageSrc}
                    setImageSrc={setImageSrc}
                    style={{
                      width: 140,
                      height: 120,
                      background: '#ecedf0',
                      borderRadius: 20,
                      margin: '0 auto',
                      defaultDeleteIconColor: '#000'
                    }}
                  /> */}
                  {/* <h2 className="absolute z-[111] text-[18px] font-semibold text-gray-500">Upload Logo</h2> */}
                  {/* <p className={"error__feedback"}>{errors.website}</p> */}
                </div>
                {/* <div className={`form__item ${errors.website && "input__error"}`} >
                  <Input type="file" name={"website"} />
                  <p className={"error__feedback"}>{errors.website}</p>
                </div> */}
                <div className={`form__item ${errors.website && "input__error"}`} >
                  <Input name={"website"} placeholder="Paste Website Link *" />
                  <p className={"error__feedback"}>{errors.website}</p>
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
export default CompanyLogoWebsite;
