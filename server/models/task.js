const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);
taskSchema.plugin(autoIncrement.plugin, "task");
module.exports = mongoose.model("task", taskSchema);
