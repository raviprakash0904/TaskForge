import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
})

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    dueDate: {
      type: Date,
      required: true,
    },

    assignedTo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
                },

    attachments: [
      {
        type: String,
      },
    ],


    todoChecklist: [todoSchema],

    progress: { type: Number, default: 0 },
  },
  { timestamps: true }
)

taskSchema.index({ status: 1 })
taskSchema.index({ priority: 1 })
taskSchema.index({ dueDate: 1 })
taskSchema.index({ assignedTo: 1 })
taskSchema.index({ project: 1 })

const Task = mongoose.model("Task", taskSchema)

export default Task
