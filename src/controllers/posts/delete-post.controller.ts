import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostService } from "../../services/post.services";

export let deletePostController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let post: any = await PostService.getPostById(req.params.id);
  if (post[0].length < 1)
    return res.status(500).send("Given post id does not exist....");

  PostService.deletePostById(req.params.id);

  res.send("Post has been deleted successfully");
};
