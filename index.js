const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./connection");
const router = require("./router");

connectDB(
  "mongodb+srv://geobook:diYKg0gd7TGUySs8@cluster0.2wyumqd.mongodb.net/SearchDB"
);
const app = express();

app.use(bodyparser.json());
app.use(cors());

app.use("/post", router);

app.listen(3000, () => {
  console.log("Server Started");
});
