document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Rotating Text in Hero
    const rotatingTextEl = document.querySelector('.rotating-text');
    if (rotatingTextEl) {
        const rawLines = rotatingTextEl.getAttribute('data-lines');
        if (rawLines && !prefersReducedMotion) {
            const lines = JSON.parse(rawLines);
            let lineIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let textDelay = 100;

            function typeEffect() {
                const currentLine = lines[lineIndex];

                if (isDeleting) {
                    rotatingTextEl.textContent = currentLine.substring(0, charIndex - 1);
                    charIndex--;
                    textDelay = 50;
                } else {
                    rotatingTextEl.textContent = currentLine.substring(0, charIndex + 1);
                    charIndex++;
                    textDelay = 100;
                }

                if (!isDeleting && charIndex === currentLine.length) {
                    isDeleting = true;
                    textDelay = 2000;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    lineIndex = (lineIndex + 1) % lines.length;
                    textDelay = 500;
                }

                setTimeout(typeEffect, textDelay);
            }
            setTimeout(typeEffect, 1000);
        }
    }

    // Scroll fade-in animations
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    obs.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px', threshold: 0.1 });

        document.querySelectorAll('.glass-card, .section-title, .hero-content > *').forEach(el => {
            if (!el.classList.contains('rotating-text')) {
                el.style.opacity = 0;
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            }
        });
    }

    // Animated Counters using requestAnimationFrame
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const target = entry.target;
            const targetNum = +target.getAttribute('data-target');
            const hasSuffix = target.hasAttribute('data-plus');
            obs.unobserve(target);

            if (prefersReducedMotion) {
                target.textContent = targetNum + (hasSuffix ? '+' : '');
                return;
            }

            const duration = 1500;
            const startTime = performance.now();

            function tick(now) {
                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                target.textContent = Math.round(eased * targetNum) + (progress === 1 && hasSuffix ? '+' : '');
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counter.textContent = '0';
        counterObserver.observe(counter);
    });
});
