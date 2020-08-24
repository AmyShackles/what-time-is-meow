import { catList } from '../classes/CatFactory';
import { createClock } from '../creationFunctions/createClock';
import { getTimeZone } from '../utils/getTimeZone';

function clock() {
  catList.forEach(({ clock, context, options }, index) => {
    let time = getTimeZone(timeZoneList[index]);
    createClock(context, clock, time, options);
  });
  window.requestAnimationFrame(clock);
}
window.requestAnimationFrame(clock);

export { clock }