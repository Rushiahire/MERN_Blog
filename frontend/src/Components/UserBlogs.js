import React,{useEffect} from 'react'
import getUserBlogs from '../api/userBlogs';
import { getUserBlogApi } from '../store/slices/userBlogs';

const UserBlogs = () => {
  const id = localStorage.getItem("userid");
  
  useEffect(()=>{
    console.log("id",id)
    getUserBlogApi(id)
  },[])
  return (
    <div>
     <h3 className='text-uppercase'>my blogs</h3>

    </div>
  )
}

export default UserBlogs