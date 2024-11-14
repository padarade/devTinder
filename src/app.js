const express = require("express");

const app = express();
// app.use("/", (req, res) => {
//   res.send("Hello from DASHBOARD!!!");
// });

app.use("/test", (req, res) => {
  res.send("Hello from test");
});

app.use("/hello", function (req, res) {
  res.send("hello from hello");
});
app.listen(7777, () => {
  console.log("Server is succesfully listens to port 7777...");
});
