import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";


export const getAllUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }

  return res.status(200).json({ users });
};


export const signup = async (req, res, next) => {
    
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (existingUser) {
    return res.status(400).json({ message: "User already exists !" });
  }

  const hashedPassword = bcrypt.hashSync(password)

  const user = new User({
    name,                 //req.body.name
    email,                //req.body.email
    password : hashedPassword,             //req.body.password
    blogs:[]
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }

  return res.status(200).json({user})
};


export const login = async ( req, res, next) => {
    console.log(req.body)
    const { email , password } = req.body;

    let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "Couldn't find user by this id !" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password , existingUser.password)   //(we just sending , actual user password)

  if(!isPasswordCorrect) {
    return res.status(400).json({message : "Email or password is incorrect"})
  }
  return res.status(200).json({message : "Login successfully" })
}