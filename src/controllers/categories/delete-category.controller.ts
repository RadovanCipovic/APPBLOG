import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let deleteCategoryController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let categoryId = req.params.categoryId;
  await CategoriesService.deleteCategory(categoryId);

  res.send("Category is deleted");
};
