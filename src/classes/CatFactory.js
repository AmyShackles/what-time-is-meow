import { defaultOptions } from '../utils/defaultOptions';
import { catInit, timeZoneList } from '../initialization';
import { getTimeZone } from '../utils/getTimeZone';
import { createClock } from '../creationFunctions/createClock';
import { updateEye } from '../animations/eyeAnimation';
import { Cat } from './Cat';

function CatFactory() {
  this.create = function (timeZone, options) {
    options = { ...defaultOptions, ...options };
    let { svg, clock, cat } = catInit(options);
    let context = options.digitalClock ? {} : clock.getContext("2d");
    timeZoneList.push(timeZone);
    let timeZoneLabel = document.createElement("P");
    timeZoneLabel.style.color = "white";
    timeZoneLabel.style.textAlign = "center";
    timeZoneLabel.style.fontSize = "20px";
    if (timeZone) {
      timeZoneLabel.innerText = timeZone;
    } else {
      timeZoneLabel.innerText = "Local Time";
    }
    // Adds a label above the cat with timezone
    cat.prepend(timeZoneLabel);
    let time = getTimeZone(timeZone);
    createClock(context, clock, time, options);
    let mouse = svg.createSVGPoint();
    let leftEye = updateEye(`${cat.id}-left-eye`);
    let rightEye = updateEye(`${cat.id}-right-eye`);
    let point = mouse.matrixTransform(svg.getScreenCTM().inverse());
    return new Cat(
      svg,
      clock,
      context,
      leftEye,
      rightEye,
      mouse,
      point,
      cat,
      options
    );
  };
}

export { CatFactory };