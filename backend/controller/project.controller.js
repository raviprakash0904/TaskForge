import Project from "../models/project.model.js"
import Task from "../models/task.model.js"
import { errorHandler } from "../utils/error.js"

export const createProject = async (req, res, next) => {
  try {
    const { title, description, members } = req.body

    if (!title) {
      return next(errorHandler(400, "Project title is required"))
    }

    const project = await Project.create({
      title,
      description,
      admin: req.user.id,
      members: [...new Set([req.user.id, ...(members || [])])],
    })

    res.status(201).json({
      success: true,
      project,
      message: "Project created successfully",
    })
  } catch (error) {
    next(error)
  }
}

export const getProjects = async (req, res, next) => {
  try {
    let projects

    if (req.user.role === "admin") {
      projects = await Project.find({
        members: req.user.id,
      })
        .populate("members", "name email profileImageUrl")
        .populate("admin", "name email")
    } else {
      projects = await Project.find({
        members: req.user.id,
      })
        .populate("members", "name email profileImageUrl")
        .populate("admin", "name email")
    }

    res.status(200).json(projects)
  } catch (error) {
    next(error)
  }
}

export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("members", "name email profileImageUrl")
      .populate("admin", "name email")

    if (!project) {
      return next(errorHandler(404, "Project not found"))
    }

    const tasks = await Task.find({
      project: project._id,
    }).populate("assignedTo", "name email profileImageUrl")

    res.status(200).json({
      project,
      tasks,
    })
  } catch (error) {
    next(error)
  }
}

export const addMemberToProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return next(errorHandler(404, "Project not found"))
    }

    if (project.admin.toString() !== req.user.id.toString()) {
      return next(errorHandler(403, "Only admin can add members"))
    }

    const { memberId } = req.body

    if (!project.members.includes(memberId)) {
      project.members.push(memberId)
    }

    await project.save()

    res.status(200).json({
      success: true,
      message: "Member added successfully",
    })
  } catch (error) {
    next(error)
  }
}

export const removeMemberFromProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return next(errorHandler(404, "Project not found"))
    }

    if (project.admin.toString() !== req.user.id.toString()) {
      return next(errorHandler(403, "Only admin can remove members"))
    }

    project.members = project.members.filter(
      (member) => member.toString() !== req.params.memberId
    )

    await project.save()

    res.status(200).json({
      success: true,
      message: "Member removed successfully",
    })
  } catch (error) {
    next(error)
  }
}