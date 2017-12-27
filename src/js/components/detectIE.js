import {$body} from '../modules/dev/_helpers';

export function getIEVersion() {
  const sAgent = window.navigator.userAgent;
  const Idx = sAgent.indexOf('MSIE');

  if (Idx > 0)
    return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf('.', Idx)));

  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return 0;

}

if (getIEVersion() > 0) {
  $body.addClass('is-ie');
}
