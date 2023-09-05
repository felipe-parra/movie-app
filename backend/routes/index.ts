import { Router } from "express";
import movieRoutes from "./movie.routes";

const router = Router();

router.get("/ping", (req, res) => {
  res.send("It works!");
});

router.use("/movies", movieRoutes);

export default router;
