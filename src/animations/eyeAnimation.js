import { gsap } from 'gsap'
import { availableWidth, catList} from '../initialization';

let requestId = null;

function updateEye(selector) {
  var element = document.getElementById(selector);
  if (availableWidth < 600) {
    const innerEye = element.querySelector(".eye-inner");
    if (innerEye.getAttribute("cx") === "25") {
      innerEye.setAttribute("cx", "15");
    } else if (innerEye.getAttribute("cx") === "105") {
      innerEye.setAttribute("cx", "95");
    }
  }
  gsap.set(element, {
    transformOrigin: "center"
  });

  var bbox = element.getBBox();
  var centerX = bbox.x + bbox.width / 2;
  var centerY = bbox.y + bbox.height / 2;

  function rotateTo(point) {
    if (availableWidth > 600) {
      var dx = point.x - centerX;
      var dy = point.y - centerY;

      var angle = Math.atan2(dy, dx);

      gsap.to(element, 0.3, {
        rotation: angle + "_rad_short"
      });
    }
  }

  return {
    element: element,
    rotateTo: rotateTo
  };
}
function onFrame() {
  if (availableWidth > 600) {
    catList.forEach((cat) => {
      let { point, leftEye, rightEye, svg, mouse } = cat;
      point = mouse.matrixTransform(svg.getScreenCTM().inverse());
      leftEye = leftEye.rotateTo(point);
      rightEye = rightEye.rotateTo(point);
    });
    requestId = null;
  }
}
if (availableWidth > 600) {
  window.addEventListener("mousemove", onMouseMove);
}
function onMouseMove(event) {
  catList.forEach((cat, index) => {
    let { mouse } = cat;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
  if (requestId === null) {
    requestId = requestAnimationFrame(onFrame);
  }
}

export { updateEye }