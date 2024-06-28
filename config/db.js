require("dotenv").config();

const mongoose = require("mongoose");
const dataBaseUrl = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(dataBaseUrl);
    console.log(" Database connected succesfully ");
  } catch (err) {
    console.log("error in connecting Database", err);
  }
};

module.exports = connectDB;
