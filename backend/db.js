const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
  } catch (err) {
    console.error(err);
    propTypesSuccess.exit(1);
  }
};

module.exports = connectDB;
