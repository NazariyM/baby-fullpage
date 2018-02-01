import fullpage from 'fullpage.js';
import {TimelineMax, TweenMax} from 'gsap';
import SplitText from './SplitText';
import {$header, $nav, Resp, css} from '../modules/dev/_helpers';

export default class Fullpage {
  constructor() {
    this.$homeFullpage = $('.js-home-fullpage');
    this.$landFullpage = $('.js-landing-fullpage');
    this.$choiceFullpage = $('.js-choice-fullpage');
    this.$gardenFullpage = $('.js-garden-fullpage');

    this.init();
  }

  fullpage() {
    const fullpageDefaults = {
      responsiveHeight: 600,
      sectionSelector: '.section',
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
        initScreenVideo();
      }
    };

    if (this.$homeFullpage.length) this.$homeFullpage.fullpage($.extend({}, fullpageDefaults, {
      paddingTop: 70,
      onLeave: function (index, nextIndex, direction) {
        const nextSection = $(this).next();

        if (nextIndex > 0) $header.addClass(css.active);
        if (nextIndex === 1) {
          initScreenVideo();
          $header.removeClass(css.active);
        }

        initAnimation(nextSection);
        if (direction === 'up') $header.removeClass(css.active);
        if (direction === 'down' && nextIndex === 3) titleAnimation(nextSection);
        if (nextIndex === 2 && direction === 'down') animateNumbers();
        if (nextIndex === 7 && direction === 'down') animateNumbers();
      }

    }));

    if (this.$landFullpage.length) this.$landFullpage.fullpage($.extend({}, fullpageDefaults, {
      paddingTop: 70,
      menu: '.js-nav',
      anchors: ['pageOne', 'pageTwo', 'pageThree', 'pageFour', 'pageFive', 'pageSix', 'pageSeven', 'pageEight', 'pageNine', 'pageTen', 'pageEleven', 'pageTwelve', 'pageThirteen', 'pageFourteen', 'pageFifteen'],
      scrollOverflow: true,
      scrollOverflowOptions: {
        click: false,
        preventDefaultException: {tagName: /.*/}
      },
      onLeave: function (index, nextIndex, direction) {
        const nextSection = $(this).next();

        if (direction === 'up') $nav.removeClass(css.active).addClass('is-float');
        if (direction === 'up' && nextIndex === 2) {
          $header.addClass(css.hidden);
          $nav.addClass(css.hidden);
        }

        if (nextIndex > 0 && direction === 'down') {
          $header.addClass(css.active);
          $header.removeClass(css.hidden);
          $nav.removeClass(css.hidden);
          $nav.addClass('is-inner');
        }
        if (nextIndex === 1) {
          initScreenVideo();
          $header.removeClass(css.active);
          $header.removeClass(css.hidden);
          $nav.removeClass('is-inner is-float is-hidden');
        }
        if (direction === 'down') $nav.removeClass('is-float');

        if (nextIndex === 11 && direction === 'up') {
          $nav.removeClass(css.hidden);
        }

        if (nextIndex === 12 && direction === 'up') {
          $nav.addClass(css.hidden);
        }

        if (nextIndex === 15) {
          $header.removeClass(css.hidden);
          $nav.removeClass(css.hidden);
        }

        if (nextIndex === 16) {
          $header.addClass(css.hidden);
          $nav.addClass(css.hidden);
        }

        initAnimation(nextSection);

      }
    }));

    if (this.$choiceFullpage.length) this.$choiceFullpage.fullpage($.extend({}, fullpageDefaults, {
      paddingTop: 70,
      scrollOverflow: true,
      scrollOverflowOptions: {disablePointer: true, disableMouse: true, disableTouch: false},
      normalScrollElements: '.contact__map',
      onLeave: function (index, nextIndex, direction) {
        const nextSection = $(this).next();

        if (nextIndex > 0) $header.addClass(css.active);
        if (nextIndex === 1) {
          initScreenVideo();
          $header.removeClass(css.active);
        }

        initAnimation(nextSection);
        if (direction === 'up') $header.removeClass(css.active);
      }

    }));

    if (this.$gardenFullpage.length) this.$gardenFullpage.fullpage($.extend({}, fullpageDefaults, {
      paddingTop: 70,
      menu: '.js-nav',
      anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '20', '21', '22', '23', '24', '25'],
      scrollOverflow: true,
      scrollOverflowOptions: {
        click: false,
        preventDefaultException: {tagName: /.*/}
      },
      onLeave: function (index, nextIndex, direction) {
        const nextSection = $(this).next();

        if (direction === 'up') $nav.removeClass(css.active).addClass('is-float');
        if (direction === 'up' && nextIndex === 2) {
          $header.addClass(css.hidden);
          $nav.addClass(css.hidden);
        }

        if (nextIndex > 0 && direction === 'down') {
          $header.addClass(css.active);
          $header.removeClass(css.hidden);
          $nav.removeClass(css.hidden);
          $nav.addClass('is-inner');
        }
        if (nextIndex === 1) {
          initScreenVideo();
          $header.removeClass(css.active);
          $header.removeClass(css.hidden);
          $nav.removeClass('is-inner is-float is-hidden');
        }
        if (direction === 'down') $nav.removeClass('is-float');

        // if (nextIndex === 11 && direction === 'up') {
        //   $nav.removeClass(css.hidden);
        // }
        //
        // if (nextIndex === 12 && direction === 'up') {
        //   $nav.addClass(css.hidden);
        // }
        //
        // if (nextIndex === 15) {
        //   $header.removeClass(css.hidden);
        //   $nav.removeClass(css.hidden);
        // }
        //
        // if (nextIndex === 16) {
        //   $header.addClass(css.hidden);
        //   $nav.addClass(css.hidden);
        // }

        initAnimation(nextSection);

      }
    }));

    function initScreenVideo() {
      const $screenBlock = $('.screen');

      if ($screenBlock.length) {
        const $video = $('.screen__video').find('video')[0];

        $video.play();
      }
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
        splitText = new SplitText(title, {type: 'words,chars'}),
        chars = splitText.chars;

      TweenLite.set(title, {perspective: 400});

      timeLine.staggerFrom(chars, 1, {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: '0% 50% -50',
        ease: Back.easeOut
      }, 0.05, '+=0');
    }

    function animateNumbers() {
      const elem = $('[data-anim-count]');

      elem.each(function (index, item) {
        const $this = $(this);
        let number = parseInt($this.text());
        let counter = {var: 0};

        TweenMax.to(counter, 4, {
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