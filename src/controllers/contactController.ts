import { Request as Req, Response as Res } from "express";
//Model
import { Contact } from "../models/contactModel";

export const postMessage = async (req: Req, res: Res) => {
  const email = req.body.email;
  const message = req.body.message;

  if (!email || !message)
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and message",
    });
  try {
    await Contact.create({
      email,
      message,
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
  return res.status(200).json({
    status: "success",
  });
};
