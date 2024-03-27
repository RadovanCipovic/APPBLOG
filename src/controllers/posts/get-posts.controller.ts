import { Response } from "express";
import { CustomRequest } from "../../server";

export let getPostController = async (req: CustomRequest, res: Response) => {
  let response = await req.db.query(`select * from posts`);
  res.send(response[0]);
};
