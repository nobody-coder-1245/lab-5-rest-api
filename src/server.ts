import { Request, Response } from "express";
import data from "./db/db.json";
import bodyParser from "body-parser";
import express from "express";

// server.js
const app = express();

const books: { id: string; name: string }[] = data;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/books", (req: Request, res: Response) => {
  res.json(books);
});

app.get("/books/:id", (req: Request, res: Response) => {
  res.json(books.find((book) => book.id === req.params.id));
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
