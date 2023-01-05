import React from 'react'
import axios from 'axios';

const getUserBlogs = async(id) => {
 await axios.get(`http://localhost:8000/api/blog/user/${id}`)
 .then((res)=>{
    console.log("api res",res)
 })
}


export default getUserBlogs;