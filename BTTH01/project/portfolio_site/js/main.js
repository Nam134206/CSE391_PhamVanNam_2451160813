document.addEventListener("DOMContentLoaded", function () {

    const bars = document.querySelectorAll(".skill-progress");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            const bar = entry.target;
            const targetWidth = bar.getAttribute("data-width");

            if (entry.isIntersecting) {
                bar.style.width = targetWidth;
            } else {
                bar.style.width = "0"; // reset khi ra khỏi viewport
            }

        });

    }, { threshold: 0.5 });

    bars.forEach(bar => observer.observe(bar));

});