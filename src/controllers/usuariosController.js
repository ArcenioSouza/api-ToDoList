import Usuarios from "../models/Usuarios.js"
import bdUsuarios from "../infra/bdUsuarios.js"
import DatabaseMetodos from "../infra/DatabaseMetodos.js"

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
      const id = parseInt(req.params.id)
      res.send(bdUsuarios[id - 1])
   })
}

export function postUsuario(app){
   app.post("/usuarios", (req, res) => {
      const usuario = new Usuarios(contador(), req.body.nome, req.body.sobrenome, req.body.dataNascimento, req.body.email, req.body.telefone)
      bdUsuarios.push(usuario)
      res.send(usuario)
   })
}

export function deleteUsuario(app){
   app.delete("/usuario/:id", (req, res) => {
      const id = parseInt(req.params.id)
      bdUsuarios.splice(id - 1, 1)      
      res.send(`Usuario ${bdUsuarios[id - 1].nome} deletado com sucesso`)
   })
}

export function putUsuario(app){
   app.put("/usuario/:id", (req, res) => {
      const id = parseInt(req.params.id)
      const novoUsuario = new Usuarios(id, req.body.nome, req.body.sobrenome, req.body.dataNascimento, req.body.email, req.body.telefone)
      bdUsuarios.splice(id - 1, 1, novoUsuario)
      res.send(`Registo do id ${id} atualizado`)
   })
}