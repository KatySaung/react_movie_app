import expressAsyncHandler from "express-async-handler";

// Register User
// route    POST /api/users/register
// access   Public
const registerUser = expressAsyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error("Ohh Ohh 401 unauthorized");

  res.status(200).json({ message: "Registered User" });
});

export { registerUser };
