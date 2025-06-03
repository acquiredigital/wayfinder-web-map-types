export type RGB = { r: number; g: number; b: number };
export type RGBA = { r: number; g: number; b: number; a: number };

/**
 * These strings contain default colour states for any mesh associated with this destination (in #rrggbb format).
 * These can be `null`.
 */
export interface Colors {
  normal: RGB | null;
  active: RGB | null;
  selected: RGB | null;
}

export interface Coordinates {
  x: number;
  y: number;
  z: number;
}
