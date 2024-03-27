import { Response } from "express";
import { CustomRequest } from "../../server";

export let getCategoryController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let response = await req.db.query(`select * from categories`);

  res.send(response[0]);
};
