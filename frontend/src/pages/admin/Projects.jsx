import React from "react"
import DashboardLayout from "../../components/DashboardLayout"

const Projects = () => {
  return (
    <DashboardLayout activeMenu="Projects">
      <div className="bg-[#fffdf9] rounded-[28px] border border-[#ece7df] p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">
          Projects
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your team projects here.
        </p>
      </div>
    </DashboardLayout>
  )
}

export default Projects