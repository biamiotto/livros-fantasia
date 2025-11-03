import { Router } from "express";
import * as LivrosController from './../controllers/livrosController.js';

const router = Router();

router.get("/", LivrosController.listarTodos);
router.get("/:id", LivrosController.listarUm);
router.post("/", LivrosController.criar);
router.delete("/:id", LivrosController.deletar);
router.put("/:id", LivrosController.atualizar);

export default router;