// pois.js
let poisData;

export function setPOIs(data) {
    poisData = data;
}

export function getPOI(latlng) {
    if (!poisData) return "Sem dados";

    const pt = turf.point([latlng.lng, latlng.lat]);
    let menorDist = Infinity;
    let poiMaisProx = "Nenhum ponto encontrado";

    poisData.features.forEach(f => {
        if (f.geometry && f.geometry.type === "Point") {
            const dist = turf.distance(pt, f, { units: 'meters' });
            if (dist < menorDist) {
                menorDist = dist;
                poiMaisProx = f.properties.name || f.properties.amenity || f.properties.shop || f.properties.tourism || "Sem nome";
            }
        }
    });

    return poiMaisProx;
}
