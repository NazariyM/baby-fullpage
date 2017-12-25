export function initChooseMap() {
  let $chooseBlock = $('.choose');
  if (!$chooseBlock.length) return;

  ymaps.ready(init);

  function init() {
    const moscowCenter = [55.75366848567328, 37.621676554687504];
    const mapMoscow = new ymaps.Map('choose-map', {
        center: moscowCenter,
        zoom: 9,
        controls: []
      });

    mapMoscow.behaviors.disable('scrollZoom');
  }
}