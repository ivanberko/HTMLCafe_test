import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
