// Typing effect

window.addEventListener("load", function () {
  alert("Welcome to Eyob's personal portfolio");
});

const typedText = "Aspiring software engineer & security trainee";
const typedTarget = document.getElementById("typedText");

let i = 0;

function typeEffect() {
  if (i < typedText.length) {
    typedTarget.textContent += typedText.charAt(i);
    i++;
    setTimeout(typeEffect, 55);
  }
}

if (typedTarget) typeEffect();

// Mobile menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("show"));
  });
}

// Footer year

document.getElementById("year").textContent = new Date().getFullYear();

// Back to top button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});