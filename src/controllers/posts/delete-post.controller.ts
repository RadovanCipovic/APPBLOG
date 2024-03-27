import { Response } from "express";
import { CustomRequest } from "../../server";

export let deletePostController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let postResponse = await req.db.query(
    `select * from posts where id=${req.params.id}`
  );
  if (postResponse[0].length < 1)
    return res.status(500).send("Given post id does not exist....");

  let response = req.db.query(`delete from posts where id = ${req.params.id}`);

  res.send("Post has been deleted successfully");
};
