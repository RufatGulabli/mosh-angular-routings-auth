const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const user = require("./model/user");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.post("/login", (req, res) => {
  try {
    let { username, password } = req.body;
    console.log(username, password);
    console.log(user);
    if (username === user.username && password === user.password) {
      let token = jwt.sign(
        {
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin
        },
        "afrasiyab"
      );
      res.status(200).json(token);
    } else {
      res
        .status(400)
        .json({ isError: true, message: "Username or password is invalid!" });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
});

// function generateToken(username, password) {}

app.listen(PORT, () => {
  console.log("Listenin to port ", PORT);
});
