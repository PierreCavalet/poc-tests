const express = require("express");
const app = express();

const calc = require("./services/calc.js");

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/add/:input1/:input2", function(req, res) {
  const input1 = parseInt(req.params.input1);
  const input2 = parseInt(req.params.input2);

  const result = calc.sum(input1, input2);

  res.send(result.toString());
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
