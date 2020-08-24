/* eslint-disable */

function createClock(ctx, clock, now, options) {
  options = { ...defaultOptions, ...options };
  if (options.digitalClock) {
    createDigitalClock(clock, now, options);
  } else {
    createAnalogClock(ctx, now, options);
  }
}

function createDigitalClock(clock, now, options) {
  var sec = now.getSeconds();
  sec = sec < 10 ? "0" + sec : sec;
  var min = now.getMinutes();
  min = min < 10 ? "0" + min : min;
  var hr = now.getHours();
  if (options.militaryTime) {
    hr = hr < 10 ? "0" + hr : hr;
  } else {
    hr = hr > 12 ? hr - 12 : hr;
    hr = hr < 10 ? "0" + hr : hr;
  }
  const hour = clock.querySelector(".hour");
  const minute = clock.querySelector(".minute");
  const second = clock.querySelector(".second");
  hour.innerText = hr;
  minute.innerText = min;
  second.innerText = sec;
}

function createAnalogClock(ctx, now, options) {
  ctx.save();
  ctx.clearRect(0, 0, 300, 300);
  ctx.translate(140, 75);
  ctx.scale(0.8, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  // Hour marks
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.strokeStyle = options.hourMarkColor;
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.strokeStyle = options.minuteMarkColor;
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  // write Hours
  ctx.save();
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.strokeStyle = options.hourHandColor;
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.strokeStyle = options.minuteHandColor;
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = options.secondHandColor;
  ctx.fillStyle = options.secondHandColor;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = options.secondHandPointColor;
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = options.clockOutlineColor;

  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.fillStyle = options.clockFaceColor;
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}
