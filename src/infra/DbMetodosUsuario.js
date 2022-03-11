import bdUsuarios from "./bdUsuarios.js";

class DbMetodosUsuario {
   static createTable() {
      const tabela_usuarios = `
            CREATE TABLE IF NOT EXISTS usuarios (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               nome VARCHAR(64),
               sobrenome VARCHAR(64),
               email VARCHAR(64)
            )
            `;
      bdUsuarios.run(tabela_usuarios, (e) => {
         if (e) {
            console.log("erro ao criar Tabela");
         } else {
            console.log("Tabela criada com sucesso");
         }
      });
   }


static insertInto() {
   const info_usuarios = `
         INSERT INTO usuarios VALUES 
            ("1","Murilo", "Antunes", "murilo@antunes.com"), 
            ("2","Arcenio", "Souza", "arcenio@souza.com"),
            ("3","Bruno", "Andreotti", "bruno@andreotti.com"),
            ("4","Maysa", "Pereira", "maysa@pereira.com")
         `;
   bdUsuarios.run(info_usuarios, (e) => {
      if (e) {
         console.log("erro ao inserir dados na tabela", e);
      } else {
         console.log("Dados inseridos com sucesso");
      }
   });
}

static selectAll() {
   const select_usuarios = `
         SELECT * FROM usuarios
         `;
   bdUsuarios.all(select_usuarios, (e, rows) => {
      if (e) {
         console.log("erro ao selecionar usuarios", e);
      } else {
         console.log(rows);
         return rows
      }
   });
}
}

export default DbMetodosUsuario;
