const Color = require("./model");

exports.searchQuery = async (req, res) => {
  const { query } = req.params;
  const color = await Color.find({ color: query.toString().toLowerCase() });
  res.json({ colors: color });
};

exports.getAll = async (req, res) => {
  const colors = await Color.find().sort({ color: 1 });
  res.json({ colors: colors });
};
