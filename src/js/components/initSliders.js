import { svgIcon } from '../modules/dev/_helpers';
import slick from 'slick-carousel';

export function initSliders() {

  const arrLeft = svgIcon('left-arrow');
  const arrRight = svgIcon('right-arrow');

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