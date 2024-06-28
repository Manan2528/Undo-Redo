const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
