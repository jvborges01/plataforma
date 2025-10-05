import { getRua } from "./ruas.js";
import { getPOI } from "./pois.js";
// Função para abrir um link no navegador externo
function abrirLinkExterno() {
  if (window.electronAPI && window.electronAPI.abrirLinkExterno) {
    window.electronAPI.abrirLinkExterno('https://www.remax.com.br');
  } else {
    console.error('electronAPI não está disponível no contexto da janela.');
  }
}

// Exemplo de uso

export class Marker {
  constructor(lat, lng, markerIcon, local, link) {
    this._lat = lat;
    this._lng = lng;
    this._markerIcon = markerIcon;
    this._local = local;
    this._link = link;
  }
  
  addMarker(map) {
    const self = this;
    // cria o objeto L.Marker real
      const mark = L.marker([this._lat, this._lng], { icon: this._markerIcon })
      .bindPopup(self._local)
      .on("mouseover", function () {
        const rua = getRua(this.getLatLng());
        const poi = getPOI(this.getLatLng());
        this.bindTooltip(`Local: ${rua}<p>Ponto Próximo: ${poi}`);
        this.openPopup();
        this.openTooltip();
      })
      .on("click", () => {
        abrirLinkExterno(this._link);
      });
    

      return mark;      
    }
    
  }
