import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import authActions from "../store/slices/login";


const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log("isloggedIn", isLoggedIn);

  const dispatch = useDispatch();

  const Logout = () => {
    console.log("logout")
    dispatch(authActions.Logout())
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container-fluid">
          <Link className="navbar-brand fs-2 mx-5 text-danger " to="/">
            <b>BLOGS</b>
          </Link>
          {/* <a class="navbar-brand" href="/">BLOGS</a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {isLoggedIn ? (
              <>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/blogs" className="nav-link active">
                      ALL BLOGS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/my-blogs/" className="nav-link">
                      MY BLOGS
                    </Link>
                  </li>
                </ul>
                <Link to="/auth">
                  <button className="btn btn-primary text-uppercase rounded-4" onClick={Logout}>
                    logout
                  </button>
                </Link>
              </>
            ) : (
              <>
              <div class="d-flex justify-content-end w-100">
              <Link to="/login">
                  <button className="btn btn-primary text-uppercase mx-1 rounded-4">
                    login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-primary text-uppercase mx-2 rounded-4">
                    Signup
                  </button>
                </Link>
              </div>
              
              </>
            )}

            {/* <form class="d-flex" role="search">
              
             
              
              
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
