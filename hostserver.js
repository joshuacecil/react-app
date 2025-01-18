const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello from server");
});

app.listen(5000, () => {
  console.log("listening");
});
