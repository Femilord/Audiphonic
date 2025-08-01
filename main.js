// =========== Parallax Script ==============
const bgWrapper = document.getElementById("parallax-bg");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const scale = 1.0 - Math.min(scrollY / 1500, 0.09); // Zooms out to 94%
    bgWrapper.style.transform = `scale(${scale})`;
});



// ======= second - section vertical Scrolling clipart Js script ============

document.addEventListener("DOMContentLoaded", () => {
    const textBlocks = document.querySelectorAll(".text-content-block");
    const panelContents = document.querySelectorAll(".panel-content");
    const stickyPanel = document.querySelector(".sticky-panel"); // Get the sticky panel container

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Array.from(textBlocks).indexOf(entry.target);

                    // Remove 'active' from all, then apply to the one that matches
                    panelContents.forEach((panel, i) => {
                        panel.classList.toggle("active", i === index);
                    });
                }
            });
        },
        {
            root: null,
            threshold: 0.5,
        }
    );

    textBlocks.forEach((block) => observer.observe(block));
});




// ====================== Carousel Script =================

const track = document.getElementById('carouselTrack');
const carousel = document.getElementById('carousel');

// Pause animation on hover
carousel.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
});
carousel.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
});



// ==============================================

let current = 0;
const images = document.querySelectorAll(".av-systems-content");
const texts = document.querySelectorAll(".av-text-block");

function showNextSlide() {
    images[current].classList.remove("active");
    texts[current].classList.remove("active");

    current = (current + 1) % images.length;

    images[current].classList.add("active");
    texts[current].classList.add("active");
}

setInterval(showNextSlide, 4000);

