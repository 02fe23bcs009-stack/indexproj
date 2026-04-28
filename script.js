const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const themeButton = document.getElementById("themeButton");
const year = document.getElementById("year");
const currentDate = document.getElementById("currentDate");
const filterButtons = document.querySelectorAll(".filter-button");
const postCards = document.querySelectorAll(".post-card");

year.textContent = new Date().getFullYear();
currentDate.textContent = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("highlight-mode");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    postCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.topic === filter;
      card.classList.toggle("hidden", !matches);
    });
  });
});