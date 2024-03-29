import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let getCategoryController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let categories = await CategoriesService.getCategories();
  res.send(categories);
};
