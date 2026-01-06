document.addEventListener("mousemove", (e) => {
  const layers = document.querySelectorAll(".parallax");

  const x = (e.clientX - window.innerWidth / 2);
  const y = (e.clientY - window.innerHeight / 2);

  layers.forEach((layer) => {
    const speed = layer.getAttribute("data-speed") || 0.05; 
    const xMove = (x * speed) / 50;
    const yMove = (y * speed) / 50;

    layer.style.transform = `translate(${xMove}px, ${yMove}px)`;
  });
});

