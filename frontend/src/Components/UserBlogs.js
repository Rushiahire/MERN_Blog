import React,{useEffect} from 'react'
import UserBlogsApi from '../api/userBlogs'

const UserBlogs = () => {
  useEffect((id)=>{
    UserBlogsApi("63b011ef6088394ecc1fa3f8")
  },[])
  return (
    <div>
      <h3>UserBlogs</h3>
    </div>
  )
}

export default UserBlogs