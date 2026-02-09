const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my first backend application");
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
    