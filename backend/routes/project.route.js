import express from "express"

import { verifyToken, adminOnly } from "../utils/verifyUser.js"

import {
  createProject,
  getProjects,
  getProjectById,
} from "../controller/project.controller.js"

const router = express.Router()

router.post("/", verifyToken, adminOnly, createProject)

router.get("/", verifyToken, getProjects)

router.get("/:id", verifyToken, getProjectById)

export default router