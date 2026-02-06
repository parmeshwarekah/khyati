export function initQR() {
  const qrBtn = document.querySelector(".qr-btn");

  qrBtn.addEventListener("click", () => {
    alert("QR Scanner will open here");
    // later → camera access + scan
  });
}
