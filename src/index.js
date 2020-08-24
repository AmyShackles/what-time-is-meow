import { CatFactory, catList } from './classes/CatFactory';
import { defaultOptions } from './utils/defaultOptions';

// Initialize the cat factory
let catFactory = new CatFactory();

// Create whatever cats you'd like, passing in whatever options you'd like
catFactory.create("", { digitalClock: true });
catFactory.create(`Australia/Sydney`, {
  catColor: "green"
});
catFactory.create("Europe/London", { catColor: "red" });

catList[2].addStyles({
  leftEyeColor: "blue",
  minuteMarkColor: "grey"
});
catList[1].addStyles({
  leftBackPawColor: "red",
  secondHandColor: "white",
  clockFaceColor: "rgb(23, 25, 22, 0.3)"
});

export { catFactory, defaultOptions }