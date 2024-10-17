import type { Box3, Vector3 } from "three";
import type { Coordinates } from "./utils";

/**
 *
 * @link https://doc.clickup.com/2561453/d/h/2e5dd-10408/789ef7bcbcc6c38/2e5dd-19388
 */
export class Bounds {
  /** Returns a compatiable `THREE.Box3` object */
  get box3(): Box3 | null;

  /** Returns an object containing an `x`, `y` and `z` property representing the exact center of the bounding box/cube. */
  get center(): Coordinates | null;

  /**
   * Combains the supplied bounds with the current bounds resulting in a bounds that encompases both.
   * Bounds can be a {@link Bounds} or `THREE.Box3` object.
   */
  combine(bounds: Bounds | Box3 | Coordinates): boolean;
  /** Enlarges the current bounds to include the `x`, `y` and `z` coordinates supplied. */
  combinePoint(x: number, y: number, z: number): void;
  /**
   * Combines the coordinates from the supplied vector object, which contains an `x`, `y` and `z` property.
   * Compatible with a `THREE.Vector3` object.
   */
  combineVector(v: Coordinates | Vector3): void;

  /** Makes a copy of this object */
  copy(): Bounds;
  /** Makes a copy of this object and scales it by the amount supplied. */
  getScaledBox(scale: number): Bounds;

  /** Returns `true` if any of the bounds is infinite */
  get infinity(): boolean;

  /**
   * Returns an object containing the maximum coordinate of the bounding box/cube.
   * The object contains an `x`, `y` and `z` property.
   */
  get max(): Coordinates | null;
  /**
   * Returns an object containing the minimum coordinate of the bounding box/cube.
   * The object contains an `x`, `y` and `z` property.
   */
  get min(): Coordinates | null;

  /** Moves the bounding box by the supplied values. */
  offsetBy(x: number, y: number, z: number): void;

  /** Initializes this object using the values from the supplied `THREE.Box3` object */
  populateFromBox3(box: Box3): void;
  /** Initializes this object using the values from the supplied {@link Bounds} object */
  populateFromWayfinderBounds(bounds: Bounds): void;

  /** Scales the object by the specified amount */
  scale(scale: number): void;

  /** Overrides the maximum bounds and changes them to the coordinates supplied */
  setMax(x: number, y: number, z: number): void;
  /** Overrides the minimum bounds and changes them to the coordinates supplied */
  setMin(x: number, y: number, z: number): void;

  /** Returns an object containing the size of the bounds with properties `x`, `y` and `z`. */
  get size(): Coordinates | null;

  /** Returns `false` if any of the properties are `null` */
  get valid(): boolean;
}
