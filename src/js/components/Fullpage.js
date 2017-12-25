import fullpage from 'fullpage.js';
import {TimelineMax, TweenMax} from 'gsap';
import SplitText from './SplitText';
import {$body, $window, $header, $nav, Resp, css} from '../modules/dev/_helpers';

export default class Fullpage {
  constructor(el) {
    this.$fullpage = $('.js-fullpage');
    this.init();
  }

  fullpage() {
    this.$fullpage.fullpage({
      sectionSelector: '.section',
      paddingTop: 70,
      scrollingSpeed: 1000,
      verticalCentered: true,
      keyboardScrolling: true,
      loopHorizontal: false,
      controlArrows: false,
      navigation: true,
      navigationPosition: 'right',
      css3: true,
      easingcss3: 'ease',
      fixedElements: '.header',
      afterRender: function () {
        // const screen = $(this).find('.screen');

        initScreenVideo();
      },
      onLeave: function (index, nextIndex, direction) {
        const nextSection = $(this).next();

        if (nextIndex > 0) $header.addClass(css.active);
        if (nextIndex === 1) {
          initScreenVideo();
          $header.removeClass(css.active);
        }

        initAnimation(nextSection);

        if (direction === 'up') $header.removeClass(css.active);

        if (direction === 'down' && nextIndex !== 13) titleAnimation(nextSection);

        if (nextIndex === 2) animateNumbers();
      }

    });

    function initScreenVideo() {
      const $video = $('.screen__video').find('video')[0];

      $video.play();
    }

    function initAnimation(nextSection) {
      const nextElements = nextSection.find('[data-anim]');
      const fastElem = nextSection.find('[data-anim-fast]');
      const slowElem = nextSection.find('[data-anim-slow]');

      let tl = new TimelineMax({delay: 0.25});
      let tlSlow = new TimelineMax({delay: 0.5});

      tl
        .staggerFromTo(nextElements, 0.8, {y: 80, opacity: 0}, {y: 0, opacity: 1}, 0.5, '-=0.5');

      tl
        .staggerFromTo(fastElem, 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1}, 0.3, '-=0.1');

      tlSlow
        .staggerFromTo(slowElem, 1, {y: 120, opacity: 0}, {y: 0, opacity: 1}, 0.6);

    }

    function titleAnimation(el) {
      const title = el.find('[data-anim-title]');

      const timeLine = new TimelineLite({delay: 0.2}),
        splitText = new SplitText(title, {type: "words,chars"}),
        chars = splitText.chars;

      TweenLite.set(title, {perspective: 400});

      timeLine.staggerFrom(chars, 0.8, {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: Back.easeOut
      }, 0.05, "+=0");
    }

    function animateNumbers() {
      const elem = $('[data-anim-count]');

      elem.each(function (index, item) {
        const $this = $(this);
        let number = parseInt($this.text());
        let counter = {var: 0};

        TweenMax.to(counter, 2.5, {
          var: number,
          onUpdate: function () {
            $this.html(Math.ceil(counter.var));
          },
          ease: Circ.easeOut
        });
      });
    }

    // move to top
    $('.scroll-up a').on('click tap', () => {
      $.fn.fullpage.moveTo(1);
    });
  }

  removeVideo() {
    if (Resp.isMobile) $('.screen__video').remove();
  }

  init() {
    if (Resp.isDesk) this.fullpage();
    this.removeVideo();
  }
}