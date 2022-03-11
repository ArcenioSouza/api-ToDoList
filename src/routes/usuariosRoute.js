import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";

const router = Router()

router.get("/usuarios", UsuariosController.selectAll)

router.post("/usuarios", UsuariosController.insertInto)

export default router;