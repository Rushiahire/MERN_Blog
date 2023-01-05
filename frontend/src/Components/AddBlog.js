import React from "react";
import { Field, Formik, Form, FastField } from "formik";
import axios from "axios";

const AddBlog = () => {
  return (
    <>
      <Formik
        initialValues={{ title: "", image: "", description: "" }}
        // validate={}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          axios.post("http://localhost:8000/api/blog/add-blog",values)
          .then((res)=>{
            console.log("res",res)
          })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className="w-25 mx-auto mt-5">
            <div class="mb-3">
              <label for="exampleInputtitle1" class="form-label">
                Title
              </label>
              <Field
                type="string"
                class="form-control "
                id="title"
                name="title"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Add Image
              </label>
              <Field
                type="file"
                class="form-control "
                id="image"
                name="image"
              />
            </div>
            <div class="mb-3 ">
              <label class="form-check-label" for="exampleCheck1">
                Description
              </label>
              <Field
                type="string"
                class="form-control"
                id="description"
                name="description"
              />
            </div>
            <button type="submit" class="btn btn-primary rounded-0">
              Add Blog
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddBlog;
