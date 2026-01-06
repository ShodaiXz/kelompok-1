const cards = document.querySelectorAll(".agent-card");
const selectText = document.querySelector(".select-text");
const lines = document.querySelectorAll(".select-indicator .line");
const core = document.querySelector(".select-indicator .core");

const defaultText = "CHARACTER READY";
const defaultColor = "rgba(255,255,255,0.35)";

// warna path hsr
const pathConfig = {
  NIHILITY: "#a78bfa",
  HUNT: "#facc15",
  DESTRUCTION: "#ef4444",
  ERUDITION: "#60a5fa",
  REMEMBRANCE: "#67e8f9"
};

// saat di hover berubah warna dan text juga
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    const path = card.dataset.path;
    const color = pathConfig[path];

    // TEXT
    selectText.innerText = `${path} READY`;
    selectText.style.color = color;
    selectText.style.textShadow = `
      0 0 12px ${color},
      0 0 28px ${color}
    `;

    // LINE
    lines.forEach(line => {
      line.style.background = color;
      line.style.boxShadow = `0 0 18px ${color}`;
    });

    // CORE
    core.style.background = color;
    core.style.boxShadow = `0 0 22px ${color}`;
  });

  card.addEventListener("mouseleave", () => {
    selectText.innerText = defaultText;
    selectText.style.color = "";
    selectText.style.textShadow = "";

    lines.forEach(line => {
      line.style.background = defaultColor;
      line.style.boxShadow = "";
    });

    core.style.background = defaultColor;
    core.style.boxShadow = "";
  });
});

// redirect halaman profil masing masing
  document.querySelectorAll(".agent-card").forEach(card => {
    card.addEventListener("click", () => {
      const url = card.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });




