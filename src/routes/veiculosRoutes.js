const express = require("express");
const {
  getHomePage,
  addVeiculo,
  updateVeiculo,
  deleteVeiculo,
} = require("../controllers/veiculosController");

const router = express.Router();

// Rota para a página inicial
router.get("/", getHomePage);

// Rota para adicionar um veículo
router.post("/veiculo", addVeiculo);

// Rota para atualizar o preço de um veículo
router.put("/veiculo", updateVeiculo);

// Rota para excluir um veículo
router.delete("/veiculo/:id", deleteVeiculo);

module.exports = router;
