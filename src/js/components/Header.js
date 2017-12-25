import {$nav, css, $header, Resp} from "../modules/dev/_helpers";
import {TimelineMax} from "gsap";

export default class Header {
  constructor() {
    this.$header = $header;
    this.$nav = $nav;
    this.init();
  }

  initMobNav() {
    const $btn = $('.js-hamburger');
    const $navItems = $nav.find('.nav__list-item');

    $btn.on('click tap', function () {
      $(this).toggleClass(css.active);
      $nav.toggleClass(css.active);

      let tl = new TimelineMax({delay: 0.2});

      tl
        .staggerFromTo($navItems, 0.2, {y: 50, opacity: 0}, {y: 0, opacity: 1}, 0.1, '-=0.1');
    });
  }

  init() {
    this.initMobNav();
  }
}