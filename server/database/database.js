const mongoose = require("mongoose");

database = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect("mongodb://localhost/todo-app", connectionParams);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

module.exports = database;
