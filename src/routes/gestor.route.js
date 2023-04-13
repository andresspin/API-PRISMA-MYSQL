import express from "express";
import {
  getAllgestor,
  getOnegestor,
  createGestor,
  updateGestor,
  deleteGestor,
} from "../controllers/gestor.controller.js";

const router = express.Router();

//rutas
// Select all gestores
router.get("/", getAllgestor);

// Select gestor by id
router.get("/:id", getOnegestor);

//Create a gestor endpoint
router.post("/", createGestor);

//update a gestor
router.put("/:id", updateGestor);

//delete
router.delete("/:id", deleteGestor);

export default router;
