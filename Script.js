// Aseguramos que el script se ejecute después de que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    // Efecto de fade-in en la carga de la página
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 300);

    // Animación con GSAP si está disponible
    if (typeof gsap !== "undefined") {
        gsap.from(".cv-container", { 
            duration: 1.2, 
            opacity: 0, 
            y: 30, 
            ease: "power2.out" 
        });

        gsap.from(".profile-pic", { 
            duration: 1.5, 
            opacity: 0, 
            scale: 0.5, 
            ease: "elastic.out(1, 0.5)", 
            delay: 0.5 
        });

        gsap.from(".left-section h1, .left-section p, .left-section a", { 
            duration: 1, 
            opacity: 0, 
            x: -50, 
            stagger: 0.2, 
            ease: "power2.out",
            delay: 0.5 
        });

        gsap.from(".right-section h2, .right-section p, .right-section ul", { 
            duration: 1, 
            opacity: 0, 
            x: 50, 
            stagger: 0.2, 
            ease: "power2.out",
            delay: 0.5 
        });
    }
});
