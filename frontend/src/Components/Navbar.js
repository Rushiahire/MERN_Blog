import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container-fluid">
          <Link className='navbar-brand fs-2 mx-5 text-danger ' to="/"><b>BLOGS</b></Link>
          {/* <a class="navbar-brand" href="/">BLOGS</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/blogs" className='nav-link active'>
                  ALL BLOGS
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/my-blogs/" className='nav-link'>
                  MY BLOGS
                </Link>
              </li>

            </ul>
            <form class="d-flex" role="search">
              <Link to="/auth">
                <button className='btn btn-primary text-uppercase mx-1 rounded-4'>
                  login
                </button>
              </Link>
              <Link to="/auth">
                <button className='btn btn-primary text-uppercase mx-2 rounded-4'>Signup</button>
              </Link>
              <Link to="/auth">
                <button className='btn btn-primary text-uppercase rounded-4'>logout</button>
              </Link>

            </form>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar