import mongoose from "mongoose";
import Blog from "../models/blog.js";
import User from "../models/user.js";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find().populate("user");
  } catch (err) {
    return console.log(err);
  }

  if (!blogs) {
    return res.status(404).json({ message: "No blogs found" });
  }

  return res.status(200).json({ blogs });
};

export const addNewBlog = async (req, res, next) => {
  // console.log(req.body)
  const { title, description, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    console.log(err);
  }

  if (!existingUser) {
    return res.status(500).json({ message: "Unable to find user by this id" });
  }

  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error occured" });
  }
  return res.status(200).json({ Success: blog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;

  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (err) {
    console.log(err);
  }

  if (!blog) {
    return res.status(500).json({ message: "unable to update blog" });
  }

  return res.status(200).json({ blog });
};

export const getById = async (req, res, next) => {
  const blogId = req.params.id;

  let blog;
  try {
    blog = await Blog.findById(blogId);
  } catch (err) {
    return console.log(err);
  }

  if (!blog) {
    return res.status(500).json({ message: "Something wrong" });
  }
  return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res, next) => {
  // const { title, description, image, user } = req.body;
  const deleteBlogId = req.params.id;

  let blog;

  try {
    blog = await Blog.findByIdAndRemove(deleteBlogId).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
  } catch (err) {
    return console.log(err);
  }

  if (!blog) {
    return res.status(500).json({ message: "Failed to delete " });
  }
  return res.status(200).json({ message: "Blog deleted Successfully" });
};


export const getByUserId = async (req, res, next) => {
  const userId = req.params.id;

  let userBlogs;
  try{
    userBlogs = await User.findById(userId).populate("blogs")
  }catch (err) {
    console.log(err)
  }

  if(!userBlogs) {
    return res.status(500).json({message:"No Blogs found"})
  }
  return res.status(200).json({Blogs: userBlogs})
}