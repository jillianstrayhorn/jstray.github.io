document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Fill monogram avatars with initials taken from each person's name.
  document.querySelectorAll('.person .avatar').forEach(function (el) {
    if (el.textContent.trim()) return;          // already has content/photo
    var card = el.closest('.person');
    var name = card ? card.querySelector('h3') : null;
    if (!name) return;
    var parts = name.textContent.trim().split(/\s+/);
    var initials = parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '');
    el.textContent = initials.toUpperCase();
  });

  // Stamp current year in footers
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

if (slides.length) {
    showSlide(current);

    next.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prev.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });
}
