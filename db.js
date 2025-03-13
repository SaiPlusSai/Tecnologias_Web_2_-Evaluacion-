const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log("🔍 Conectando a:", process.env.MONGO_URI);
    
    await mongoose.connect(process.env.MONGO_URI); // Ya no es necesario `useNewUrlParser` ni `useUnifiedTopology`

    console.log('✅ Conectado a MongoDB Atlas');
} catch (error) {
        console.error('❌ Error conectando a MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

