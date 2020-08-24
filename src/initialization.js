import { createCat } from './creationFunctions/createCat';
import { defaultOptions } from './utils/defaultOptions';
let timeZoneList = [];
let numCats = -1;


const screen = document.defaultView.screen;
const availableWidth = screen.availWidth;
function catInit(options) {
  options = { ...defaultOptions, ...options };
  ++numCats;
  const idPrefix = numCats;
  const { svg, clock, cat } = createCat(options, idPrefix);
  return { svg, clock, cat };
}


export { catInit, availableWidth, timeZoneList, }
