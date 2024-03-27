import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { postRoutes } from "./post.routes";

export let routes = Router();

routes.use("/category", categoryRoutes);
routes.use("/post", postRoutes);
