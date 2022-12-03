import express from "express";
import EmailController from "./api/email.js"

const router = express.Router();

router.route('/:email')
  .get(EmailController.apiEmailNotification)

export default router


