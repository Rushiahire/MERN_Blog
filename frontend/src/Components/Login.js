// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/slices/auth";
import { useDispatch } from "react-redux";


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return(
    <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      //   validate={
      //     values => {
      //     const errors = {};
      //     if (!values.email) {
      //       errors.email = 'Required';
      //     } else if (
      //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //     ) {
      //       errors.email = 'Invalid email address';
      //     }
      //     return errors;
      //   }
      // }
      onSubmit={(values, { setSubmitting }) => {
        console.log("login form values", values);
        axios.post("http://localhost:8000/api/user/login",values)
       
        .then((res)=>{
          // console.log(res.data)
          dispatch(authActions.login())
          if(res.data.message === "Login successfully") {
            navigate("/blogs")
          }
        })

       
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-25 mx-auto mt-5">
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
              type="password"
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
  )
}
 


export default Login;
