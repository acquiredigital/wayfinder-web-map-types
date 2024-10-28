import type { RGB, RGBA } from "./utils";
import type { IconSettings, LabelSettings } from "./Settings";
import type { Amenity } from "./database/Amenities";
import type { Destination } from "./database/Destination";
import type { TravelTypeIcon } from "./database/TravelTypes";
import type { DestinationMesh } from "./DestinationMesh";

/**
 * This class is used to display floating icons and labels on the map.
 * This includes **amenity** and **transit** icons as well as **floating labels**.
 *
 * Generally you do not need to use this class, and so this information is provided mainly just for reference.
 * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19548
 */
export class Overlay {
  static readonly OverlayTypeFlagship: 0;
  static readonly OverlayTypeMap: 1;
  static readonly OverlayTypeHUD: 2;
  static readonly OverlayTypeAmenity: 3;
  static readonly OverlayTypeTransit: 4;
  static readonly OverlayTypeTransitPopup: 5;

  constructor(
    main: WF.Wayfinder,
    settings: LabelSettings | null,
    data: Destination | Amenity | TravelTypeIcon | null,
    overlayType: 0 | 1 | 2 | 3 | 4 | 5,
    relatedMesh: DestinationMesh | null,
    amenitySettings: IconSettings | null,
    inFrontOfFloatingLabels: boolean,
  );

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

export class FloorChangeCallout {
  static get TickAlignLeft(): 0;
  static get TickAlignCenter(): 1;
  static get TickAlignRight(): 2;

  /** Free memory associated with this */
  release(): void;

  get width(): number;

  get height(): number;

  get hotSpot(): {
    x: number;
    y: number;
  };

  /** Return the last alignment rendered */
  get alignment(): 0 | 1 | 2;

  get hitBox(): {
    x: number;
    y: number;
    w: number;
    h: number;
  };

  get texture(): any;
}
