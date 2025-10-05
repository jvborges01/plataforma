import { map } from "./map.js";
import { openFullscreen,closeFullscreen } from "./fullscreen.js";
import { localization } from "./location.js";
import { addMarkers } from "./addMarkers.js";
const {marKerList} = addMarkers(map)
const boolean = false;
if(boolean == true){
  marKerList[0].openPopup();
}

export function setupControls() {
  const expandir = document.getElementById("expandir");
  const search = document.getElementById("search");
  const input_search = document.getElementById("input_search");
  const alvo = document.getElementById("alvo");
  const mapa = document.getElementById("map");
  const results = document.getElementById("results");

function renderResults(list) {
  results.innerHTML = list
    .map(element => `<span class="results">${element._popup._content}</span>`)
    .join('');
    resultados();
}

// mostra todos no início
renderResults(marKerList);

// e filtra conforme digita
const resultsFiltered = input_search.addEventListener("input", function() {
  const query = input_search.value.toLowerCase();

  const resultsFiltered = marKerList.filter(element =>
    element._popup._content.toLowerCase().startsWith(query)
  );

  renderResults(resultsFiltered)
  return resultsFiltered;
});
// adiciona event listener a todos
function resultados(){
results.querySelectorAll("span").forEach(span => {
  span.addEventListener("click", function() {
    const element = marKerList.find(el => el._popup._content === this.textContent);
      map.flyTo([element._latlng.lat, element._latlng.lng], 17);
      let n =1000;
      setTimeout(()=>{
        element.openPopup();
        n-100;
      },n)
    
  });
});
}
  search.addEventListener("click", () => {
   
      if(window.getComputedStyle(input_search).display !== "block"){
         input_search.style.display = "block";
         results.style.display = "flex";
        }
        else{
          input_search.style.display = "none";
          results.style.display = "none";
        }
  });

  expandir.addEventListener("click", () => {
    if(mapa.getAttribute("data-fullscreen") === "true"){
      mapa.removeAttribute("data-fullscreen");
      closeFullscreen()
    }
    else{
    openFullscreen();
    mapa.setAttribute("data-fullscreen", "true");
    }
   
    map.invalidateSize();
  });

  alvo.addEventListener('click',function(){
    localization()
  })
  map.on("mouseout", () => {
    if (window.getComputedStyle(input_search).display === "block") {
      input_search.style.display = "none";
      results.style.display = "none";
    }
  });
}
