import { Request, Response } from "express";

// server.js
const express = require("express");
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
