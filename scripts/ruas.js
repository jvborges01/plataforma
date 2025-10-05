// ruas.js
let ruasData;

export function setRuas(data) {
    ruasData = data;
}

export function getRua(latlng) {
    if (!ruasData) return "Sem dados";

    let pt = turf.point([latlng.lng, latlng.lat]);
    let menorDist = Infinity;
    let ruaMaisProx = "Desconhecida";

    ruasData.features.forEach(f => {
        if (f.geometry && (f.geometry.type === "LineString" || f.geometry.type === "MultiLineString")) {
            let dist = turf.pointToLineDistance(pt, f, { units: "meters" });
            if (dist < menorDist) {
                menorDist = dist;
                ruaMaisProx = f.properties.name || "Sem nome";
            }
        }
    });

    return ruaMaisProx;
}
