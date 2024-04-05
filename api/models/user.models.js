import mongoose, { mongo } from "mongoose";

// Create USer Schema
const UserSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: true,
    unique: true,
 },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
},
{timestamps:true});


const User = mongoose.model("User", UserSchema);
export default User;