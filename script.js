document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

window.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('section').forEach((section) => {
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    });

    // Example SVG scribble animation
    document.querySelectorAll('.scribble').forEach((element) => {
        gsap.to(element.querySelector('path'), {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });
    });
});
