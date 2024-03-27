import expressAsyncHandler from "express-async-handler";
export { registerUser, login, logout, updateUser, deleteUser };

// route    POST /api/user
// access   Public
const registerUser = expressAsyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error("Ohh Ohh 401 unauthorized");

  res.status(200).json({ message: "Registered User" });
});

// route  POST /api/user/auth
// JWT    Private
const login = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Authorized User" });
});

// route  POST /api/user/logout
// JWT    Private
const logout = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logged Out User" });
});

// route  PUT /api/user/profile
// JWT    Private
const updateUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Updated User" });
});

// route  DELETE /api/user/profile
// JWT    Private
const deleteUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Deleted User" });
});
