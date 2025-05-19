document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Pesan Anda telah dikirim. Terima kasih!");
  this.reset();
});
