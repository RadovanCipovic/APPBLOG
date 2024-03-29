import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let updateCategoryController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let data = req.body;

  await CategoriesService.updateCategory(data.title, data.id);
  res.send("Category is updated");
};
