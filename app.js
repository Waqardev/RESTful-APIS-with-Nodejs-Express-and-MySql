const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    status: 1,
    message: "The REST API is Working",
  });
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
