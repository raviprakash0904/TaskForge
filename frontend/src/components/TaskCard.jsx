import React from "react"
import Progress from "./Progress"
import moment from "moment"
import AvatarGroup from "./AvatarGroup"
import { FaFileLines } from "react-icons/fa6"

const TaskCard = ({
  title,
  description,
  priority,
  status,
  progress,
  createdAt,
  dueDate,
  assignedTo,
  attachmentCount,
  completedTodoCount,
  todoChecklist,
  onClick,
}) => {
  const getStatusTagColor = () => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-700"
  
      case "In Progress":
        return "bg-orange-100 text-orange-700"
  
      case "Completed":
        return "bg-emerald-100 text-emerald-700"
  
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getPriorityTagColor = () => {
    switch (priority) {
      case "High":
        return "bg-rose-100 text-rose-700"
  
      case "Medium":
        return "bg-amber-100 text-amber-700"
  
      case "Low":
        return "bg-emerald-100 text-emerald-700"
  
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const isOverdue =
  status !== "Completed" &&
  moment(dueDate).isBefore(moment(), "day")

  return (
    <div
      className="bg-[#fffdf9] rounded-[28px] p-6 border border-[#ece7df] shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300 hover:scale-[1.01]cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-end gap-3 px-4">
        <div
          className={`text-[11px] font-medium ${getStatusTagColor()} px-4 py-0.5 rounded-full`}
        >
          {status}
        </div>

        <div
          className={`text-[11px] font-medium ${getPriorityTagColor()} px-4 py-0.5 rounded-full`}
        >
          {priority} Priority
        </div>
      </div>

      <div
  className={`px-4 border-l-[3px] ${
    status === "In Progress"
      ? "border-orange-400"
      : status === "Completed"
      ? "border-emerald-400"
      : "border-amber-400"
  }`}
>
        <p className="text-xl font-semibold tracking-tight text-gray-800 mt-4 line-clamp-2">
          {title}
        </p>

        <p className="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-[18px]">
          {description}
        </p>

        <p className="text-[13px] text-gray-700/80 font-medium mt-2 mb-2 leading-[18px]">
          Task Done:{" "}
          <span className="font-semibold text-gray-700">
            {completedTodoCount} / {todoChecklist.length || 0}
          </span>
        </p>

        <Progress progress={progress} status={status} />
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between my-1">
          <div>
            <label className="text-xs text-gray-500">Start Date</label>

            <p className="text-[13px] font-medium text-gray-900">
              {moment(createdAt).format("Do MMM YYYY")}
            </p>
          </div>

          <div>
            <label className="text-xs text-gray-500">Due Date</label>

            <p
              className={`text-[13px] font-medium ${
                isOverdue ? "text-red-500" : "text-gray-900"
                        }`}
                          >
                          {moment(dueDate).format("Do MMM YYYY")}
                        </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <AvatarGroup avatars={assignedTo || []} />

          {attachmentCount > 0 && (
            <div className="flex items-center gap-2 bg-orange-50 px-2.5 py-1.5 rounded-lg">
              <FaFileLines className="text-orange-500" />

              <span className="text-xs text-gray-900">{attachmentCount}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskCard
