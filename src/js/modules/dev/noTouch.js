import {
  $body,
  Resp
} from './_helpers';

export class NoTouch {

  constructor() {
    NoTouch.init();
  }

  static init() {
    if (Resp.isDesk) {
      $body.addClass('no-touch');
    }
  }

}

export default new NoTouch();