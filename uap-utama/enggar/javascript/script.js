const navLinks = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

document.body.classList.add("loading");

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const layout = document.querySelector(".layout");

    // kasih 1 frame ke browser
    requestAnimationFrame(() => {
        // tampilkan layout dulu
        layout.classList.add("show");

        // baru fade out loader
        setTimeout(() => {
            loader.classList.add("hide");
            document.body.classList.remove("loading");
        }, 2000); // overlap dikit biar cinematic
    });
});





