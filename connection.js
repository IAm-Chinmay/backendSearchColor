const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected To Database"))
    .catch((e) => console.log(e));
};

module.exports = { connectDB };
