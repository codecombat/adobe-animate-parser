import CocoSchema from "./CocoSchema";
export default class Ease extends CocoSchema {
  static linear(t) {
    return t;
  }

  static none(t) {
    return t;
  }

  static get(amount) {
    if (amount < -1) {
      amount = -1;
    } else if (amount > 1) {
      amount = 1;
    }
    return function (t) {
      if (amount == 0) {
        return t;
      }
      if (amount < 0) {
        return t * (t * -amount + 1 + amount);
      }
      return t * ((2 - t) * amount + (1 - amount));
    };
  }

  static getPowIn(pow) {
    return function (t) {
      return Math.pow(t, pow);
    };
  }

  static getPowOut(pow) {
    return function (t) {
      return 1 - Math.pow(1 - t, pow);
    };
  }

  static getPowInOut(pow) {
    return function (t) {
      if ((t *= 2) < 1) return 0.5 * Math.pow(t, pow);
      return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
    };
  }

  static quadIn() {
    return Ease.getPowIn(2);
  }

  static quadOut() {
    return Ease.getPowOut(2);
  }

  static quadInOut() {
    return Ease.getPowInOut(2);
  }

  static cubicIn() {
    return Ease.getPowIn(3);
  }

  static cubicOut() {
    return Ease.getPowOut(3);
  }

  static cubicInOut() {
    return Ease.getPowInOut(3);
  }

  static quartIn() {
    return Ease.getPowIn(4);
  }

  static quartOut() {
    return Ease.getPowOut(4);
  }

  static quartInOut() {
    return Ease.getPowInOut(4);
  }

  static quintIn() {
    return Ease.getPowIn(5);
  }

  static quintOut() {
    return Ease.getPowOut(5);
  }

  static quintInOut() {
    return Ease.getPowInOut(5);
  }

  static sineIn(t) {
    return 1 - Math.cos((t * Math.PI) / 2);
  }

  static sineOut(t) {
    return Math.sin((t * Math.PI) / 2);
  }

  static sineInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  }

  static getBackIn(amount) {
    return function (t) {
      return t * t * ((amount + 1) * t - amount);
    };
  }

  static backIn(t) {
    return Ease.getBackIn(1.7);
  }

  static getBackOut(amount) {
    return function (t) {
      return --t * t * ((amount + 1) * t + amount) + 1;
    };
  }

  static backOut(t) {
    return Ease.getBackOut(1.7);
  }

  static getBackInOut(amount) {
    amount *= 1.525;
    return function (t) {
      if ((t *= 2) < 1) return 0.5 * (t * t * ((amount + 1) * t - amount));
      return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
    };
  }

  static backInOut(t) {
    return Ease.getBackInOut(1.7);
  }

  static circIn(t) {
    return -(Math.sqrt(1 - t * t) - 1);
  }

  static circOut(t) {
    return Math.sqrt(1 - --t * t);
  }

  static circInOut(t) {
    if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  }

  static bounceIn(t) {
    return 1 - Ease.bounceOut(1 - t);
  }

  static bounceOut(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
  }

  static bounceInOut(t) {
    if (t < 0.5) return Ease.bounceIn(t * 2) * 0.5;
    return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
  }

  static getElasticIn(amplitude, period) {
    const pi2 = Math.PI * 2;
    return function (t) {
      if (t == 0 || t == 1) return t;
      const s = (period / pi2) * Math.asin(1 / amplitude);
      return -(
        amplitude *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t - s) * pi2) / period)
      );
    };
  }

  static elasticIn(t) {
    return Ease.getElasticIn(1, 0.3);
  }

  static getElasticOut(amplitude, period) {
    const pi2 = Math.PI * 2;
    return function (t) {
      if (t == 0 || t == 1) return t;
      const s = (period / pi2) * Math.asin(1 / amplitude);
      return (
        amplitude * Math.pow(2, -10 * t) * Math.sin(((t - s) * pi2) / period) +
        1
      );
    };
  }

  static elasticOut(t) {
    return Ease.getElasticOut(1, 0.3);
  }

  static getElasticInOut(amplitude, period) {
    const pi2 = Math.PI * 2;
    return function (t) {
      const s = (period / pi2) * Math.asin(1 / amplitude);
      if ((t *= 2) < 1)
        return (
          -0.5 *
          (amplitude *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t - s) * pi2) / period))
        );
      return (
        amplitude *
          Math.pow(2, -10 * (t -= 1)) *
          Math.sin(((t - s) * pi2) / period) *
          0.5 +
        1
      );
    };
  }

  static elasticInOut(t) {
    return Ease.getElasticInOut(1, 0.3 * 1.5);
  }
}
