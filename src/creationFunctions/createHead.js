import { createEyes } from './createEyes';
import { createNose } from './createNose';
import { createMouth } from './createMouth';

function createHead(options, idPrefix) {
  let head = document.createElement("div");
  head.setAttribute("class", "head");
  head.setAttribute("id", `${idPrefix}-head`);
  head.style.backgroundColor = options.headColor ? options.headColor : options.catColor;
  head.style.width = options.headWidth;
  head.style.height = options.headHeight;
  head.style.borderRadius = options.headBorderRadius;
  head.style.margin = options.headMargin;
  let { eyes, svg } = createEyes(options, idPrefix);
  eyes.setAttribute("id", `cat${idPrefix}-eyes`);
  svg.setAttribute("id", `cat${idPrefix}-svg`);
  let nose = createNose(options);
  nose.setAttribute("id", `cat${idPrefix}-nose`);
  let mouth = createMouth(options);
  mouth.setAttribute("id", `cat${idPrefix}-mouth`);
  head.appendChild(eyes);
  head.appendChild(nose);
  head.appendChild(mouth);
  return { head, svg };
}

export { createHead }