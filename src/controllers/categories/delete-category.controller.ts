import { Response } from "express";
import { CustomRequest } from "../../server";

export let deleteCategoryController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let categoryId = req.params.categoryId;
  await req.db.query(`delete from categories where id = ${categoryId}`);

  res.send("Category is deleted");
};
