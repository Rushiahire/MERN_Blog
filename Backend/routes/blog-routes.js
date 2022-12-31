import express from "express";
import { addNewBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from "../controllers/blog-controller.js";

const blogRouter = express.Router();


blogRouter.get("/", getAllBlogs)
blogRouter.post("/add-blog",addNewBlog)
blogRouter.put("/update/:id",updateBlog)
blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteBlog)
blogRouter.get("/user/:id",getByUserId)

export default blogRouter;