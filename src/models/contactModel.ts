import { Schema, model } from "mongoose";

type ContactData = {
  email: string;
  message: string;
};

const contactSchema = new Schema<ContactData>({
  email: { type: String, required: true },
  message: { type: String, required: true, minlength: 20 },
});

export const Contact = model<ContactData>("Contact", contactSchema);
