import express from "express";
import {
  createProjectGestor,
  getAllGestorProject,
} from "../controllers/gestorProject.controller.js";



const router = express.Router();


//Create a project
router.post("/",createProjectGestor);
router.get("/", getAllGestorProject);


export default router;