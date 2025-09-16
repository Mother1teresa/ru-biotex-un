document.addEventListener("DOMContentLoaded", function () {
  var swiperContainer = document.querySelector(".mySwiper1");
  if (swiperContainer) {
    var swiper = new Swiper(".mySwiper1", {
      slidesPerView: "auto",
      spaceBetween: 360,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        789: {
          slidesPerView: "auto",
        },
        0: {
          grabCursor: true,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    console.warn("Swiper контейнер не найден: .mySwiper1");
  }

  document.querySelectorAll(".doc-box_title").forEach((title) => {
    title.addEventListener("click", () => {
      const items = title.nextElementSibling;
      const isActive = items.classList.contains("active");
      document.querySelectorAll(".doc-box_items.active").forEach((item) => {
        if (item !== items) {
          item.classList.remove("active");
          item.previousElementSibling.classList.remove("active");
        }
      });
      items.classList.toggle("active");
      title.classList.toggle("active");
    });
  });

  const translatBox = document.querySelector(".box--translat");
  const dropdown = document.querySelector(".dropdown");
  translatBox.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    translatBox.classList.toggle("active");
  });
  document.addEventListener("click", (event) => {
    if (!translatBox.contains(event.target)) {
      dropdown.classList.remove("active");
      translatBox.classList.remove("active");
    }
  });


window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  // Порог скролла (например, 50px), после которого верхние блоки сворачиваются
  const scrollThreshold = 50;

  if (scrollPosition > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
});
