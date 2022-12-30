import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: "String",
        require: true
    },
    email : {
        type: "String",
        require: true,
        unique: true
    },
    password : {
        type: "String",
        required: true,
        minlength: 6
    }
});


export default mongoose.model("User", userSchema);

//mongoDB collection name will be "users" 
