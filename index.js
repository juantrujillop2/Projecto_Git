/* Constante que inicializa el framework */
const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./src/routes");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Puerto activo: ", port);
});

/* Shift + Alt + f para indentar */
mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log("Conectados con la BD"))
  .catch((err) => console.error(err));

  app.use(express.json())
  apiRoutes(app);


