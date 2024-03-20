import expressAsyncHandler from "express-async-handler";

// Register User
// route    POST /api/users/register
// access   Public
const registerUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Registered User" });
});

export { registerUser };
