const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  ocupacion: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema, "sample.usuarios");
