import React from 'react'
import { Routes, Route } from "react-router-dom";
import BlogDetail from './BlogDetail';
import Blogs from './Blogs';
import Home from './Home';
import AddBlog from './AddBlog';
import UserBlogs from './UserBlogs';
import Auth from './Auth';

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/my-blogs" element={<UserBlogs/>} />
            <Route path="/my-blogs/:id" element={<BlogDetail/>} />
            <Route path="/blogs/add-blogs" element={<AddBlog/>} />

        </Routes>
    </div>
  )
}

export default AppRoutes;