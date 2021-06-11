import Swiper from 'swiper';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSwiper);
} else {
  // DOMContentLoaded already loaded, so better trigger your function
  initSwiper();
}

function initSwiper() {
  const swipers = document.querySelectorAll('.js-swiper');

  swipers.forEach(el => {
    new Swiper(el);
  });
}
