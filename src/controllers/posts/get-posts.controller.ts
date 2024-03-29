import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostService } from "../../services/post.services";

export let getPostController = async (req: CustomRequest, res: Response) => {
  let posts = await PostService.getPosts();

  res.send(posts);
};
