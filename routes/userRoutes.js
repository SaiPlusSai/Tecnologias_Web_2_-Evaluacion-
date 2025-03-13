/////////CRUD usuarios
const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Crear usuario
router.post("/", async (req, res) => {
  try {
    const nuevoUsuario = new User(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  const usuarios = await User.find();
  res.json(usuarios);
});

// Actualizar usuario por ID
router.put("/:id", async (req, res) => {
  try {
    const usuarioActualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar usuario por ID
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
