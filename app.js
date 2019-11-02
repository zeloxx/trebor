const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
