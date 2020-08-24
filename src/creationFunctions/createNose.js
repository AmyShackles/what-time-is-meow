/* eslint-disable */

function createNose(options) {
  options = { ...defaultOptions, ...options };
  let nose = document.createElement("div");
  nose.setAttribute("class", "nose");
  let roundBit = document.createElement("div");
  roundBit.setAttribute("class", "round-bit");
  roundBit.style.width = options.noseWidth;
  roundBit.style.height = options.noseHeight;
  roundBit.style.backgroundColor = options.noseColor;
  roundBit.style.borderRadius = options.noseBorderRadius;
  roundBit.style.margin = options.noseMargin;
  roundBit.style.display = "flex";
  roundBit.style.justifyContent = "space-evenly";
  let nostril1 = document.createElement("div");
  nostril1.setAttribute("class", "nostril");
  nostril1.style.backgroundColor = options.nostrilColor;
  nostril1.style.borderRadius = options.nostrilBorderRadius;
  nostril1.style.marginTop = options.nostrilMarginTop;
  nostril1.style.height = options.nostrilHeight;
  nostril1.style.width = options.nostrilWidth;
  let nostril2 = document.createElement("div");
  nostril1.setAttribute("class", "nostril");
  nostril2.style.backgroundColor = options.nostrilColor;
  nostril2.style.borderRadius = options.nostrilBorderRadius;
  nostril2.style.marginTop = options.nostrilMarginTop;
  nostril2.style.height = options.nostrilHeight;
  nostril2.style.width = options.nostrilWidth;
  roundBit.appendChild(nostril1);
  roundBit.appendChild(nostril2);
  nose.appendChild(roundBit);
  let philtrum = document.createElement("div");
  philtrum.setAttribute("class", "straight-bit");
  philtrum.style.backgroundColor = options.philtrumColor ?? options.noseColor;
  philtrum.style.height = options.philtrumHeight;
  philtrum.style.width = options.philtrumWidth;
  philtrum.style.margin = options.philtrumMargin;
  nose.appendChild(philtrum);
  return nose;
}
