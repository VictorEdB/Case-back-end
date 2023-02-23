import { Router } from "express";
import { insertJogo, selectJogos, selectJogo, updateJogo, deleteJogo } from './Controler/Jogos.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": "200",
        "msg": "Api rodando"
    })
})

router.get('/jogos', selectJogos);
router.get('/jogo', selectJogo);
router.post('/jogo', insertJogo);
router.put('/jogo', updateJogo);
router.delete('/jogo', deleteJogo);

export default router;
