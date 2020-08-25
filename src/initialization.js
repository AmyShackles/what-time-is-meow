import { createCat } from './creationFunctions/createCat';
import { defaultOptions } from './utils/defaultOptions';
let timeZoneList = [];
let numCats = -1;
const cats = document.createElement('div');
cats.setAttribute('id', 'cats');
cats.setAttribute('class', 'cats');
cats.style.backgroundColor = defaultOptions.backgroundColor;
cats.style.display = "flex";
const screen = document.defaultView.screen;
const availableWidth = screen.availWidth;
function catInit(options) {
  options = { ...defaultOptions, ...options };
  ++numCats;
  const idPrefix = numCats;
  const { svg, clock, cat } = createCat(options, idPrefix);
  cats.appendChild(cat);
  return { svg, clock, cat };
}


export { catInit, availableWidth, timeZoneList, cats }
