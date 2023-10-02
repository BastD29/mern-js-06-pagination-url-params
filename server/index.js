// import express from "express";
// import { data } from "./data.js";

// const app = express();

// const port = 6060;

// app.use(express.json());

// app.get("/users", (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   console.log("page:", page);
//   const limit = parseInt(req.query.limit) || 2;
//   // const limit = 2;
//   console.log("limit:", limit);
//   const totalPages = Math.ceil(data.length / limit);
//   console.log("totalPages:", totalPages);
//   const startIndex = (page - 1) * limit;
//   const endIndex = page - limit;
//   const results = data.slice(startIndex, endIndex);

//   res.json({
//     results,
//     totalPages: totalPages,
//     currentPage: page,
//   });
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));

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
