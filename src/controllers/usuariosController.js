import bdUsuarios from "../infra/bdUsuarios.js"
import Usuarios from "../models/Usuarios.js";

class UsuariosController {

   static criarTabela(req, res) {
      try{
         const tabela_usuarios = `
            CREATE TABLE IF NOT EXISTS usuarios (
               id INTEGER PRIMARY KEY NOT NULL,
               nome VARCHAR(64),
               sobrenome VARCHAR(64),
               email VARCHAR(64)
            )
         `;
   
         bdUsuarios.run(tabela_usuarios, (e) => {
            if (e) {
               throw new Error(e.message);
            } else {
               return res.send("Tabela criada com sucesso");
            }
         });

      } catch (error){
         return res.send(error)
      }
   }

   static insertInto(req, res) {
      try{
         
         const info_usuarios = `
         INSERT INTO usuarios VALUES 
            (10,"Murilo", "Antunes", "murilo@antunes.com")
         `;

         bdUsuarios.run(info_usuarios, (e) => {
            if (e) {
               console.log('Não foi possivel inserir os dados')
            } else {
               return res.send("Dados inseridos com sucesso");
            }
         });
      } catch (error) {
         return res.send(error)
      }
   }

   static selectAll(req, res) {
      try{
         const select_usuarios = `
            SELECT * FROM usuarios
         `;
         
         bdUsuarios.all(select_usuarios, (e, rows) => {
            if (e) {
               throw new Error(e.message)
            } else {
               return res.status(200).json(rows);
            }
         });         
      } catch(error){
         return res.send(error)
      }
   }
}

export default UsuariosController;

/* let cont = 0

function contador() {
   return cont += 1
}

export function getUsuario(app){
   app.get("/usuario/:id", (req, res) => {
      const id = parseInt(req.params.id)
      res.send(DbMetodosUsuario.selectAll())
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

DbMetodosUsuario.createTable(); */