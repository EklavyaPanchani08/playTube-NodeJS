import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// IF PASSWORD THIS CHANGE THEN IT WILL BE ENCREPTED & SAVE
userSchema.pre("save", async function (next) {
  if (!this.IsModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

// PASSWORD DYCRYPTION
userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, thus.password);
};


// MAKE JWS TOKEN 
userSchema.methods.gerateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      userName: this.userName,
    },
    process.env.ACCRESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCRESS_TOKEN_EXPIRY }
  );
};

// MAKE REFRESH TOKEN
userSchema.methods.gerateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
  };

export const USer = mongoose.model("User", userSchema);
