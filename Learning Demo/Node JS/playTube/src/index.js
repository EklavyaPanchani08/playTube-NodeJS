import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log("MongoDB connection failed", e);
  });
