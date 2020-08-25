import { createCat } from './creationFunctions/createCat';
let timeZoneList = [];
let numCats = -1;
const cats = document.createElement('div');
cats.setAttribute('id', 'cats');
cats.setAttribute('class', 'cats');
cats.style.display = "flex";
const screen = document.defaultView.screen;
const availableWidth = screen.availWidth;
function catInit(options) {
  ++numCats;
  const idPrefix = numCats;
  const { svg, clock, cat } = createCat(options, idPrefix);
  cats.style.backgroundColor = options.backgroundColor;
  cats.appendChild(cat);
  return { svg, clock, cat };
}


export { catInit, availableWidth, timeZoneList, cats }
