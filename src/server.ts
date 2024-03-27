import express, { NextFunction } from "express";
import { db } from "./db";
import { Connection } from "mysql2/promise";
import { routes } from "./routes/index.routes";
import bodyParser from "body-parser";
export interface CustomRequest extends Request {
  db: Connection;
}

let app = express();

async function dbMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  req.db = await db;
  next();
}

// ----------- APP USE --------
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(dbMiddleware as any);
app.use("/api", routes);

// Slusanje porta na odredjeni port
app.listen(8800, () => {
  console.log("http://localhost:8800");
});
