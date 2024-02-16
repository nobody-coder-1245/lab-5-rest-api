import data from "./../db/db.json";
import { NextFunction, Request, Response } from "express";
import express from "express";

const router = express.Router();

const books: { id: string; name: string }[] = data;

router.get("/", (req: Request, res: Response) => {
  res.status(201).json(books);
});

router.post("/", (req: Request, res: Response) => {
  let data: (typeof books)[0] = req.body;
  if (!data) throw new Error("Request not found");
  if (!data.id) {
    const maxId = Math.max(...books.map((book) => +book.id)) + 1;
    data = { ...data, id: maxId.toString() };
  }
  const book = data;
  books.push(book);

  res.status(201).json(book);
});

router.put("/", (req: Request, res: Response) => {
  const data: (typeof books)[0] = req.body;
  const idTarget = data.id;
  if (!idTarget) throw new Error("Id not found");

  let target = {
    index: books.findIndex((b) => b.id === idTarget),
  };

  if (target) {
    books[target.index] = { ...data };
  }

  res.status(201).json({
    update: books[target.index],
    arr: books,
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  const indexTarget = books.findIndex(
    (b) => b.id === (req.body as (typeof books)[0]).id
  );

  if (!indexTarget) throw new Error("Id not found");

  books.splice(indexTarget, 1);

  res.status(201).json(books);
});

router.get("/:id", (req: Request, res: Response) => {
  res.status(201).json(books.find((book) => book.id === req.params.id));
});

export = router;
