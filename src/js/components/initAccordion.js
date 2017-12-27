import { TweenMax } from 'gsap';
import { css } from '../modules/dev/_helpers';

export function initAccordion() {
  const $accordion = $('.accordion');

  $accordion.each(function () {
    const $item = $(this).find('.accordion__item');
    const $btn = $item.find('> div:first-child');
    const $content = $item.find('.accordion__content');
    const speed = 0.5;

    $item.each(function () {
      const $thisContent = $(this).find('.accordion__content');
      if ($(this).hasClass(css.active)) {
        showContent($thisContent);
      }
    });

    $btn.on('click tap', function () {
      const $selfItem = $(this).closest($item);
      const $selfContent = $selfItem.find($content);

      $item.not($selfItem).removeClass(css.active);
      $content.each(function () {
        if (!$(this).closest($selfItem).length) {
          hideContent($(this));
        }
      });
      $selfItem.toggleClass(css.active);

      if ($selfItem.hasClass(css.active)) {
        showContent($selfContent);
      } else {
        hideContent($selfContent);
      }
    });

    function showContent(el) {
      TweenMax.set(el, { height: 'auto', scaleY: 1 });
      TweenMax.from(el, speed, { height: 0, scaleY: 0 });
    }

    function hideContent(el) {
      TweenMax.to(el, speed, { height: 0, scaleY: 0 });
    }
  });
};
