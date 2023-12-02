import express from "express";
const contactRouter = express.Router();

import { postMessage } from "../controllers/contactController";

contactRouter.post("/create", postMessage);

export default contactRouter;
