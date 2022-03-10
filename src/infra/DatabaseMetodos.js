import bdUsuarios from "./bdUsuarios.js";

class DatabaseMetodos {
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
}

DatabaseMetodos.createTable();

export default DatabaseMetodos;
