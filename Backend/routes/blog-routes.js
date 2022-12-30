import express from "express";
import { addNewBlog, deleteBlog, getAllBlogs, getById, updateBlog } from "../controllers/blog-controller.js";

const blogRouter = express.Router();


blogRouter.get("/", getAllBlogs)
blogRouter.post("/add-blog",addNewBlog)
blogRouter.put("/update/:id",updateBlog)
blogRouter.delete("/delete/:id",deleteBlog)
blogRouter.get("/:id",getById)

export default blogRouter;