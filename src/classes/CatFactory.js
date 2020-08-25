import { defaultOptions } from '../utils/defaultOptions';
import { catInit, timeZoneList, cats } from '../initialization';
import { getTimeZone } from '../utils/getTimeZone';
import { createClock } from '../creationFunctions/createClock';
import { updateEye } from '../animations/eyeAnimation';
import { Cat } from './Cat';

let catList = [];

function CatFactory() {
  this.catList = catList;
  this.create = function (timeZone = '', options, isDefault) {
    if (arguments.length === 1) {
      options = arguments[0];
      timeZone = "";
    }
    options = { ...defaultOptions, ...options };
    let { svg, clock, cat } = catInit(options);
    let context = options.digitalClock ? {} : clock.getContext("2d");
    timeZoneList.push(timeZone);
    let timeZoneLabel = document.createElement("P");
    timeZoneLabel.style.color = "white";
    timeZoneLabel.style.textAlign = "center";
    timeZoneLabel.style.fontSize = "20px";
    if (timeZone) {
      timeZoneLabel.innerText = timeZone.replace('_', ' ');
    } else {
      timeZoneLabel.innerText = "Local Time";
    }
    // Adds a label above the cat with timezone
    cat.prepend(timeZoneLabel);
    let time = getTimeZone(timeZone);
    createClock(context, clock, time, options);
    let mouse = svg.createSVGPoint();
    let leftEye = updateEye(cat, `#${cat.id}-left-eye`);
    let rightEye = updateEye(cat, `#${cat.id}-right-eye`);
    let point = mouse.matrixTransform(svg.getScreenCTM().inverse());
    const newCat = new Cat(
      svg,
      clock,
      context,
      leftEye,
      rightEye,
      mouse,
      point,
      cat,
      options,
      isDefault
    );
    catList.push(newCat);
    this.catList = catList;
    return newCat;
  };
  this.removeDefaults = function() {
    let remainingCats = [];
    catList.forEach(cat => {
      const catDiv = cat.cat;
      const { isDefault } = cat;

      if (isDefault) {
        cats.removeChild(catDiv);
      } else {
        remainingCats.push(cat)
      }
    })
    catList = remainingCats;
    this.catList = catList;
  }
  this.updateDefaultOptions = function(update) {
    Object.entries(update).map(([key, value]) => {
      defaultOptions[key] = value;
    })
    return defaultOptions;
  }
}

export { CatFactory, catList, defaultOptions };