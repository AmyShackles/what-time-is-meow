import { defaultOptions } from '../utils/defaultOptions'

function createTorso(options) {
  options = { ...defaultOptions, ...options };
  let torso = document.createElement("div");
  torso.setAttribute("class", "torso");
  torso.style.backgroundColor = options.torsoColor ? options.torsoColor : options.catColor;
  torso.style.height = options.torsoHeight;
  torso.style.width = options.torsoWidth;
  torso.style.borderRadius = options.torsoBorderRadius;
  torso.style.display = "flex";
  torso.style.alignItems = "center";
  function clockInit() {
    if (options.digitalClock) {
      return digitalClockInit(options);
    }
    let clock = document.createElement("canvas");
    clock.setAttribute("class", "clock");
    clock.style.height = options.clockHeight;
    clock.style.width = options.clockWidth;
    return clock;
  }
  let clock = clockInit();
  torso.appendChild(clock);
  return { torso, clock };
}

function digitalClockInit(options) {
  let clock = document.createElement("div");
  clock.style.display = "flex";
  clock.style.justifyContent = "center";
  clock.style.alignItems = "center";
  clock.style.fontSize = "60px";
  clock.style.margin = "auto";
  clock.style.height = "100px";
  clock.style.width = "240px";
  clock.style.border = `5px solid ${options.clockOutlineColor}`;
  clock.style.backgroundColor = options.clockFaceColor;
  const hour = document.createElement("p");
  hour.setAttribute("class", "hour");
  hour.style.color = options.hourHandColor;
  const firstSeparator = document.createElement("p");
  firstSeparator.innerText = ":";
  const minute = document.createElement("p");
  minute.setAttribute("class", "minute");
  minute.style.color = options.minuteHandColor;
  const secondSeparator = document.createElement("p");
  secondSeparator.innerText = ":";
  const second = document.createElement("p");
  second.setAttribute("class", "second");
  second.style.color = options.secondHandColor;
  clock.appendChild(hour);
  clock.appendChild(firstSeparator);
  clock.appendChild(minute);
  clock.appendChild(secondSeparator);
  clock.appendChild(second);
  return clock;
}

export { createTorso }