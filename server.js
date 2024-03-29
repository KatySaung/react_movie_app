import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import path from "path";
import serveFavicon from "serve-favicon";
import morgan from "morgan";
dotenv.config();
const PORT = process.env.PORT || 3001;

import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware Backend Routes
app.use("/api/user", userRoutes);

// Middleware to log requests
// Middleware to parse incoming JSON data

app.get("/", (req, res) => res.send("Server is ready"));

// Middleware errorhandler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
