require("dotenv").config();
const express = require("express");
const userRouter = require("./api/users/user.router");
const app = express();

// Test Api
app.get("/api", (req, res) => {
  res.json({
    status: 1,
    message: "The REST API is Working",
  });
});

//To Convert json to javascript object
app.use(express.json());

app.use("/api/users", userRouter);

const port = process.env.App_Port || 3000;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
