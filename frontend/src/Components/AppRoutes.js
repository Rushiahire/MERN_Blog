import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes;