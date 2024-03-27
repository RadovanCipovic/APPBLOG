import { Response } from "express";
import { CustomRequest } from "../../server";

export let updatePostController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let title = req.body.title;
  let content = req.body.content;
  let categoryId = req.body.categoryId;
  let id = req.body.id;

  // check if id is correct
  let response: any = await req.db.query(
    `select * from posts where id = ${id}`
  );

  if (response[0].length < 1) return res.send("Invalid post ID");

  let sqlFieldsUpdate = [];

  if (title) sqlFieldsUpdate.push(`title='${title}'`);
  if (content) sqlFieldsUpdate.push(`content='${content}'`);
  if (categoryId) {
    let response: any = await req.db.query(`
  select * from categories where id = ${categoryId}`);

    if (response && response[0].length < 1) {
      return res.send("This category doesn not exist");
    }
    sqlFieldsUpdate.push(`categoryId='${categoryId}'`);
  }

  if (sqlFieldsUpdate.length < 1)
    return res.send("nothing was provided to update..");

  let query = `update posts set ${sqlFieldsUpdate.join(", ")} where id=${id}`;
  await req.db.query(query);

  res.send("Post has been updated succesfully");
};
