const User = require("../models/User");
const Product = require("../models/Product");
const Counter = require("../models/Counter");

exports.getCounters = async (req, res) => {
  const totalUsuarios = await User.countDocuments();
  const totalProductos = await Product.countDocuments();
  res.json({ totalUsuarios, totalProductos });
};

exports.getOperations = async (req, res) => {
  const contador = await Counter.findOne();
  res.json({ totalOperaciones: contador ? contador.totalOperaciones : 0 });
};
