import express from "express";
import { users } from "./users.js";
import { paginatedResults } from "./paginatedResults.js";

const app = express();

const port = 6060;

app.use(express.json());

app.get("/users", paginatedResults(users), (req, res) => {
  res.json(res.paginatedResults);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
