const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const dbPassword = process.env.DB_PASSWORD;
    await mongoose.connect(`mongodb+srv://Jeronimo1520:${dbPassword}@cluster0.whzzoqw.mongodb.net/systemse?retryWrites=true&w=majority&appName=Cluster0`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB is connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;