const express = require("express");
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use(express.json());

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body.formData;
  console.log(firstName, lastName, email, password);
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send({ message: "please fill all the details" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "already have an account" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(200).send({ user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

// Route for user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body.formData;

    if (!email) {
      return res.status(401).send("Please enter email or phonenumber");
    }

    let user;
    if (email) {
      user = await User.findOne({ email });
    }

    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    const isMatchedpass = await bcrypt.compare(password, user.password);
    if (!isMatchedpass) {
      return res.status(401).send("Invalid credentials");
    }

    // Clear any existing token cookie
    res.clearCookie("token", {
      httpOnly: true,
      path: "/",
      domain: "localhost",
      signed: true,
      expires: new Date(0),
    });

    // Generate a new token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    // Set the new token as a cookie
    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      domain: "localhost",
      signed: true,
      expires,
    });

    return res.status(200).send('login successful');
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
