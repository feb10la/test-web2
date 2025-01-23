
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Simulate loading time
    setTimeout(() => {
        // Redirect to dashboard after 1 seconds
        window.location.href = "CamAR/dashboard.html";
    }, 6500); //  seconds
});

const splashElements = [
    document.getElementById("logo-group"),
    document.getElementById("welcome"),
    document.getElementById("logo-app"),
];

let delay = 0;

splashElements.forEach((element, index) => {
    setTimeout(() => {
        element.style.opacity = 1; // Munculkan elemen
        setTimeout(() => {
            element.style.opacity = 0; // Hilangkan elemen
        }, 1500); // Tahan selama 1.5 detik sebelum menghilang
    }, delay);
    delay += 2000; // Setiap elemen muncul 2 detik setelah elemen sebelumnya
});
