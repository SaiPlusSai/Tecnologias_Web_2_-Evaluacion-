/////////CRUD productos
const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Crear producto
router.post("/", async (req, res) => {
  try {
    const nuevoProducto = new Product(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener todos los productos
router.get("/", async (req, res) => {
  const productos = await Product.find();
  res.json(productos);
});

// Actualizar producto por ID
router.put("/:id", async (req, res) => {
  try {
    const productoActualizado = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar producto por ID
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
