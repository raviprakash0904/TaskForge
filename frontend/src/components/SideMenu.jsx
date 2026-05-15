import React, { useEffect, useState } from "react"
import axiosInstance from "../utils/axioInstance"
import { useDispatch, useSelector } from "react-redux"
import { signOutSuccess } from "../redux/slice/userSlice"
import { useNavigate } from "react-router-dom"
import { SIDE_MENU_DATA, USER_SIDE_MENU_DATA } from "../utils/data"

const SideMenu = ({ activeMenu }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [SideMenuData, setSideMenuData] = useState([])
  const { currentUser } = useSelector((state) => state.user)

  const handleClick = (route) => {

    if (route === "logout") {
      handleLogut()
      return
    }

    navigate(route)
  }

  const handleLogut = async () => {
    try {
      const response = await axiosInstance.post("/auth/sign-out")

      if (response.data) {
        dispatch(signOutSuccess())

        navigate("/login")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (currentUser) {
      setSideMenuData(
        currentUser?.role === "admin" ? SIDE_MENU_DATA : USER_SIDE_MENU_DATA
      )
    }

    return () => {}
  }, [currentUser])

  return (
    <div className="w-72 p-6 h-full min-h-full bg-[#fffdf9] border-r border-[#ece7df] flex flex-col lg:border-r lg:border-gray-200">
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden mb-4 border-2 border-orange-100">
          <img
            src={currentUser?.profileImageUrl || null}
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>

        {currentUser?.role === "admin" && (
          <div className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
            Admin
          </div>
        )}

        <h5 className="text-lg font-semibold text-gray-800">
          {currentUser?.name || ""}
        </h5>

        <p className="text-sm text-gray-500">{currentUser?.email || ""}</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {SideMenuData.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] px-5 py-3 rounded-2xl transition-all duration-200 hover:scale-[1.02] mb-3 cursor-pointer ${
              activeMenu === item.label
                ? "text-orange-600 bg-orange-100/70 shadow-sm"
                : "text-gray-700 hover:bg-orange-50"
            }`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-2xl" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
