import express from "express";
import dotenv from "dotenv";
import path from "path";
import serveFavicon from "serve-favicon";
import morgan from "morgan";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
