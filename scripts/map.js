
// cria o mapa
export const map = L.map("map", {
  center: [-8.02980310630749, -50.03260342873481],
  zoom: 14
});

// camada base do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);