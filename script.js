const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Close the menu when clicking outside of it
document.addEventListener("click", (event) => {
    const isClickInsideMenu = document.querySelector(".nav-menu").contains(event.target);
    const isClickOnMenuButton = menuOpenButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
        document.body.classList.remove("show-mobile-menu");
    }
});