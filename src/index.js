import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";

import auth from "./routes/auth";
import users from "./routes/users";
import games from "./routes/games";

dotenv.config();
const app = express();
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);

app.use(bodyParser.json());

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/games", games);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(9000, () => console.log("Running on localhost:9000"));
