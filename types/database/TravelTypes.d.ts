import type { DatabaseBase } from "./Base";

/**
 * The message contained within the button and text fields can contains special tokens which should be substituted with current information when displayed.
 * These tokens are as follows:
 *
 * | Token  | Description |
 * | :----- | :-------------------------------------------- |
 * | ^      | The name of the map/floor the route is travelling **from** |
 * | {      | The short name of the map/floor the route is travelling **from** |
 * | @      | The name of the map/floor the route is travelling **to** |
 * | }      | The short name of the map/floor the route is travelling **to** |
 * | ~      | The name of the building being travelled **to/from** |
 */
type SpecialTags = string;

interface TravelTypeIcon {
  /** One of the TravelType properties. */
  readonly mode: 0 | 1 | 2;
  /** The URL of the travel/transit icon */
  readonly url: string;
}

/** @link https://doc.clickup.com/2561453/p/h/2e5dd-19288/6651ad4daef5747/2e5dd-19588 */
export interface TravelType {
  /**
   * When a route has been generated, and it goes through a node that uses this travel type, a popup is displayed.
   * This is a mapping of the *language to text* for the **Continue** button (not currently used)
   * @see {@link SpecialTags}
   */
  readonly button: SpecialTags;
  /** An object describing the icon that could be placed upon entering this travel type */
  readonly entry_icon: TravelTypeIcon;
  /** An object describing the icon that could be placed upon exiting this travel type */
  readonly exit_icon: TravelTypeIcon;
  /**
   * A string that represents the unique ID (name) for this travel type.
   * @example "NORMAL"
   * @example "LIFT"
   * @example "STAIRS"
   */
  readonly id: string;
  /** If set to `1`, then the route line will be displayed for this travel type, else it will be hidden/invisible. */
  readonly showline: 1 | 0;
  /**
   * When a route has been generated, and it goes through a node that uses this travel type, a popup is displayed.
   * This is the text to show in this popup, as mapping of the *language to text*.
   * @see {@link SpecialTags}
   */
  readonly text: SpecialTags;
  /** An alias of {@link id} */
  readonly type: TravelType["id"];
}

/**
 * Travel Types are used to describe how (during routing) you move from one node to the next.
 * These types have specific rules, including their accessible nature and so on.
 * Switching between types can cause an transit overlay icon to appear on the map.
 *
 * @link https://doc.clickup.com/2561453/p/h/2e5dd-19288/6651ad4daef5747/2e5dd-19588
 */
export class TravelTypesDatabase extends DatabaseBase<TravelType> {
  static get TravelTypeAlwaysHide(): 0;
  static get TravelTypeAlwaysShow(): 1;
  static get TravelTypeOnlyRouteShow(): 2;
}
