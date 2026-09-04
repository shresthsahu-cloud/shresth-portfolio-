// EASY UPDATE:
// To add a new thumbnail, copy its image into /images and add one object below.
// You do NOT need to change the rest of the website.
const projects = [
 { image: "macbook-vs-rog.png", title: "MacBook Pro vs ROG G14", category: "TECH / COMPARISON" },
{ image: "4k-oled-240hz.png", title: "4K OLED 240Hz", category: "TECH / DISPLAY" },
{ image: "rtx-4060-vs-5070.png", title: "RTX 4060 vs RTX 5070", category: "TECH / GPU" },
{ image: "perfect-morning-routine.png", title: "The Perfect Morning Routine", category: "LIFESTYLE" },
{ image: "roblox-end.png", title: "The End...?", category: "GAMING / ENTERTAINMENT" }

const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project";
  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title} thumbnail" loading="${index < 2 ? "eager" : "lazy"}">
    </div>
    <div class="project-info">
      <strong>${project.title}</strong>
      <span>${project.category}</span>
    </div>`;
  card.addEventListener("click", () => {
    lightboxImage.src = project.image;
    lightboxImage.alt = project.title;
    lightboxTitle.textContent = project.title;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
  gallery.appendChild(card);
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}
document.querySelector(".close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
