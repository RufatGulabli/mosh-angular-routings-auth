const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Users = require("./model/user");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3001;

app.post("/login", (req, res) => {
  try {
    let { username, password } = req.body;
    console.log(username, password);
    let user = Users.find(u => u.username === username);
    console.log("User : \n", user);
    if (username === user.username && password === user.password) {
      let token = jwt.sign(
        {
          username: user.username,
          fullname: user.name.concat(" ".concat(user.surname)),
          email: user.email,
          isAdmin: user.isAdmin
        },
        "afrasiyab"
      );
      res.status(200).json(token);
    } else {
      res
        .status(400)
        .json({ isError: true, message: "Invalid username or password!" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// function generateToken(username, password) {}

app.listen(PORT, () => {
  console.log("Listenin to port ", PORT);
});
