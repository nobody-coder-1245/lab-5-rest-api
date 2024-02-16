import { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import express from "express";
import BookRouter from "./routes/bookRoute";

// server.js
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/books", BookRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
