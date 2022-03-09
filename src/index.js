import express from "express";
import * as usuariosController from "./controllers/usuariosController.js";
import * as tarefasController from "./controllers/tarefasController.js";

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, () => console.log("Servidor funcionando em http://localhost:"+port))

usuariosController.getUsuario(app)
usuariosController.getUsuarios(app)
usuariosController.postUsuario(app)
usuariosController.deleteUsuario(app)
usuariosController.putUsuario(app)

tarefasController.getTarefa(app)
tarefasController.getTarefas(app)
tarefasController.postTarefa(app)