import { setupControls } from "./scripts/controls.js";
import { setRuas, getRua } from "./scripts/ruas.js";
import { setPOIs, getPOI } from "./scripts/pois.js";



// Ativa botões e controles
setupControls();
// Carrega dados
fetch("./geojson/ruas_redencao.geojson")
  .then(res => res.json())
  .then(data => setRuas(data));

fetch("./geojson/redenção_pois.geojson")
  .then(res => res.json())
  .then(data => setPOIs(data));

// Elementos de info
const nome_rua = document.getElementById("rua");
const ponto = document.getElementById("ponto");
