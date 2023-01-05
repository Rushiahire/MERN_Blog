import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [allBlogs, setallBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/blog").then((res) => {
      console.log(res.data);
      setallBlogs(res.data.blogs);
    });
  }, []);

  // console.log("allblogs", allBlogs);

  return (
    <>
      
      <div className="container border mt-5 ">
        <div className="row">
          {allBlogs.map((blog, index) => (
            <>
              <div className="col-lg-3 col-sm-4 p-3">
                <div className="card h-100">
                  <div className="card-body ">
                    <h4 className="card-subtitle mb-2 text-muted">
                      {blog.image}
                    </h4>
                    <p className="card-text"></p>
                    {blog.title}
                    <p>
                      <p>
                        {blog.description}
                      </p>
                    </p>
                    <p>
                      <a href="#" className="card-link"></a>
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
