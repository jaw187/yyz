import * as MathUtil from "canvas-sketch-util/math";
import * as Random from "canvas-sketch-util/random";
import * as Color from "canvas-sketch-util/color";
import * as Geometry from "canvas-sketch-util/geometry";
import * as Config from "./config";

export const math = MathUtil;
export const random = Random;
export const color = Color;
export const config = Config;
export const geometry = Geometry;

math.map = math.mapRange;
math.range = range;

function range() {
  let stop;
  let start = 0;
  let step = 1;
  if (arguments.length === 1) {
    stop = arguments[0];
  } else if (arguments.length > 1) {
    start = arguments[0] | 0;
    stop = arguments[1] | 0;
    step =
      (arguments[2] != null &&
      typeof arguments[2] === "number" &&
      isFinite(arguments[2])
        ? arguments[2]
        : 1) | 0;
  } else {
    throw new Error("range() must include 1, 2, or 3 parameters");
  }
  if (step === 0) throw new Error("range() step must not be zero");
  const arr = [];
  while (start < stop) {
    arr.push(start);
    start += step;
  }
  return arr;
}
