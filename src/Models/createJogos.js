import { openDb } from "../ConfigDB.js";

export async function createTableJogos(){
    openDb().then(db=>{
        db.exec("CREATE TABLE IF NOT EXISTS jogos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, ano INTEGER, genero VARCHAR(50))")
    })
}