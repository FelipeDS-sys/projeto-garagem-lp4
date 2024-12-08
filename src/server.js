const express = require("express");
const veiculosRoutes = require("./routes/veiculosRoutes");

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/", veiculosRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});
