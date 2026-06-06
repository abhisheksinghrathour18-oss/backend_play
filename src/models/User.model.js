import mongoose from "mongoose";
import bcrypt from "bcrypt";   
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,  
        index: true, // Add an index for faster queries
        trim: true, // Remove leading and trailing whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, // Remove leading and trailing whitespace
    },
    fullName: {
        type: String,
        required: true,
        trim: true, // Remove leading and trailing whitespace
    },
    avatar: {
        type: String, // cloudinary url of the avatar image
        required: true,
        default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y", // Default avatar URL
    },
    coverImage: {
        type: String, // cloudinary url of the cover image
   
    },
    Watchlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
        },
    ],
    Password: {
        type: String,
        required: true,
    },
    RefreshToken: {
        type: String,
    },
    }, { timestamps: true });

    userSchema.pre("save", async function (next) {
        if (!this.isModified("Password")) {
            return next();
        }
        this.Password = await bcrypt.hash(this.Password, 10);
        next();
    });
    userSchema.methods.comparePassword = async function (candidatePassword) {
        return await bcrypt.compare(candidatePassword, this.Password);
    };
userSchema.methods.generateJWT = function () {
    return jwt.sign({ id: this._id , email: this.email, username: this.username, fullName: this.fullName },
         process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: process.env.EXPIRY_TOKEN_ACCESS }
        );

        Schema.methods.generateRefreshToken = function () {
    return jwt.sign({ id: this._id ,
        
    },
         process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: process.env.EXPIRY_TOKEN_REFRESH }
        );


};  

export const User = mongoose.model("User", userSchema);