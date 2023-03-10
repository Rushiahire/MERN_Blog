import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true 
}));

app.use(cookieParser());
app.use(session({
  name: 'rushi',
  secret: "thisismysecretkey",
  saveUninitialized: true,
  cookie: {
    maxAge:600000
  },
  resave: false
}));

app.use("/api/user", router);
app.use("/api/blog", blogRouter);


 mongoose
  .connect(
    "mongodb+srv://rushi:MsUjKS7yEOsl2Te4@cluster0.gc5zk.mongodb.net/Blog?retryWrites=true&w=majority",
    {
      useUnifiedTopology: "True",
    }
  )
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("server is start at http://localhost:8000");
});
