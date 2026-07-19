// IntersectionObserver for reveal animations
const revealCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Subtle Parallax Effect for Hero
const parallaxBg = document.querySelector('.parallax-bg');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (parallaxBg && scrolled < window.innerHeight) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});

        