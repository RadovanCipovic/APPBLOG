import { Router } from "express";
import { createPostController } from "../controllers/posts/create-post.controller";
import { getPostController } from "../controllers/posts/get-posts.controller";
import { updatePostController } from "../controllers/posts/update-post.controller";
import { deletePostController } from "../controllers/posts/delete-post.controller";

export let postRoutes = Router();

postRoutes.post("", createPostController as any);
postRoutes.get("", getPostController as any);
postRoutes.patch("", updatePostController as any);
postRoutes.delete("/:id", deletePostController as any);
