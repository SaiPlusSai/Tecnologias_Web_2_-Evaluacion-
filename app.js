const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const counterMiddleware = require("./middlewares/counterMiddleware");
const { getCounters, getOperations } = require("./controllers/counterController");

const app = express();
connectDB(); // Conectar a MongoDB Atlas

app.use(express.json());
app.use(cors());
app.use(counterMiddleware); // Middleware de contador

app.use("/usuarios", userRoutes);
app.use("/productos", productRoutes);

app.get("/contadores", getCounters);
app.get("/operaciones", getOperations);

module.exports = app;
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
