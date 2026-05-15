import {
  MdDashboard,
  MdDashboardCustomize,
  MdAddTask,
  MdManageHistory,
  MdFolder,
  MdOutlinePendingActions,
  MdTaskAlt,
  MdLogout,
  MdPeopleAlt,
  MdOutlineTaskAlt
} from "react-icons/md"

export const SIDE_MENU_DATA = [
  {
    id: 1,
    label: "Dashboard",
    icon: MdDashboardCustomize,
    path: "/admin/dashboard",
  },
  {
    id: 2,
    label: "Manage Task",
    icon: MdManageHistory,
    path: "/admin/tasks",
  },
  {
    id: 3,
    label: "Create Task",
    icon: MdAddTask,
    path: "/admin/create-task",
  },
  {
    id: 4,
    label: "Team Members",
    icon: MdPeopleAlt,
    path: "/admin/users",
  },
  {
    id: 5,
    label: "Logout",
    icon: MdLogout,
    path: "logout",
  },
  {
    id: 6,
    label: "Projects",
    icon: MdFolder,
    path: "/admin/projects",
  }
]

export const USER_SIDE_MENU_DATA = [
  {
    id: 1,
    label: "Dashboard",
    icon: MdDashboardCustomize,
    path: "/user/dashboard",
  },
  {
    id: 2,
    label: "My Tasks",
    icon: MdOutlineTaskAlt,
    path: "/user/tasks",
  },
  {
    id: 3,
    label: "Logout",
    icon: MdLogout,
    path: "logout",
  },
]

export const PRIORITY_DATA = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
]

export const STATUS_DATA = [
  { label: "Pending", value: "Pending" },
  { label: "In Progress", value: "In Progress" },
  { label: "Completed", value: "Completed" },
]
