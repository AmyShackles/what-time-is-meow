let defaultOptions = {
  // Entire page
  backgroundColor: "black",
  // Eyes
  browRidgeHeight: "90px",
  eyesSVGPosition: "relative",
  eyesSVGHeight: "100px",
  eyesSVGWidth: "120px",
  eyesSVGPaddingTop: "5px",
  eyesSVGPaddingLeft: "35px",
  pupilColor: "black",
  leftScleraColor: "white",
  rightScleraColor: "white",
  rightPupilColor: "white",
  leftPupilColor: "white",
  scleraColor: "white",
  scleraOutlineWidth: 2,
  scleraOutlineColor: "#000",
  // Arms
  leftFrontPawSize: "50px",
  leftFrontPawRadius: "80%",
  leftFrontPawMarginRight: "-25px",
  rightFrontPawSize: "50px",
  rightFrontPawRadius: "80%",
  rightFrontPawMarginLeft: "-30px",
  // Legs
  leftBackPawHeight: "50px",
  leftBackPawWidth: "50px",
  leftBackPawBorderRadius: "50%",
  leftBackPawMarginTop: "-40px",
  rightBackPawHeight: "50px",
  rightBackPawWidth: "50px",
  rightBackPawBorderRadius: "50%",
  rightBackPawMarginTop: "-40px",
  // Cat
  catMargin: "auto",
  catWidth: "380px",
  catColor: "yellow",
  // Ears
  leftEarHeight: "70px",
  rightEarHeight: "70px",
  // Clock
  clockFaceColor: "rgb(255, 255, 255, 0.3)",
  secondHandPointColor: "rgba(0, 0, 0, 0)",
  clockOutlineColor: "black",
  secondHandColor: "#D40000",
  minuteHandColor: "black",
  hourHandColor: "black",
  minuteMarksColor: "black",
  hourMarkColor: "black",
  // Head
  headWidth: "50%",
  headHeight: "100px",
  headBorderRadius: "50%",
  headMargin: "-30px auto",
  // Nose
  noseWidth: "40px",
  noseHeight: "12px",
  noseColor: "pink",
  noseBorderRadius: "20px / 10px",
  noseMargin: "-40px auto auto calc(50% - 15px)",
  nostrilMarginTop: "7px",
  nostrilHeight: "2.5px",
  nostrilWidth: "2.5px",
  nostrilColor: "black",
  nostrilBorderRadius: "50%",
  philtrumHeight: "10px",
  philtrumWidth: "5px",
  philtrumMargin: "0 calc(50% + 3px)",
  // Mouth
  lipWidth: "22px",
  lipHeight: "10px",
  lipBottomLeftRadius: "15px",
  lipBottomRightRadius: "15px",
  lipBorder: ".5px solid black",
  lipBorderTop: "0",
  mouthMargin: "auto 23% auto auto",
  // Torso
  torsoHeight: "300px",
  torsoWidth: "75%",
  torsoBorderRadius: "50%",
  // Tail
  tailRightBorderWidth: "40px",
  tailBottomBorderWidth: "0px",
  tailWidth: "230px",
  tailHeight: "200px",
  tailMarginRight: "230px",
  tailCurve: "200px",
  tailMarginTop: "-30px",
  militaryTime: true
};

// These values are dependent on other values, so need to be set separately
defaultOptions.clockHeight = defaultOptions.digitalClock ? "100px" : "300px";
defaultOptions.clockWidth = defaultOptions.digitalClock ? "240px" : "300px";


export { defaultOptions }