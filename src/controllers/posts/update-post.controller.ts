import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostService } from "../../services/post.services";
import { CategoriesService } from "../../services/categories.service";

export let updatePostController = async (
  req: CustomRequest | any,
  res: Response
) => {
  try {
    let title = req.body.title;
    let content = req.body.content;
    let categoryId = req.body.categoryId;
    let id = req.body.id;

    // check if id is correct
    let post = await PostService.getPostById(id);
    if (!post) throw new Error("Invalid post ID");

    await PostService.updatePost({
      title,
      content,
      categoryId,
      id,
    });
    res.send("Post has been updated succesfully");
  } catch (e) {
    return res.status(500).send(e);
  }
};
