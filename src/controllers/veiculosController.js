const veiculos = require("../data/veiculos");

const getHomePage = (req, res) => {
  let pagina = `
    <html>
    <style>
        body{
            background-color: #d3d3d3;
            font-family:Arial, Helvetica, sans-serif;
        }
    </style>
      <head>
        <title>Garagem de Veículos</title>
      </head>
      <body>
        <h1>Bem-vindo à Garagem de Veículos</h1>
        <p>Veja abaixo os veículos disponíveis:</p>
        <table border="1" style="width: 100%; text-align: center;">
          <tr>
            <th>Nome</th>
            <th>Fabricante</th>
            <th>Ano</th>
            <th>Combustível</th>
            <th>Cor</th>
            <th>Preço</th>
          </tr>
  `;

  veiculos.forEach((veiculo) => {
    pagina += `
      <tr>
        <td>${veiculo.nome}</td>
        <td>${veiculo.fabricante}</td>
        <td>${veiculo.ano}</td>
        <td>${veiculo.combustivel}</td>
        <td>${veiculo.cor}</td>
        <td>R$ ${veiculo.preco}</td>
      </tr>
    `;
  });

  pagina += `
        </table>
      </body>
    </html>
  `;

  res.status(200).send(pagina);
};

const addVeiculo = (req, res) => {
  const { nome, fabricante, ano, combustivel, cor, preco } = req.body;

  const novoVeiculo = {
    id: veiculos.length + 1,
    nome,
    fabricante,
    ano,
    combustivel,
    cor,
    preco,
  };

  veiculos.push(novoVeiculo);
  res.status(201).json(novoVeiculo);
};

const updateVeiculo = (req, res) => {
  const { id, preco } = req.body;

  const veiculo = veiculos.find((v) => v.id === id);

  if (veiculo) {
    veiculo.preco = preco;
    res.status(200).send(`O preço do veículo com ID ${id} foi atualizado para R$ ${preco}.`);
  } else {
    res.status(404).send("Veículo não encontrado.");
  }
};

const deleteVeiculo = (req, res) => {
  const id = parseInt(req.params.id);

  const index = veiculos.findIndex((v) => v.id === id);

  if (index !== -1) {
    veiculos.splice(index, 1);
    res.status(202).send(`O veículo com ID ${id} foi excluído com sucesso.`);
  } else {
    res.status(404).send("Veículo não encontrado.");
  }
};

module.exports = {
  getHomePage,
  addVeiculo,
  updateVeiculo,
  deleteVeiculo,
};
