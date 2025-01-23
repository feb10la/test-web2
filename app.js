document.addEventListener('markerFound', (event) => {
    const markerIndex = event.detail.targetIndex; // Ambil indeks marker yang ditemukan
    const markerInfo = ["Marker 1: Old IBM PC", "Marker 2: Joystick"]; // Informasi marker
    document.getElementById("UI").textContent = markerInfo[markerIndex] || "Marker not recognized.";
});
