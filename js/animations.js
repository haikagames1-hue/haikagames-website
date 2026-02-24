(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    const onReady = () => {
        if (!window.gsap) return;

        if (window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger);
        }

        const ease = "power2.out";

        window.gsap.from("nav", {
            y: -16,
            opacity: 0,
            duration: 0.6,
            ease,
            clearProps: "all",
        });

        window.gsap.from(".hero h1", {
            y: 12,
            opacity: 0,
            duration: 0.55,
            ease,
            delay: 0.05,
            clearProps: "all",
        });

        window.gsap.from(".hero p", {
            y: 8,
            opacity: 0,
            duration: 0.5,
            ease,
            delay: 0.1,
            clearProps: "all",
        });

        if (!window.ScrollTrigger) return;

        const sections = window.gsap.utils.toArray(".section");
        sections.forEach((section) => {
            const heading = section.querySelector("h2");
            if (heading) {
                window.gsap.from(heading, {
                    y: 10,
                    opacity: 0,
                    duration: 0.45,
                    ease,
                    scrollTrigger: {
                        trigger: heading,
                        start: "top bottom",
                        toggleActions: "play none none none",
                    },
                    clearProps: "all",
                });
            }

            const lede = section.querySelector(".lede");
            if (lede) {
                window.gsap.from(lede, {
                    y: 8,
                    opacity: 0,
                    duration: 0.45,
                    ease,
                    scrollTrigger: {
                        trigger: lede,
                        start: "top bottom",
                        toggleActions: "play none none none",
                    },
                    clearProps: "all",
                });
            }

            const cards = section.querySelectorAll(".card");
            if (cards.length) {
                window.gsap.from(cards, {
                    y: 12,
                    opacity: 0,
                    duration: 0.5,
                    ease,
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        toggleActions: "play none none none",
                    },
                    clearProps: "all",
                });
            }
        });
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", onReady, { once: true });
    } else {
        onReady();
    }
})();
