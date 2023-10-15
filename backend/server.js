const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 5001; // Choose a port number
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // Update with your React app's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Required for handling cookies, authentication, or sessions
  })
);
const db = mysql.createConnection({
  host: "banking-app.cs4588usvttt.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "neil1234",
  database: "banking",
});
const usersRouter = require("./routes/users");

app.use("/api/users", usersRouter);

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
