import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let createCategoryController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let title = req.body.title;

  let response: any = await CategoriesService.createCategory(title);
  let categoryId = response.insertId;
  let category: any = await CategoriesService.getCategoryId(categoryId);
  res.send(category);
};
