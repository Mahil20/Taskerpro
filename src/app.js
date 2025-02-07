const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Import bcrypt
const port = 5000;
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/students');
const db = mongoose.connection;
db.once('open', () => {
  console.log("MongoDB connection successful");
});

// User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String, // Store password as a string
  confirmPassword: String,
});

const Users = mongoose.model("data", userSchema);

// Route to handle signup
app.post('/post', async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  // Check if the email is already in use
  const existingUser = await Users.findOne({ email });
  if (existingUser) {
    return res.status(400).send('Email is already in use');
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new Users({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  await user.save();
  console.log(user);

  // Redirect to login page after successful signup
  res.redirect('/login');
});

// Route to handle login
// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await Users.findOne({ email });
  if (!user) {
    return res.status(400).send(`<script>alert("Enter valid information !");</script>`);
  }

  // Compare the password with the hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send(`<script>alert("Enter valid password !");</script>`);
  }

  // Login successful
  res.redirect('/home'); // Redirect to the home page
});
 
// Route for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html")); // Serve home.html when accessing the root
});

// Serve other HTML files
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html")); // Serve login.html
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html")); // Serve signup.html
});

app.get("/post", (req, res) => {
  res.sendFile(path.join(__dirname, "post.html")); // Serve post.html
});

app.get("/task", (req, res) => {
  res.sendFile(path.join(__dirname, "task.html")); // Serve task.html
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});