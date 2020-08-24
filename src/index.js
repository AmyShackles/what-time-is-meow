import { CatFactory } from './classes/CatFactory';
import { catList } from './initialization';
import { defaultOptions } from './utils/defaultOptions';

// Initialize the cat factory
let catFactory = new CatFactory();

// Create whatever cats you'd like, passing in whatever options you'd like
let localCat = catFactory.create("", { digitalClock: true });
let sidneyCat = catFactory.create(`Australia/Sydney`, {
  catColor: "green"
});
let londonCat = catFactory.create("Europe/London", { catColor: "red" });

// Cats pushed to an array in order to access them by index
// This is an important step for some animation logic
catList.push(localCat);
catList.push(sidneyCat);
catList.push(londonCat);

catList[2].addStyles({
  leftEyeColor: "blue",
  minuteMarkColor: "grey"
});
catList[1].addStyles({
  leftBackPawColor: "red",
  secondHandColor: "white",
  clockFaceColor: "rgb(23, 25, 22, 0.3)"
});

export { catFactory, catList, defaultOptions }