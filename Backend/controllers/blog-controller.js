import Blog from "../models/blog.js";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
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

  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    blog.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(200).json({ Success:blog });
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


export const deleteBlog = async ( req, res, next ) => {
    const { title, description, image, user } = req.body;
    const deleteBlogId = req.params.id;

   let blog;

    try {
        blog = await Blog.findByIdAndDelete(deleteBlogId,{
            title,
            description,
            image,
            user
        })
    }catch (err) {
        return console.log(err)
    }

    if(!blog) {
        return res.status(500).json({message: "Failed to delete "})
    }
    return res.status(200).json({message:"Blog deleted Successfully"})
}


export const getById = async ( req, res, next ) => {
    const { title, description, image, user } = req.body
    const blogId = req.params.id;

    let blog;
    try {
        blog = await Blog.findById(blogId)
    }catch (err) {
        return console.log(err)
    }

    if(!blog) {
        return res.status(500).json({message:"Something wrong"})
    }
    return res.status(200).json({blog})
}