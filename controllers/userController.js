const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtokens");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(201).send("Email already exists, please Sign-in");
    }
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashpassword });

    await newUser.save();

    const payload = { username: newUser.username, email: newUser.email };

    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, {
      expiresIn: "5h",
    });

    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error) {
    res.status(400).send("Error registering user: ", error);
  }
};
