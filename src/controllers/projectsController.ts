import { Request as Req, Response as Res } from "express";
//import ProjectModel
import { Project } from "../models/projectModel";
//Types
import { ProjectData } from "../models/projectModel";

export const getAllProjects = async (req: Req, res: Res) => {
  console.log("getAllProjects");
  //getting all projects with Model
  let projects: ProjectData[] = [];
  if (process.env.NODE_ENV === "production") {
    console.log("inside production");
    projects = await Project.find({ visible: true });
  } else {
    console.log("inside development");
    projects = await Project.find();
  }

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
