const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        mobileMenu.classList.remove("active");
    }

});

const serviceNavigation = document.querySelector(".service-navigation");
const footer = document.querySelector("footer");
if (serviceNavigation && footer) {
    function checkFooter() {
        const footerTop = footer.getBoundingClientRect().top;
        const navigationHeight = serviceNavigation.offsetHeight;
        const viewportHeight = window.innerHeight;
        if (footerTop < viewportHeight - navigationHeight / 2) {
            serviceNavigation.style.visibility = "hidden";
        } else {
            serviceNavigation.style.visibility = "visible";
        }
    }
    window.addEventListener("scroll", checkFooter);
    window.addEventListener("resize", checkFooter);
    checkFooter();

}