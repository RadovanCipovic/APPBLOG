import { Response } from "express";
import { CustomRequest } from "../../server";

export let createPostController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let title = req.body.title;
  let content = req.body.content;
  let categoryId = req.body.categoryId;
  let response: any = await req.db.query(`
  select * from categories where id = ${categoryId}`);

  if (response && response[0].length < 1) {
    return res.send("This category doesn not exist");
  }

  let query = `insert into posts (title, content, categoryId) values('${title}', '${content}', ${categoryId})`;
  await req.db.query(query);

  res.send("Post has been created succesfully");
};
