const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hellooo this is home page");
});
app.get("/about", (req, res) => {
  res.send("hellooo this is about page");
});
app.get("/contact", (req, res) => {
  res.send("hellooo this is contact page");
});
app.get("/demo", (req, res) => {
  res.send("hellooo this is demo page");
});

app.listen(3000);
