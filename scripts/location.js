import { map } from "./map.js";
import { markerI_misto } from "./icons.js";
export function localization(){ 

function success(pos){
   

    if (map === undefined) {
        window.prompt('Permita o acesso de localização')

    } else {
        map.flyTo([pos.coords.latitude, pos.coords.longitude], 15);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude],{ icon: markerI_misto }).addTo(map)
        .bindPopup('Eu estou aqui!')
        .openPopup()
        .addTo(map);
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});
}