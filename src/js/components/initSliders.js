import { svgIcon } from '../modules/dev/_helpers';
import slick from 'slick-carousel';

export function initSliders() {

  const arrLeft = svgIcon('left-arrow');
  const arrRight = svgIcon('right-arrow');
  const starIcon = `<svg class="stars-slider__nav-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="93" height="88"
     viewBox="0 0 93 88">
    <defs>
        <path id="icon-star" d="M991.87 3284.34a2.72 2.72 0 0 0-2.2-1.85l-28.89-4.16-12.83-25.94c-.92-1.86-3.97-1.86-4.89 0l-12.84 25.94-28.88 4.16a2.72 2.72 0 0 0-1.51 4.63l20.95 20.2-4.9 28.5a2.71 2.71 0 0 0 3.95 2.87l25.67-13.46 25.68 13.46a2.73 2.73 0 0 0 3.95-2.87l-4.9-28.5 20.95-20.2c.74-.72 1-1.8.69-2.78z"/>
    </defs>
    <g transform="translate(-899 -3251)">
        <use xlink:href="#icon-star"/>
    </g>
</svg>`;

  let defaultOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${arrLeft}</button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next">${arrRight}</button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    rows: 0,
    dotsClass: 'slider-dots'
  };

  const $starsSld = $('.js-stars-slider');
  $starsSld.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    speed: 600,
    arrows: false,
    dotsClass: 'stars-slider__nav',
    customPaging(slider, i) {
      return `<button type="button" class="history-timeline__nav-year">${starIcon}<span class="stars-slider__nav-count">${i + 1}</span></button>`;
    },
  }));

  const $learnSld = $('.js-learn-slider');
  $learnSld.slick($.extend({}, defaultOptions, {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          adaptiveHeight: true
        }
      }
    ]
  }));

  const $interiorSld = $('.js-interior-slider');
  $interiorSld.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    speed: 1000
  }));

  const $expertSld = $('.js-expert-slider');
  $expertSld.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500
  }));

  const $librarySld = $('.js-library-slider');
  $librarySld.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200
  }));
}