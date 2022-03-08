import Usuarios from "../models/Usuarios.js"
import { bdUsuarios } from "../../infra/bdUsuarios.js"

let cont = 0

function contador() {
   return cont += 1
}

export function getUsuarios(app){
   app.get("/usuarios", (req, res) => {
      res.send(Object.values(bdUsuarios))
   })
}

export function getUsuario(app){
   app.get("/usuario/:id", (req, res) => {
      const id = req.params.id
      res.send(bdUsuarios[id])
   })
}

export function postUsuario(app){
   app.post("/usuarios", (req, res) => {
      const usuario = new Usuarios(contador(), req.body.nome, req.body.sobrenome, req.body.dataNascimento)
      bdUsuarios.push(usuario)
      res.send(usuario)
   })
}