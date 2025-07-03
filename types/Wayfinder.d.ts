import type { RGB, RGBA, Coordinates } from "./utils";
import type { Database } from "./Database";
import type { Floor } from "./database/Floor";
import type { Bounds } from "./Bounds";
import type { Node } from "./database/Node";
import type { Settings, SettingsInput } from "./Settings";
import type { WayfinderLocation } from "./Location";

/**
 * Wayfinder class
 * @link https://doc.clickup.com/2561453/d/h/2e5dd-10408/789ef7bcbcc6c38/2e5dd-19368
 */
export class Wayfinder extends EventTarget {
  constructor(rootDIV: HTMLElement, settings?: SettingsInput);

  /** A string with the current version */
  static BuildVersion: string;
  /** When this was created, in dd/mm/yyyy format */
  static BuildDate: string;

  /** Integer value to use with the {@link getFloorBounds()} function */
  static get BoundaryTypeFloorActiveArea(): 0;
  /** Integer value to use with the {@link getFloorBounds()} function */
  static get BoundaryTypeFloorArea(): 1;
  /** Integer value to use with the {@link getFloorBounds()} function */
  static get BoundaryTypeEntireRoute(): 2;
  /** Integer value to use with the {@link getFloorBounds()} function */
  static get BoundaryTypeRouteLeg(): 3;

  /** Converts multiple types of colour input into a standard object containing `r`, `g`, `b` and a properties that have a range between 0 and 255. */
  static GetRGB(color: HEX): RGBA;
  /** Converts an object with properties `r`, `g` and `b`, into hex notatation suitable for use with CSS. */
  static RGB2Hex({ r, g, b }: RGB): HEX;
  /** Converts a url of the form wayfinderstorager.blob.core.windows.net to cdn.wayfinder.acquiredigital.com */
  static ToCDN(url: string): string;

  /** The current rotational angle of the map in degrees. */
  get angle(): number;
  set angle(value: number);

  /**
   * Pans and zooms the map such that the map coordinates provided fit within the display.
   *
   * @param bounds A {@link Bounds} object describing the region
   * @param angle The rotational angle of the map to spin to. Defaults to `null`
   * @param tilt The tilt of the map to use. Defaults to `null`
   * @param animate If the function should smoothly animate to these bounds or not. Defaults to `false`
   * @returns A promise on completion.
   */
  animateToBounds(
    bounds: Bounds,
    angle?: number | null,
    tilt?: number | null,
    animate?: boolean,
  ): Promise<void>;

  /** Clears and removes any active route */
  clearRoute(): void;

  /** Provides access to the {@link Database} object */
  get database(): Database;

  /** Returns the current floor ID */
  get floorId(): Floor["id"];

  /**
   * Returns a {@link Bounds} object that describes the minimum and maximum coordinates of the map, where
   *
   * @param floorId The floor to get bounds from
   * @param type Can be one of:
   * - {@link BoundaryTypeFloorActiveArea}
   * - {@link BoundaryTypeFloorArea}
   * - {@link BoundaryTypeEntireRoute}
   * - {@link BoundaryTypeRouteLeg}
   * Default is {@link BoundaryTypeFloorActiveArea}
   * @param leg If type is set to {@link BoundaryTypeRouteLeg} then this allows you to extract the bounds of a specific part of a route.
   * This is only useful if following a route leads to another map, and then back to this one.
   * Default is `0`
   */
  getFloorBounds(
    floorId: Floor["id"],
    type?:
      | typeof Wayfinder.BoundaryTypeFloorActiveArea
      | typeof Wayfinder.BoundaryTypeFloorArea
      | typeof Wayfinder.BoundaryTypeEntireRoute
      | typeof Wayfinder.BoundaryTypeRouteLeg,
    leg?: number,
  ): Bounds | null;

  /** Boolean indicating whether the database data has finished loading. */
  get loaded(): boolean;

  /**
   * Loads and sets up the map from the api key string provided.
   * @param key The api key to use
   * @returns A promise that resolves when the map is loaded
   */
  loadFromApiKey(key: string): Promise<void>;
  /**
   * Loads and sets up the map from jsonData object.
   * This is in the format generated via the Wayfinder CMS.
   * @returns A promise that resolves when the map is loaded
   */
  loadFromJSON(jsonData: unknown): Promise<void>;

  /**
   * Moves the center of the map to a new position
   *
   * @param position The new position to move/pan to.
   * Position is an object with `x`, `y` and `z` properties, although the `y` property is not used.
   * @param animate If true then the map moves over a small interval as oppose to instantly moving there.
   * Defaults to `true`
   * @returns A promise for completion or error.
   */
  panTo(position: Coordinates, animate?: boolean): Promise<void>;

  /** The position of the map on screen. */
  get position(): Coordinates;
  set position(value: Coordinates);

  /** Boolean indicating whether all background assets have finished loading.  */
  get ready(): boolean;

  /**
   * The map only re-renders if something changes.
   * This will cause a re-draw of the map.
   */
  redraw(): void;

  /** Restores all meshes and icons back to their default non-selected state */
  resetSelection(): void;

  /** The HTML element passed into the constructor */
  get rootDIV(): HTMLElement;

  /**
   * Requests a route to be generated
   * @param startId The ID of a node to start from
   * @param endIds An array of target node IDs. The nearest one will be the route returned.
   * @param useDDA If true makes the routing engine generate more accessible routes.
   * @returns A promise for success/failure
   */
  routeBetween(
    startId: Node["id"],
    endIds: Node["id"][],
    useDDA: 0 | 1,
  ): Promise<{
    status: RouteStatus;
    waypoints: RouteWaypoint[];
  }>;

  /**
   * Changes the display type.
   *
   * @param perspectiveView
   *  - `true` for perspective view
   *  - `false` for orthographic view
   */
  setViewMode(perspectiveView: boolean): void;

  /**
   * Switches the map to a different map
   * @param floorId The map to change to
   * @param animate If an animation should occur for the transition (not currently implemented). Default is `false`
   * @param waitForLoad If the map is not currently loaded then the function will wait for this. Default is `true`
   */
  showFloor(
    floorId: Floor["id"],
    animate?: boolean,
    waitForLoad?: boolean,
  ): Promise<void>;

  /** Returns the current map size in pixels */
  get size(): { width: number; height: number };

  /** Allows access to the {@link Settings} object */
  get settings(): Settings;

  /** The current elevation angle of the map in degrees between `30` and `90`, where `90` is top-down */
  get tilt(): number;
  set tilt(value: number);

  /**
   * Zooms the map in or out.
   * @param delta A negative value causes zoom out by 10%. A positive value causes zoom in by 10%.
   */
  public zoomBy(delta: number): void;

  /**
   * The current zoom level of the map.
   * Between 0 and 100
   * - `0` is fully zoomed out
   * - `100` is fully zoomed in
   */
  get zoomLevel(): number;
  set zoomLevel(value: number);

  /** Access to the location service */
  get locationService(): WayfinderLocation;

  /** Whether location services are enabled or not */
  get showCurrentLocation(): boolean;
  /** Enable / Disable location services */
  set showCurrentLocation(value: boolean);
}

type RouteStatus = {
  delay: number;
  /** Distance in meters */
  distance: number;
  dynamicData: 0 | 1; // TODO: Check if this is a boolean
  price: number;
  /** Time in seconds */
  time: number;
};

type RouteWaypoint = {
  floor: Floor;
  nodes: {
    leg: number;
    type: {
      button: Record<string, string>;
      entry_icon: {
        mode: number;
        url: string;
      };
      exit_icon: {
        mode: number;
        url: string;
      };
      showline: 0 | 1;
      text: [];
      type: string;
      id: string;
    };
    waypoint: {
      floor_id: Floor["id"];
      floorjoin_order: null; // TODO: What else?
      id: number;
      location_description: string | null;
      position: Coordinates;
    };
  }[];
};
