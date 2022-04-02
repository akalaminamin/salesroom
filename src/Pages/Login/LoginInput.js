import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Enter a valid email address').required('This field is required'),
});


const LoginInput = ({ setProvideEmail}) => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (!data) {
      alert("all field is empty");
    }
    setProvideEmail(false);
    navigate("/signup");
  };


  return (

    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form onSubmit={onSubmit}>
            <div className="flex items-center w-fit ml-auto">
              <Field name="email" type="email" placeholder="Enter Email" className="input-signup bg-[#ecedf0] pl-8 pr-12 py-4 rounded-full relative -right-10 w-96" />
              <button type="submit" className="btn-black text-[22px] px-8 py-3 z-10">Sign up</button>
            </div>
            <div className="flex items-center ml-auto w-[480px] error">
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default LoginInput;