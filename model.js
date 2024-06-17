const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  color: String,
  value: String,
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;
