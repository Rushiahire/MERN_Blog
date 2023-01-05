import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user",router)
app.use("/api/blog",blogRouter)
// app.use("/", (req,res,next)=>{
//     res.send("hello")
// });



mongoose.connect("mongodb+srv://rushi:MsUjKS7yEOsl2Te4@cluster0.gc5zk.mongodb.net/Blog?retryWrites=true&w=majority", {
           useUnifiedTopology: "True",
         })
         .then(() => {
            console.log("Connected to mongoDB")
         })
         .catch((err)=>{
            console.log(err)
         })

app.listen(8000, () => {
    console.log("server is start at http://localhost:8000")
})
