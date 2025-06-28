import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';
import 'https://code.jquery.com/jquery-1.11.0.min.js';
import 'https://code.jquery.com/jquery-migrate-1.2.1.min.js';
import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';

import '/src/sass/style.scss';
import { GAMES, SECTIONS } from '/src/js/constancts';

document.addEventListener('DOMContentLoaded', () => {
  function createCatalog(arr) {
    const catalogParent = document.querySelector('.catalog__wrapper');
    const sortedArr = [...arr].sort();
    sortedArr.forEach((game) => {
      const catalogItem = document.createElement('div');
      catalogItem.classList.add('catalog__item');
      catalogItem.textContent = game;
      catalogParent.append(catalogItem);
    });
  }

  function pageScrollConfiguration(id, sections) {
    new fullpage(id, {
      anchors: sections,
      licenseKey: 'GPLv3',
      slidesNavigation: true,
      lazyLoad: true,
      autoScrolling: true,
      scrollBar: false,
      scrollingSpeed: 1000,
      navigation: true,
      controlArrows: true,
      scrollHorizontally: true,
      credits: { enabled: false },
    });
  }
  pageScrollConfiguration('#fullpage', SECTIONS);
  createCatalog(GAMES);
  $(document).ready(function () {
    $('.reviews__wrapper').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    });
  });
});
