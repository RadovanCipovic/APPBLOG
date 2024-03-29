import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostService } from "../../services/post.services";
import { CategoriesService } from "../../services/categories.service";

export let createPostController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let title = req.body.title;
  let content = req.body.content;
  let categoryId = req.body.categoryId;

  let category: any = await CategoriesService.getCategoryId(categoryId);

  // ako ne postoji kategorija onda error = ->>
  if (!category) {
    return res.send("This category doesn not exist");
  }

  await PostService.createPost({ title, content, categoryId });

  res.send("Post has been created succesfully");
};
