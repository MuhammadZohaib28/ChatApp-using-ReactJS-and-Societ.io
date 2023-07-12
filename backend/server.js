const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Add this line
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
  res.send("API is running smoothly");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
  console.log(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
