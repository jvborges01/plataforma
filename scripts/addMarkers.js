import { Marker } from "./mark_class.js";
import { marker_residencial, marker_comerical, marker_neutro } from "./icons.js";

export function addMarkers(map) {
  // --- Cria os marcadores usando a classe Marker ---
  const residencial1 = new Marker(
    -8.031237952483245, 
    -50.030226825584606, 
    marker_residencial, 
    "Imóvel Residencial - Casa Térrea - Médio Padrão", 
    "https://www.remax.com.br"
  );

  const comercial1 = new Marker(
    -8.033, 
    -50.028, 
    marker_comerical, 
    "Imóvel Comercial - Loja - Alto Padrão", 
    "https://www.remax.com.br"
  );

  const industrial1 = new Marker(
    -8.027, 
    -50.032, 
    marker_residencial, 
    "Imóvel Industrial - Galpão", 
    "https://www.remax.com.br"
  );

  const rural1 = new Marker(
    -8.036, 
    -50.031, 
    marker_neutro, 
    "Imóvel Rural - Chácara", 
    "https://www.remax.com.br"
  );

  const igreja = new Marker(
    -8.02649, 
    -50.02965, 
    marker_neutro, 
    "Igreja Batista da Redenção", 
    "https://www.remax.com.br"
  );

  const cristal = new Marker(
    -8.024988188691026, 
    -50.01345798649691, 
    marker_comerical, 
    "Comércio Soberano", 
    "https://www.remax.com.br"
  );

  const uniter = new Marker(
    -8.028092599853514, 
    -50.02798661166844, 
    marker_comerical, 
    "Americanas", 
    "https://www.remax.com.br"
  );

  // --- Cria os L.Marker reais ---
  const residencialMarker = residencial1.addMarker(map);
  const comercialMarker = comercial1.addMarker(map);
  const industrialMarker = industrial1.addMarker(map);
  const ruralMarker = rural1.addMarker(map);
  const igrejaMarker = igreja.addMarker(map);
  const cristalMarker = cristal.addMarker(map);
  const uniterMarker = uniter.addMarker(map);

  // --- Agrupa os marcadores ---
  const residencial = L.layerGroup([residencialMarker]);
  const comercial = L.layerGroup([comercialMarker, cristalMarker]);
  const outros = L.layerGroup([uniterMarker, igrejaMarker, industrialMarker, ruralMarker]);

  // --- Controlador de camadas (overlays múltiplos) ---
  const layerControl = L.control.layers(
    {}, // Base layers (vazio)
    {   // Overlays
      "Residencial": residencial,
      "Comercial": comercial,
      "Outros": outros
    }
  ).addTo(map);

  // Ativa alguns grupos por padrão
  residencial.addTo(map);
  comercial.addTo(map);

  // --- Lista de marcadores (caso precise manipular depois) ---
  const marKerList = [
    residencialMarker, comercialMarker, industrialMarker, ruralMarker,
    igrejaMarker, cristalMarker, uniterMarker
  ];

  return { residencial, comercial, outros, marKerList, layerControl };
}
