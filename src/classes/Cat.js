/* eslint-disable */

class Cat {
  constructor(
    svg,
    clock,
    context,
    leftEye,
    rightEye,
    mouse,
    point,
    cat,
    options,
    isDefault = false
  ) {
    this.svg = svg;
    this.clock = clock;
    this.context = context;
    this.leftEye = leftEye;
    this.rightEye = rightEye;
    this.mouse = mouse;
    this.point = point;
    this.cat = cat;
    this.options = options;
    this.isDefault = isDefault;
    this.addStyles =  function(styles) {
      Object.entries(styles).forEach(([key, value]) => {
        let side = /right/.test(key) ? "right" : "left";
        if (/(?:browridge)|(?:eyes)/gi.test(key)) {
          this.styleEyes([key, value]);
        } else if (/(?:frontpaw)|(?:arm)/gi.test(key)) {
          this.styleLimb([key, value], side, "arm");
        } else if (/(?:backpaw)|(?:leg)/gi.test(key)) {
          this.styleLimb([key, value], side, "leg");
        } else if (/sclera|pupil|eye/gi.test(key)) {
          this.styleEye([key, value], side);
        } else if (/(?:clockWidth)|(?:clockHeight)/gi.test(key)) {
          this.styleClock([key, value]);
        } else if (
          /(?:minute)|(?:hour)|(?:second)|(?:clockface)|(?:clockoutline)/gi.test(
            key
          )
        ) {
          this.options[key] = value;
        } else if (/head/gi.test(key)) {
          this.styleHead([key, value]);
        } else if (/nose/i.test(key)) {
          this.styleNose([key, value]);
        } else if (/nostril/i.test(key)) {
          this.styleNostril([key, value]);
        } else if (/philtrum/i.test(key)) {
          this.stylePhiltrum([key, value]);
        } else if (/ear/i.test(key)) {
          this.styleEar([key, value], side);
        } else if (/lip/i.test(key)) {
          this.styleLip([key, value]);
        } else if (/torso/i.test(key)) {
          this.styleTorso([key, value]);
        } else if (/tail/i.test(key)) {
          this.styleTail([key, value]);
        } else if (/cat/i.test(key)) {
          this.styleCat([key, value])
        }
      });
    }
  }
  styleLip([attribute, value]) {
    const lips = this.cat.querySelectorAll(`.mouth .left-side, .mouth .right-side`);
    attribute = attribute.replace(/lip/i, '');
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    lips.forEach(lip => {
      lip.style[attribute] = value;
    })
  }
  styleTorso([attribute, value]) {
    const torso = this.cat.querySelector('.torso');
    attribute = attribute.replace(/toso/i, '');
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    torso.style[attribute] = value;
  }
  styleTail([attribute, value]) {
    const tail = this.cat.querySelector('.tail');
    attribute = attribute.replace(/tail/i, '');
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    tail.style[attribute] = value;
  }
  styleCat([attribute, value]) {
    const cat = this.cat;
    attribute = attribute.replace(/cat/i, '');
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    if (attribute === 'color') {
      const arms = this.cat.querySelectorAll('.left-arm, .right-arm');
      arms.forEach(arm => {
        arm.style.backgroundColor = value;
      })
      const legs = this.cat.querySelectorAll('.left-leg, .right-leg');
      legs.forEach(leg => {
        leg.style.backgroundColor = value;
      });
      const ears = this.cat.querySelectorAll('.left-ear, .right-ear');
      ears.forEach(ear => {
        ear.style.borderBottomColor = value;
      });
      const head = this.cat.querySelector('.head');
      head.style.backgroundColor = value;
      const torso = this.cat.querySelector('.torso');
      torso.style.backgroundColor = value;
      const tail = this.cat.querySelector('.tail');
      tail.style.borderColor = value;
    } else {
      cat.style[attribute] = value;
    }
  }
  styleEar([attribute, value], side) {
    const ear = this.cat.querySelector(`.${side}-ear`);
    if (attribute === `${side}EarColor`) {
      ear.style.borderBottomColor = value;
    } else if (attribute === `${side}EarHeight`) {
      ear.style.borderBottomWidth = value;
    }
  }
  styleEye(style, side) {
    let [attribute, value] = style;
    let innerEye = this[`${side}Eye`].element.querySelector(".eye-inner");
    let outerEye = this[`${side}Eye`].element.querySelector(".eye-outer");
    let partInference = /inner/gi.test(attribute) ? innerEye : outerEye;
    switch (attribute) {
      case `${side}PupilSize`:
        innerEye.setAttribute("r", value);
        break;
      case `${side}PupilColor`:
      case `${side}EyeColor`:
        innerEye.style.fill = value;
        break;
      case `${side}ScleraColor`:
        outerEye.style.fill = value;
        break;
      case `${side}ScleraOutlineWidth`:
        outerEye.style.strokeWidth = value;
        break;
      case `${side}ScleraOutlineColor`:
        outerEye.style.stroke = value;
        break;
      default:
        attribute = convertAttributeToStyleProp(attribute);
        partInference.style[attribute] = value;
        break;
    }
  }
  styleLimb(style, side, limbType) {
    let [attribute, value] = style;
    let limb = this.cat.querySelector(`.${side}-${limbType}`);
    let limbDescription = /arm/.test(limbType) ? "FrontPaw" : "BackPaw";
    // If a number is passed in for size, assume measurement is in px
    if (typeof value === "number") {
      value += "px";
    }
    switch (attribute) {
      case `${side}${limbDescription}Size`:
        limb.style.width = value;
        limb.style.height = value;
        break;
      case `${side}${limbDescription}Color`:
        limb.style.backgroundColor = value;
        break;
      default:
        attribute = convertAttributeToStyleProp(attribute);
        limb.style[attribute] = value;
        break;
    }
  }
  styleEyes([attribute, value]) {
    const eyes = this.cat.querySelector(".eyes");
    attribute = attribute.replace(/(?:browridge)|(?:eyes)/gi, "");
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    eyes.style[attribute] = value;
  }
  styleClock([attribute, value]) {
    const clock = this.clock;
    attribute = attribute.replace(/clock/gi, "");
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    clock.style[attribute] = value;
  }
  styleHead([attribute, value]) {
    const head = this.cat.querySelector(".head");
    attribute = attribute.replace(/head/gi, "");
    if (/color/i.test(attribute)) {
      attribute = "backgroundColor";
    } else {
      attribute = attribute[0].toLowerCase() + attribute.slice(1);
    }
    head.style[attribute] = value;
  }
  styleNose([attribute, value]) {
    const nose = this.cat.querySelector(".round-bit");
    attribute = attribute.replace(/nose/i, "");
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    nose.style[attribute] = value;
  }
  styleNostril([attribute, value]) {
    const nostrils = this.cat.querySelectorAll(".nostril");
    attribute = attribute.replace(/nostril/i, "");
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    nostrils.forEach((nostril) => {
      nostril.style[attribute] = value;
    });
  }
  stylePhiltrum([attribute, value]) {
    const philtrum = this.cat.querySelector(".straight-bit");
    attribute = attribute.replace(/philtrum/i, "");
    if (/color/i.test(attribute)) {
      attribute = "backgroundColor";
    } else {
      attribute = attribute[0].toLowerCase() + attribute.slice(1);
    }
    philtrum.style[attribute] = value;
  }

}

export { Cat }