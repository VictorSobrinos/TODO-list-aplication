const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const taskSchema = new Schema(
  {
    taskname: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    description: {
      type: String
    },
    state: {
      type: Boolean
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;
