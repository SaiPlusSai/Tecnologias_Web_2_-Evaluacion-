const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema({
  totalOperaciones: { type: Number, default: 0 }
});

module.exports = mongoose.model("Counter", CounterSchema);
