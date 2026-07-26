const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".gallery-item").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    const full = button.getAttribute("data-full");

    if (!lightbox || !lightboxImage || !full || !img) {
      return;
    }

    lightboxImage.src = full;
    lightboxImage.alt = img.alt;
    lightbox.showModal();
  });
});

lightboxClose?.addEventListener("click", () => {
  lightbox.close();
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
