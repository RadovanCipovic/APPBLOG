import { Response } from "express";
import { CustomRequest } from "../../server";

export let updateCategoryController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let data = req.body;
  await req.db.query(
    `update categories set title='${data.title}' where id = ${data.id}`
  );

  res.send("Category is updated");
};
