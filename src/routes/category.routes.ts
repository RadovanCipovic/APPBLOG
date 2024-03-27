import { Response, Router } from "express";
import { Connection } from "mysql2/promise";
import { createCategoryController } from "../controllers/categories/create-category.controller";
import { deleteCategoryController } from "../controllers/categories/delete-category.controller";
import { updateCategoryController } from "../controllers/categories/update-category.controller";
import { getCategoryController } from "../controllers/categories/get-category.controller";

export let categoryRoutes = Router();

// ----------- POST -----------
categoryRoutes.post("", createCategoryController as any);

// ------------- DELETE --------

categoryRoutes.delete("/:categoryId", deleteCategoryController as any);

// ------------- UPDATE ----------

categoryRoutes.patch("", updateCategoryController as any);

// ------------ GET --------------

categoryRoutes.get("", getCategoryController as any);
