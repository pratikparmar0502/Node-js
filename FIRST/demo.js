const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  const data = fs.readFileSync("fs.txt", "utf-8");
  if (req.url == "/") {
    res.write(data);
  } else if (req.url == "/about") {
    res.write("About page");
  } else if (req.url == "/contact") {
    res.write("Contact");
  } else {
    res.write("Nothing to show");
  }
  res.end();
});

app.listen(3000);
