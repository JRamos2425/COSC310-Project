import express from "express";
import SMSController from "./api/sms.js";

const router = express.Router();

router.route('/:number')
  .get(SMSController.apiSMSNotification)

export default router


