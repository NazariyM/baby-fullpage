import '../modules/dev/noTouch';
import { initPreload } from './initPreload';
import Fullpage from './Fullpage';
import Header from './Header';
import objectFitVideos from 'object-fit-videos';
import objectFitImages from 'object-fit-images';
import { initSliders } from './initSliders';
import { initAccordion } from './initAccordion';
import { initChooseMap } from './ChooseMap';
import { initYouTube } from './initYouTube';
import { initParticles } from './initParticles';
import CTabs from './c-tabs';

/**
 * Website's common scripts (example).
 *
 * @module Common
 */

export class Common {

  static init() {
    initPreload();
    new Fullpage;
    new Header;
    objectFitImages();
    initSliders();
    initParticles();
    initAccordion();
    initChooseMap();
    initYouTube();
  }
}

/** tabs init */
const $tabs = $('.c-tabs');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});

/** Export initialized common scripts by default */
export default Common.init();