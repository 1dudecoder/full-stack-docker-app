import express from "express";
import userv1Router from "./v1/index"

let router = express.Router();
router.use("/v1", userv1Router);

export default router;
