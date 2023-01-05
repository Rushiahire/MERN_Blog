import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const SignUp = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("signup form values", values);
          axios.post("http://localhost:8000/api/user/signup",values)
          .then((res)=>{
            console.log(res.data)
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-25 mx-auto mt-5">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                type="string"
                className="form-control"
                id="name"
                name="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="string"
                className="form-control"
                id="password"
                name="password"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
