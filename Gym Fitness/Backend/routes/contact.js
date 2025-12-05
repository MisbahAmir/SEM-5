import express from "express";
import { createContact, getAllContacts, deleteContact } from "../controller/contactController.js";

const router = express.Router();

router.post("/", createContact);            // User form submit
router.get("/", getAllContacts);            // Admin data
router.delete("/:id", deleteContact);       // Delete a message

export default router;
