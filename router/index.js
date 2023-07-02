const express = require("express");
const chat = require("../router/chatgpt/chat");
const test = require("../router/chatgpt/test");

const router = express.Router();

router.post("/completions", chat);
router.post("/test", test);

module.exports = router;