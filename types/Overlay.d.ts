import type { RGB, RGBA } from "./utils";

/**
 * This class is used to display floating icons and labels on the map.
 * This includes **amenity** and **transit** icons as well as **floating labels**.
 *
 * Generally you do not need to use this class, and so this information is provided mainly just for reference.
 * @link https://doc.clickup.com/2561453/d/h/2e5dd-10408/789ef7bcbcc6c38/2e5dd-19548
 */
export class Overlay {
  /** The active colour for this overlay */
  get activeColor(): RGBA;
  set activeColor(value: string | RGB | RGBA);

  /** The default colour for this overlay */
  get defaultColor(): RGBA;
  set defaultColor(value: string | RGB | RGBA);

  /** The hover colour for this overlay */
  get hoverColor(): RGBA;
  set hoverColor(value: string | RGB | RGBA);

  /**
   * Directly sets the current colour for this overlay.
   * @param color The new colour
   * @param shadowColor The shadow colour
   * @param transitionTime How long the fade to the new colour should take in milliseconds. Default is `0`
   */
  setCurrentColor(color: RGB, shadowColor: RGB, transitionTime: number): void;
}
