import express from "express";
import { addPost, getPost, getPosts } from "../controllers/handlingPosts.cjs";

const router = express.Router();

router.get("/blog", getPosts);
router.get("/blog/:id", getPost);
router.post("/blog", addPost);
router.delete("/blog/:id", deletePost);
router.put("/blog/:id", updatePost);

export default router;
