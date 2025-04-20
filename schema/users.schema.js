import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png",
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Users = mongoose.model("Users", usersSchema);