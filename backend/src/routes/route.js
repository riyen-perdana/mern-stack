import express from "express";
import { getAllPosts, getPost, createPost, deletePost, updatePost } from "../controllers/postController.js";

const router = express.Router();

/**
 * Post Controller
 */
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);
router.post("/post", createPost);
router.delete("/post/:id", deletePost);
router.put("/post/:id", updatePost);

export default router;