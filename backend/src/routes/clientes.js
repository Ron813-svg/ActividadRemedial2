import express from "express";
import clientesControl from "../controller/clientesController.js";

const router = express.Router();

router.route("/").get(clientesControl.GET).post(clientesControl.POST);

router.route("/:id").put(clientesControl.PUT).delete(clientesControl.DELETE);

export default router;
