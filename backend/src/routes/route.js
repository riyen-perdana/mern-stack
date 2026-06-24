import express from "express";
import { getAllPosts, getPosts, createPost, deletePost, updatePost } from "../controllers/postController.js";

const router = express.Router();

/**
 * Post Controller
 */
router.get("/post", getAllPosts);
router.get("/post/:id", getPosts);
router.post("/post", createPost);
router.delete("/post/:id", deletePost);
router.put("/post/:id", updatePost);

export default router;