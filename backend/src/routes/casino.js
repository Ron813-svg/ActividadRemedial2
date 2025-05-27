import express from "express";
import productsControl from "../controller/casinoController.js";

const router = express.Router();

router.route("/").get(productsControl.GET).post(productsControl.POST);

router.route("/:id").put(productsControl.PUT).delete(productsControl.DELETE);

export default router;
