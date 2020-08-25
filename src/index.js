import { CatFactory, catList } from './classes/CatFactory';
import { defaultOptions } from './utils/defaultOptions';
import { clock } from './animations/clockAnimation';
import { gsap } from 'gsap';
import { cats } from './initialization';

// Initialize the cat factory
let catFactory = new CatFactory();

// Create whatever cats you'd like, passing in whatever options you'd like
catFactory.create('', { digitalClock: true }, true);
catFactory.create('Asia/Hong_Kong', {
  catColor: "green"
}, true);
catFactory.create("Europe/London", { catColor: "red" }, true);
catList[2].addStyles({
  leftEyeColor: "blue",
  minuteMarkColor: "grey"
});
catList[1].addStyles({
  leftBackPawColor: "red",
  secondHandColor: "white",
  clockFaceColor: "rgb(23, 25, 22, 0.3)"
});

window.requestAnimationFrame(clock);

function animate() {
  function animationComplete() {
    animation.restart();
  }
  let animation = gsap.timeline({ onComplete: animationComplete });
  animation
    .to(
      ".ears .left-ear",
      { duration: 3, x: 5, y: 5, skewX: 15, scale: 0.9, rotation: 25 },
      "initial"
    )
    .to(
      ".ears .right-ear",
      { duration: 3, x: 5, y: 5, skewX: 15, scale: 0.9, rotation: 25 },
      "initial"
    )
    .to(".mouth .right-side", { duration: 1, rotation: -20 }, "initial")
    .to(".mouth .left-side", { duration: 1, rotation: 20 }, "initial")
    .to(
      ".tail",
      { duration: 8, rotationY: 180, rotationX: 0, y: 0, x: 220 },
      "initial"
    )
    .to(
      ".ears .left-ear",
      { duration: 3, x: 0, y: 0, skewY: 25, scale: 0.9, rotation: -5 },
      "second"
    )
    .to(
      ".ears .right-ear",
      { duration: 3, x: 0, y: 0, skewY: 35, scale: 0.9, rotation: -5 },
      "second"
    )
    .to(".mouth .right-side", { duration: 1, rotation: 0 }, "second")
    .to(".mouth .left-side", { duration: 1, rotation: 0 }, "second")
    .to(".tail", { duration: 8, rotationY: 0, rotationX: 0, x: 0 }, "second");
    return animation;
}
document.body.appendChild(cats);

const animation = () => animate();
export { catFactory, defaultOptions, animation }