import multer from "multer";
import { uuid } from "uuidv4";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/tamp");
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + "-" + uuid());
  },
});

export const upload = multer({ storage });
