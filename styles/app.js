let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
  } else {
    nav.style.boxShadow = "none";
  }
});
