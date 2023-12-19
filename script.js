import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

document.addEventListener("DOMContentLoaded", function () {
  const confettiButton = document.getElementById("confettiButton");
  const mensaje = document.getElementById("mensaje");

  confettiButton.addEventListener("click", () => {
    // Muestra el mensaje
    mensaje.style.display = "block";

    // Lanza el confeti
    confetti({
      particleCount: 150,
      spread: 60,
    });
  });
});
