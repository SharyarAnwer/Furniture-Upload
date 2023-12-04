const express = require("express");

const router = express.Router();

const sendEmail = require("./controller").sendEmail;

router.post("/send-confirmation-email", async (req, res) => {
  const response = await sendEmail(req);

  res.status(201).json({
    response: response,
  });
  
});

module.exports = router;
