const { name } = require("ejs");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
let editId = null;
let setData = [];

// app.get("/about", (req, res) => {
//   res.send("about page");
//   // res.redirect("/");
// });
// app.get("/contact", (req, res) => {
//   res.send("contact page");
// });
// app.get("/demo", (req, res) => {
//   res.send("demo page");
// });

const readFile = fs.readFileSync("data.json", "utf-8");
if (readFile != "") {
  setData = JSON.parse(readFile);
}

app.get("/", (req, res) => {
  res.render("index.ejs", { setData, edit: null });
});

app.get("/getData", (req, res) => {
  const { name, email, phone_number, city, password } = req.query;

  if (
    name === "" ||
    email === "" ||
    phone_number === "" ||
    city === "" ||
    password === ""
  ) {
    console.log("Validation Failed: Empty Fields");
    return res.redirect("/");
  }

  const data = req.query;
  console.log(data);

  if (editId != null) {
    setData[editId] = data;
    editId = null;
  } else {
    setData.push(data);
  }

  fs.writeFileSync("data.json", JSON.stringify(setData));

  res.redirect("/");
});

app.get("/delData/:id", (req, res) => {
  const index = req.params.id;
  setData.splice(index, 1);

  fs.writeFileSync("data.json", JSON.stringify(setData));
  res.redirect("/");
});

app.get("/editData/:id", (req, res) => {
  editId = req.params.id;
  const edit = setData[editId];
  console.log(edit);

  res.render("index.ejs", { edit, setData });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
