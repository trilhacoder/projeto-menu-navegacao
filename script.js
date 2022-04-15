document.querySelector(".hamburguer").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("hamburguer--open");
  document.querySelector(".menu").classList.toggle("menu--open");
});
