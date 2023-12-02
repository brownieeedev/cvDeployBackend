import express from "express";
const projectRouter = express.Router();

//Project Controllers
import { getAllProjects } from "../controllers/projectsController";

projectRouter.get("/all", getAllProjects);

export default projectRouter;
