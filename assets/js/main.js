// Видео в кружке на главной в баннере

const bannerVideo = document.querySelector('.banner-video');
const playBtn = bannerVideo.querySelector('.banner-play-btn');
const preview = bannerVideo.querySelector('.banner-video-preview');
const video = bannerVideo.querySelector('.banner-video-content');

function showPreview() {
  video.pause();
  video.currentTime = 0;    
  video.style.display = 'none';
  preview.style.display = 'block';
  playBtn.style.display = 'block';
}

function playVideo() {
  preview.style.display = 'none';
  video.style.display = 'block';
  playBtn.style.display = 'none';

  const p = video.play();
  if (p && typeof p.then === 'function') {
    p.catch(err => {
      console.warn('video.play() blocked:', err);
      showPreview();
    });
  }
}

playBtn.addEventListener('click', () => {
  if (video.paused) {
    playVideo();
  } else {
    showPreview();
  }
});

video.addEventListener('click', () => {
  if (!video.paused) {
    showPreview();
  } else {
    playVideo();
  }
});

video.addEventListener('ended', showPreview);




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

    // Убираем активный класс у всех табов и контента
    document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('service-tab--active'));
    document.querySelectorAll('.service-content').forEach(c => c.classList.remove('service-content--active'));

    // Добавляем активный класс выбранным
    tab.classList.add('service-tab--active');
    document.querySelector(`.service-content[data-service-content="${target}"]`)
      .classList.add('service-content--active');
  });
});





// Моб меню
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".main-nav-mob");
  const toggleBtn = document.querySelector(".main-nav-mob-toggle");
  const closeBtn = document.querySelector(".main-nav-mob__close");

  // Открыть меню
  toggleBtn.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden"; // запрет скролла страницы
  });

  // Закрыть меню
  function closeMenu() {
    menu.classList.remove("active");
    document.body.style.overflow = "";
  }
  closeBtn.addEventListener("click", closeMenu);

  // Раскрытие пунктов
  document.querySelectorAll(".main-nav-mob__dropdown-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const dropdown = btn.nextElementSibling;
      dropdown.classList.toggle("open");
    });
  });
});
