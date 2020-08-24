import { createCat } from './creationFunctions/createCat';
import { defaultOptions } from './utils/defaultOptions';
let timeZoneList = [];
let catList = [];
let numCats = -1;
document.body.style.backgroundColor = defaultOptions.backgroundColor;
document.body.style.display = "flex";
const screen = document.defaultView.screen;
const availableWidth = screen.availWidth;
function catInit(options) {
  options = { ...defaultOptions, ...options };
  ++numCats;
  const idPrefix = numCats;
  const { svg, clock, cat } = createCat(options, idPrefix);
  document.body.appendChild(cat);
  return { svg, clock, cat };
}


export { catInit, availableWidth, timeZoneList, catList }
