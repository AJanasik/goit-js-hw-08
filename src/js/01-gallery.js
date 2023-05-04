import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const img of galleryItems) {
  const list = `<div class="gallery__item">
    <a class="gallery__link" href=${img.original}>
    <img class="gallery__image" src=${img.preview} data-source=${img.original} alt=${img.description} /> 
    </a> 
    </div>`;

  gallery.insertAdjacentHTML("beforeend", list);
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName !== "IMG") return;
  const box = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  box.show();

  const close = document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      box.close();
    }
  });
});
