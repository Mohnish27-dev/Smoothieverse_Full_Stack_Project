
import mongoose from "mongoose";
import { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
    coverPic: {
        type: String,
    },
  
    createdAt: {
        type: Date,
        default: Date.now,
    },
    razorpayKey: {
        type: String,
    },
    razorpaySecret: {
        type: String,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },


    
    
})

export default mongoose.models.User || mongoose.model('User', userSchema);;