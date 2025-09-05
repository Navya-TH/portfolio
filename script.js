// Modal Script
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("certImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".certificate-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const certSrc = this.getAttribute("data-cert");

    if (certSrc.endsWith(".pdf")) {
      window.open(certSrc, "_blank");
    } else {
      modal.style.display = "block";
      modalImg.src = certSrc;
    }
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
