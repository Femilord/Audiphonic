// -------------- Services Section effects --------------------



// ======= second - section vertical Scrolling clipart Js script ============

document.addEventListener("DOMContentLoaded", () => {
    // Check if the screen is a desktop size
    if (window.innerWidth > 900) {
        const textBlocks = document.querySelectorAll(".text-content-block");
        const panelContents = document.querySelectorAll(".panel-content");
        const stickyPanel = document.querySelector(".sticky-panel");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(textBlocks).indexOf(entry.target);

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
    }
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

document.addEventListener("DOMContentLoaded", function () {
    let current = 0;
    const images = document.querySelectorAll(".av-systems-images");
    const texts = document.querySelectorAll(".av-systems-left-text");
    const totalItems = images.length;

    // Ensure there are images and text blocks to animate
    if (totalItems > 0) {
        // Set the first image and text as active initially
        images[current].classList.add("active");
        texts[current].classList.add("active");

        // Function to switch to the next slide
        function showNextSlide() {
            // Remove 'active' class from the current items
            images[current].classList.remove("active");
            texts[current].classList.remove("active");

            // Move to the next item
            current = (current + 1) % totalItems;

            // Add 'active' class to the new current items
            images[current].classList.add("active");
            texts[current].classList.add("active");
        }

        // Set the interval to automatically switch every 6 seconds (6000ms)
        setInterval(showNextSlide, 6000);
    }
});

