const express = require("express");
const app = express();

app.set("view engine", "ejs");

const calc = require("./services/calc.js");

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/form", function (req, res) {
  const input1 = parseInt(req.query.input1);
  const input2 = parseInt(req.query.input2);

  if (Number.isNaN(input1) || Number.isNaN(input2)) {
    res.render("form", {
      payload: {}
    });
    return;
  }

  const result = calc.sum(input1, input2);
  res.render("form", {
    payload: {
      result
    }
  });
});

app.get("/add/:input1/:input2", function (req, res) {
  const input1 = parseInt(req.params.input1);
  const input2 = parseInt(req.params.input2);

  const result = calc.sum(input1, input2);

  res.json({
    result
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});