/* eslint-disable */

function clock() {
  catList.forEach(({ clock, context, options }, index) => {
    let time = getTimeZone(timeZoneList[index]);
    createClock(context, clock, time, options);
  });
  window.requestAnimationFrame(clock);
}
window.requestAnimationFrame(clock);
