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

//Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    grabCursor:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
      // Autoplay
      autoplay: {
        delay: 5000, // 5000ms = 5 seconds
        disableOnInteraction: false, // Keeps autoplay running even when user interacts
    },

  breakpoints: {

    0:{
        slidesPerView: 1,
        dynamicBullets:false,

    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }

  }
  });