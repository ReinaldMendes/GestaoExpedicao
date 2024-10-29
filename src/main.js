import e from "express";
import path from "path";
import "dotenv/config";
import "./config/db.js";
import species_router from "./routers/species_router.js";
import explorer_router from "./routers/explorer_router.js";
import expedition_router from "./routers/expedition_router.js";

const app = e();
app.use(e.json());

// Configurar a pasta 'public' como repositório de arquivos estáticos
app.use(e.static(path.join(process.cwd(), "src/public")));

// Rotas da API
app.use("/species", species_router);
app.use("/explorer", explorer_router);
app.use("/expedition", expedition_router);

// Rota principal para servir o front-end
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "src/public/index.html"));
});

app.listen(process.env.API_PORT, () =>
  console.log("Server Running on port", process.env.API_PORT)
);
