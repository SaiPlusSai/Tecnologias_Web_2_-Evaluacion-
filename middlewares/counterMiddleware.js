const Counter = require("../models/Counter");

const counterMiddleware = async (req, res, next) => {
  let contador = await Counter.findOne();

  if (!contador) {
    contador = new Counter({ totalOperaciones: 1 });
  } else {
    contador.totalOperaciones += 1;
  }

  await contador.save();
  next();
};

module.exports = counterMiddleware;
