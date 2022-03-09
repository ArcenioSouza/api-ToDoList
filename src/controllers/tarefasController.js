import Tarefas from "../models/Tarefas.js"
import { bdTarefas } from "../infra/bdTarefas.js"

let cont = 0

function contador() {
   return cont += 1
}

export function getTarefas(app){
   app.get("/tarefas", (req, res) => {
      res.send(Object.values(bdTarefas))
   })
}

export function getTarefa(app){
   app.get("/tarefa/:id", (req, res) => {
      const id = parseInt(req.params.id)
      res.send(bdTarefas[id - 1])
   })
}

export function postTarefa(app){
   app.post("/tarefas", (req, res) => {
      const tarefa = new Tarefas(contador(), req.body.titulo, req.body.descricao)
      bdTarefas.push(tarefa)
      res.send(tarefa)
   })
}