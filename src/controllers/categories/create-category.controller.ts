import { Response } from "express";
import { CustomRequest } from "../../server";

export let createCategoryController = async (
  req: CustomRequest | any,
  res: Response
) => {
  let title = req.body.title;
  let response: any = await req.db.query(
    `insert into categories (title) values('${title}') `
  );
  let categoryId = response[0].insertId;
  let categoryResponse: any = await req.db.query(
    `select * from categories where id = ${categoryId}`
  );
  res.send(categoryResponse[0][0]);
};
