import { createEars } from './createEars';
import { createHead } from './createHead';
import { createBody } from './createBody';
import { createLegs } from './createLegs';
import { createTail } from './createTail';

function createCat(options, idPrefix) {
  let cat = document.createElement("div");
  cat.setAttribute("id", `cat${idPrefix}`);
  cat.setAttribute("class", "cat");
  cat.style.margin = options.catMargin;
  cat.style.width = options.catWidth;
  cat.style.display = "flex";
  cat.style.flexDirection = "column";
  cat.style.zIndex = "1";
  let ears = createEars(options, idPrefix);
  let { head, svg } = createHead(options, idPrefix);
  let { body, clock } = createBody(options, idPrefix);
  let legs = createLegs(options, idPrefix);
  let tail = createTail(options, idPrefix);
  cat.appendChild(ears);
  cat.appendChild(head);
  cat.appendChild(body);
  cat.appendChild(legs);
  cat.appendChild(tail);
  return { svg, clock, cat };
}

export { createCat };