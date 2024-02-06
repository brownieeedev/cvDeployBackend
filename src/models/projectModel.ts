import { Schema, model } from "mongoose";

type Technologies = {
  imgPath: string;
  tooltip: string;
};

export type ProjectData = {
  title: string;
  projectImages: string[];
  backendTechnologies: Technologies[];
  frontendTechnologies: Technologies[];
  databaseTechnologies: Technologies[];
  description: string;
  challenges: string;
  githubLink?: string;
  imgSliderWidth?: string;
  status?: "deployed" | "inprogress" | "finished";
  visible?: boolean;
};

const projectSchema = new Schema<ProjectData>({
  title: { type: String, required: true, unique: true },
  projectImages: { type: [String], minlength: 3, required: true },
  backendTechnologies: { type: [Object], minlength: 1, required: true },
  frontendTechnologies: { type: [Object], minlength: 1, required: true },
  databaseTechnologies: { type: [Object], minlength: 1, required: true },
  description: { type: String, required: true },
  challenges: { type: String, required: true },
  githubLink: { type: String },
  imgSliderWidth: { type: String },
  status: { type: String },
  visible: { type: Boolean, required: true, default: false },
});

export const Project = model<ProjectData>("Project", projectSchema, "Project");
