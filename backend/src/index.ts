import express from "express";
import cors from "cors";

import { PORT } from "./utils/envirotmen";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("status ok");
});

app.use((_req, res) => {
  res.status(404).send({ message: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
