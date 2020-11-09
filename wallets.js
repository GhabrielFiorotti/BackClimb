const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Wallets = require('./model/Wallet.js');
const jwt = require('jsonwebtoken');
require('dotenv/config');


router.post('/cadastro', async (req, res) => {
    try {
        const resposta = await Wallets.create({
            user_id: req.body.user_id,
            name: req.body.name,
            description: req.body.description
        });
        if (resposta) {
            const response = {
                mensagem: "Carteira criada com sucesso",
                CarteiraCriada: {
                    description: req.body.description,
                }
            }
            return res.json(response, 201);
        }
    } catch (error) {
        console.log(error);
        return res.json({ Mensagem: "Erro ao inserir no banco" }, error, 400);
    }
});

module.exports = router;

