//@ts-nocheck
import express from "express";
import { Medusa } from "medusajs";

const router = express.Router();

router.get("/products", (req, res) => {
  const medusa = new Medusa(app);
  const products = await medusa.products.all();

  res.json(products);
});

export default router;