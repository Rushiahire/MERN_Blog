import React from 'react'
import { createSlice  } from '@reduxjs/toolkit'
import getUserBlogs from '../../api/userBlogs';
import getUserBlog from '../../api/userBlogs';

const initialState = {
    blogs: [],
    error:""
}


const getUserBlogsScreen = createSlice({
    name:"userBlog",
    initialState,
    reducers : {
        getUserBlogsSuccess(state, action) {
            console.log(action.payload)
            state.blogs = action.payload;
            state.error = ""
        }
    }
})



export const getUserBlogApi = (id) => async(dispatch) => {
    console.log("inside get")
    try {
        const res = await getUserBlog(res)
        console.log("res",res)
        dispatch(getUserBlogsSuccess(res))
    }catch (error) {
        console.log(error)
    }
}

const { getUserBlogsSuccess } = getUserBlogsScreen.actions;
export default getUserBlogsScreen.reducer;