// Инициализация Swiper для слайдера историй
function initSwiper() {
    if (window.innerWidth >= 768) {
        if (!window.storySwiper) {
            window.storySwiper = new Swiper('.story-swiper', {
                loop: false,
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.story-btn-next',
                    prevEl: '.story-btn-prev',
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }
    } else {
        if (window.storySwiper) {
            window.storySwiper.destroy(true, true);
            window.storySwiper = undefined;
        }
    }
}

initSwiper();
window.addEventListener('resize', initSwiper);




// Блок services на главной странице
document.querySelectorAll('.service-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.serviceTab;

    document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('service-tab--active'));
    document.querySelectorAll('.service-content').forEach(c => c.classList.remove('service-content--active'));

    tab.classList.add('service-tab--active');
    document.querySelector(`.service-content[data-service-content="${target}"]`)
      .classList.add('service-content--active');
  });
});

// Страница отзывы
document.querySelectorAll('.reviews-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.reviewsTab;

    document.querySelectorAll('.reviews-tab').forEach(t => t.classList.remove('reviews-tab--active'));
    document.querySelectorAll('.reviews-content').forEach(c => c.classList.remove('reviews-content--active'));

    tab.classList.add('reviews-tab--active');
    document.querySelector(`.reviews-content[data-reviews-content="${target}"]`)
      .classList.add('reviews-content--active');
  });
});




// Моб меню
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".main-nav-mob");
  const toggleBtn = document.querySelector(".main-nav-mob-toggle");
  const closeBtn = document.querySelector(".main-nav-mob__close");

  // Функция анимации
  function slideToggle(element, isOpen) {
    if (isOpen) {
      element.style.height = element.scrollHeight + "px";
      element.classList.add("open");

      element.addEventListener("transitionend", function handler() {
        element.style.height = "auto";
        element.removeEventListener("transitionend", handler);
      });
    } else {
      element.style.height = element.scrollHeight + "px";
      requestAnimationFrame(() => {
        element.style.height = "0px";
        element.classList.remove("open");
      });
    }
  }

  function closeMenu() {
    menu.classList.remove("active");
    document.body.style.overflow = "";

    // Сворачиваем все открытые дропдауны
    document.querySelectorAll(".main-nav-mob__dropdown-toggle.active").forEach(btn => {
      btn.classList.remove("active");
    });
    document.querySelectorAll(".main-nav-mob__dropdown.open").forEach(dropdown => {
      dropdown.style.height = "0px";
      dropdown.classList.remove("open");
    });
  }

  toggleBtn.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", closeMenu);

  document.querySelectorAll(".main-nav-mob__dropdown-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dropdown = btn.nextElementSibling;
      const isOpening = !btn.classList.contains("active");

      btn.classList.toggle("active");
      slideToggle(dropdown, isOpening);
    });
  });
});





//Аккордеон
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
             
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
          currentlyActiveAccordionItemHeader.classList.toggle("active");
          currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
        accordionItemBody.style.maxHeight = 0;
        }
        
    });
});


// Кнопка goToTop
document.querySelector('.footer-up-btn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Маска на телефон
const phoneInput = document.getElementById('phone');
  IMask(phoneInput, {
    mask: '+{7} (000) 000-00-00'
});



















