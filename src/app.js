const express = require("express");

const app = express();
// app.use("/", (req, res) => {
//   res.send("Hello from DASHBOARD!!!");
// });

app.use("/test", (req, res) => {
  res.send("Hello from test server");
});

app.use("/hello", function (req, res) {
  res.send("hello from hello");
});
app.listen(7777, () => {
  console.log("Server is succesfully listens to port 7777...");
});

// this will handle only /user api call
app.get("/user", (req, res) => {
  res.send({
    firstName: "Siddharth",
    lastName: "Avhad",
  });
});

app.post("user", (req, res) => {
  console.log("Data saved to DB");
});

app.delete("user", (req, res) => {
  console.log("Deleted successfully");
});
