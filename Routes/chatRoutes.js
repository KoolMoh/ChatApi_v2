const { Router } = require("express");
const authenticateJWT = require("../Middlewares/authMiddleware.js");
const { body } = require('express-validator');
const router = Router();

const { startChat } = require('../Controllers/chatController.js');

// idk what this endpoint is for so i am leaving it till we get closer to client
router.get(
  "/chat", 
  authenticateJWT, 
  async (req, res) => {
  
});

// Does not work right now
router.post(
  "/start-chat",
  [
    body("participants")
    .isArray({ min: 2 }).withMessage("Two participants weren\'t found")
  ],
  authenticateJWT, 
  startChat
);

module.exports = router;