import bdTarefas from "./bdTarefas.js";

class DbMetodosTarefa {
   static createTable() {
      const tabela_tarefas = `
            CREATE TABLE IF NOT EXISTS tarefas (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               titulo VARCHAR(64),
               descricao VARCHAR(150),
               data DATE
            )
            `;
      bdTarefas.run(tabela_tarefas, (e) => {
         if (e) {
            console.log("erro ao criar Tabela", e);
         } else {
            console.log("Tabela criada com sucesso");
         }
      });
   }
}

DbMetodosTarefa.createTable();

export default DbMetodosTarefa;