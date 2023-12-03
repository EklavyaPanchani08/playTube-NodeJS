import { asyncHeander } from "../utils/asyncHandler.js";

const registerUser = asyncHeander(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export { registerUser };
