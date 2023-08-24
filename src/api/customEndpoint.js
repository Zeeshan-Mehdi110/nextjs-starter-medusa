// pages/api/customEndpoint.js

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Custom endpoint response" });
});

export default router;
