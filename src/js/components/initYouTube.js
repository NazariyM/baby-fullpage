export function initYouTube() {

  const $playFrame = $('.js-play-video'),
    $tabsBtn = $('.c-tabs__tabs-el'),
    speed = 400;

  $playFrame.on('click tap', function (e) {
    e.preventDefault();
    const $this = $(this);
    const $videoText = $this.siblings('.js-video-text');
    const frame = this.nextElementSibling;

    $this.fadeOut();
    $this.siblings('iframe').fadeIn(speed, () => {
      play(frame);
    });

    $videoText.addClass('is-float');

    $tabsBtn.on('click tap', () => {
      stop(frame);
    });

  });

  function play(element) {
    element.contentWindow.postMessage(JSON.stringify({
      'event': 'command',
      'func': 'playVideo',
      'args': []
    }), '*');
  }

  function stop(element) {
    element.contentWindow.postMessage(JSON.stringify({
      'event': 'command',
      'func': 'stopVideo',
      'args': []
    }), '*');
  }

}