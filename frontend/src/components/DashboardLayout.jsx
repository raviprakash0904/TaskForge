import React from "react"
import { useSelector } from "react-redux"
import Navbar from "./Navbar"
import SideMenu from "./SideMenu"

const DashboardLayout = ({ children, activeMenu }) => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar activeMenu={activeMenu} />

      {currentUser && (
        <div className="flex flex-1 overflow-hidden">
          <div className="max-[1080px]:hidden overflow-y-auto">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="grow px-8 py-6 bg-[#f8f5ef] overflow-y-auto min-h-0">{children}</div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout
