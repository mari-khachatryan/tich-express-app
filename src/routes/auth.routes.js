const express = require("express");
const router = express.Router();

const {
  register,
  login,
  profile,
  createPost,
  getPosts,
  getPostById,
} = require("../controllers/auth.controller");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");

router.post("/register", register);

router.post("/login", login);

router.get("/profile", authMiddleware, profile);

router.post("/create-post", authMiddleware, upload.single("image"), createPost);

router.get("/posts", authMiddleware, getPosts);

router.get("/posts/:id", authMiddleware, getPostById);

module.exports = router;
