import React from 'react'
import axios from 'axios';

const UserBlogsApi = async(id) => {
 await axios.get(`http://localhost:8000/api/blog/user/${id}`)
 .then((res)=>{
    console.log(res)
 })
}

export default UserBlogsApi;