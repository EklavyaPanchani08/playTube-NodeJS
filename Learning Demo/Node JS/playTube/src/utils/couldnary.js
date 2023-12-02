import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const fileUploadOnCloudinary = async (path) => {
  try {
    if (!path) return null;
    const res = await cloudinary.v2.uploader.upload(
      path,
      { resouce_type: "auto" }
      //   function (error, result) {
      //     console.log(result);
      //   }
    );
    console.log("File uploaded on could", res.url);
    return res;
  } catch (error) {
    fs.unlinkSync(path);
    //   remove file from local
    return bull;
  }
};

export { fileUploadOnCloudinary };
