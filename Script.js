document.addEventListener("DOMContentLoaded", function() {
    const cvContainer = document.querySelector(".cv-container");
    cvContainer.style.opacity = "0";
    cvContainer.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        cvContainer.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        cvContainer.style.opacity = "1";
        cvContainer.style.transform = "translateY(0)";
    }, 100);
});
