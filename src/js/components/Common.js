import '../modules/dev/noTouch';
import { initPreload } from './initPreload';
import { getIEVersion } from './detectIE';
import Fullpage from './Fullpage';
import Header from './Header';
import objectFitVideos from 'object-fit-videos';
import objectFitImages from 'object-fit-images';
import select2 from 'select2';
import { initSliders } from './initSliders';
import { initAccordion } from './initAccordion';
import ContactTabs from './contactTabs';
import { initChooseMap } from './ChooseMap';
import { initYouTube } from './initYouTube';
import { initParticles } from './initParticles';
import { initContactBlock } from './initContactBlock';
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
    getIEVersion();
    objectFitImages();
    initSliders();
    initParticles();
    initAccordion();
    initChooseMap();
    initYouTube();
    initContactBlock();
  }
}

/** tabs init */
const $tabs = $('.c-tabs');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});

/** select init*/
const $select = $('.js-select');
$select.select2({
  minimumResultsForSearch: -1,
  width: '100%'
});

/** Export initialized common scripts by default */
export default Common.init();