import { Request as Req, Response as Res } from "express";
//import ProjectModel
import { Project } from "../models/projectModel";

export const getAllProjects = async (req: Req, res: Res) => {
  //getting all projects with Model
  const projects = await Project.find({ visible: true });

  if (!projects)
    return res.status(404).json({
      status: "fail",
      message: "No projects found",
    });

  return res.status(200).json({
    status: "success",
    data: projects,
  });
};
