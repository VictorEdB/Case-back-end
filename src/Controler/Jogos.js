import { openDb } from "../ConfigDB.js";

export async function selectJogos(req, res){
    openDb().then(db=>{
         db.all("SELECT * FROM jogos")
       .then(jogos=>res.json(jogos))
    })
}

export async function selectJogo(req, res){
    let id = req.body.id;
    openDb().then(db=>{
         db.get("SELECT * FROM jogos WHERE id = ?", [id])
        .then(jogo => res.json(jogo))
     })
 }

// export async function insertJogo(req, res){
//     let jogo = req.body;
//     openDb().then(db=>{
//         db.run("INSERT INTO jogos (nome, ano, genero) VALUES (?,?,?)", [jogo.nome, jogo.ano, jogo.genero])
//     })
//     res.json({
//         "statusCode":"200"
//     })
// }

export async function insertJogo(req, res) {
    const jogo = {
      id: req.body.id,
      nome: req.body.nome,
      ano: req.body.ano,
      genero: req.body.genero
    };
    openDb().then((db) => {
      db.run(
        'INSERT INTO jogos (id, nome, ano, genero) VALUES (?,?, ?, ?)',
        [jogo.id, jogo.nome, jogo.ano, jogo.genero]
      );
    });
    res.json({
      "statusCode": "200"
    });
  }
  


// export async function updateJogo(req, res){
//     let jogo = req.body;
//     openDb().then(db=>{
//         db.run("UPDATE jogos SET nome = ?, ano = ?, genero = ? WHERE id = ?", [jogo.nome, jogo.ano, jogo.genero, jogo.id])
//     })
//     res.json({
//         "statusCode":"200"
//     })
// }

export async function updateJogo(req, res) {
    const nome = req.body.nome;
    const ano = req.body.ano;
    const genero = req.body.genero;
    const id = req.params.id;
  
    const result = req.params.id;
    if (result.erro) {
      res.status(500).send('Erro ao atualizar o jogo');
    }
    res.send({ "Msg": 'Jogo alterado com sucesso' });
  
    openDb().then((db) => {
      db.run(
        'UPDATE jogos SET nome = ?, ano = ?, genero = ? WHERE id = ?',
        [nome, ano, genero, id],
      );
    });
  }

//  export async function deleteJogo(req, res){
//     let id = req.body.id;
//      openDb().then(db=>{
//          db.get("DELETE FROM jogos WHERE id = ?", [id])
//         .then(res=>res)
//      })
//      res.json({
//         "statusCode":"200"
//     })
//  }


export async function deleteJogo(req, res) {
    const id = req.params.id;
    if (id.erro) {
      res.status(500).send('Erro ao deletar o Jogo');
    }
  
    res.send({ mensagem: 'Jogo removido com sucesso' });
  
    openDb().then((db) => {
      db.run('DELETE FROM jogos WHERE id = ?', [id]);
    });
  }