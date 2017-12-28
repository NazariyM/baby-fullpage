import {Resp} from "../modules/dev/_helpers";
import particles from 'particles.js';

export function initParticles() {
  const heartParts = $('#js-heart-particles').length;
  const nutsParts = $('#js-nuts-particles').length;
  const bubleParts = $('#js-buble-particles').length;

  if (heartParts && Resp.isDesk) {
    particlesJS.load('js-heart-particles', 'static/assets/heart-particles.json');
  }
  if (nutsParts && Resp.isDesk) {
    particlesJS.load('js-nuts-particles', 'static/assets/nuts-particles.json');
  }
  if (bubleParts && Resp.isDesk) {
    particlesJS.load('js-buble-particles', 'static/assets/buble-particles.json');
  }
}