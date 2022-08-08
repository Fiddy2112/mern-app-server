import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
} from "../controllers/postsControllers.js";
const router = express.Router();
//https://localhost:5000/posts
router.get("/", getPosts);

router.post("/", createPost);

router.post("/update", updatePost);

export default router;
