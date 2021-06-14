import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar]);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSwiper);
} else {
  // DOMContentLoaded already loaded, so better trigger your function
  initSwiper();
}

function initSwiper() {
  const swipers = document.querySelectorAll('.js-swiper');

  swipers.forEach(el => {
    const { swiper } = el.dataset;
    let options = { loop: true };
    if (swiper) {
      options = JSON.parse(swiper);
    }

    new Swiper(el, options);
  });
}
