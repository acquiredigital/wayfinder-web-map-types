import type { Floor } from "./database/Floor";
import type { Amenity } from "./database/Amenities";
import type { Destination } from "./database/Destination";
import type { MeshLink } from "./database/MeshLinks";
import type { TransitNode } from "./database/TransitNodes";
import type { Overlay } from "./Overlay";
import type { Intersection, Vector2 } from "three";
import type { Node } from "./database/Node";
import type { TravelType } from "./database/TravelTypes";
import type { Wayfinder } from "./Wayfinder";

/** Triggered when the mouse goes down, moved, lifted up or wheeled on the map */
type MouseCustomEvent = CustomEvent<{
  screen: { x: number; y: number };
  map: { x: number; y: number; z: number };
  amenity: Amenity | null;
  destination: Destination | null;
  destinationLabel: Destination | null;
  transit: TransitNode | null; // TODO: Check this means Transit Node
  transitPopup: TransitPopup | null;
  button: boolean;
  wheel: null | number;
  meshes: Intersection[];
  floor: MeshLink["targetFloor"] | null;
}>;

type TransitPopup = {
  follow: () => void;
  hide: () => void;
  leg: number;
  node: Node;
  overlay: Overlay;
  panToView: (animate: boolean) => Promise<void>;
  show: () => void;
  targetMapId: Floor["id"];
  text: string;
  travelType: TravelType;
};

type MapApp = {
  unitId: number;
  ddaMode: boolean;
  startNodeId: number;
  startNode: Node | null;
  endNodeId: number;
  endNode: Node | null;
  destinationId: number;
  destination: Destination | null;
  amenityId: number;
  amenity: Amenity | null;
  kioskSessionId: number;
};

type LocationUpdate = {
  timestamp: number;
  inBounds: boolean;
  mapPoint: Vector2 | null;
  gpsPoint: GeolocationCoordinates | null;
};

/**
 * You can subscribe to a variety of events that the wayfinder can generate allowing you to fully integrate with its actions.
 * @link https://doc.clickup.com/2561453/d/h/2e5dd-10408/789ef7bcbcc6c38/2e5dd-19328
 */
export interface WayfinderEventMap {
  /**
   * Dispatched whenever the minimum and maximum coordinates for the map changes.
   * Usually triggered during load.
   */
  boundschanged: CustomEvent;

  /** Dispatched when map loading fails for whatever reason */
  error: CustomEvent<string>;

  /** Dispatched when the floor is about to change, during, and after it has changed */
  floorchange: CustomEvent<{
    status: "changing" | "loading" | "error" | "animating" | "changed";
    id: Floor["id"];
    error?: string | Error;
  }>;
  /** Dispatched in response to floor loading operations */
  floorload: CustomEvent<{
    status: "error" | "ready" | "loading";
    id: Floor["id"];
    error?: string | Error;
  }>;

  /** Dispatched when map loading starts, for example as a result to the call to loadFromApiKey */
  loading: CustomEvent;
  /**
   * Dispatched when the first floor (the one initially shown) has loaded and is now visible.
   * All API commands are now available from this point.
   */
  loaded: CustomEvent;
  /** Dispatched when everything has finished background-loading (all floors, icons and graphics) */
  ready: CustomEvent;

  /** Dispatched each time the map is updated/redrawn (even panning the map will trigger this) */
  render: CustomEvent<number /* timestamp in milliseconds */>;

  /** Dispatched when the Wayfinder DIV element resizes */
  resize: CustomEvent<{
    width: number;
    height: number;
  }>;

  mousedown: MouseCustomEvent;
  mousemove: MouseCustomEvent;
  mouseup: MouseCustomEvent;
  mousewheel: MouseCustomEvent;

  /** The route line (if any) has been cleared from the map */
  routecleared: CustomEvent;
  /** A route line has been drawn on the map between two points */
  routedrawn: CustomEvent<{
    /** Route information */
    status: {
      delay: number;
      distance: number;
      dynamicData: number;
      price: number;
      time: number;
    };
    /** Array of waypoints information, split by floor */
    waypoints: {
      waypoint: number;
      leg: number;
      type: string;
    }[];
  }>;
  /** Route generation request failed */
  routefailed: CustomEvent<string>;

  /** Mapapp URL parameters have been parsed */
  mapapp: CustomEvent<MapApp>;

  /** Location has been updated */
  locationupdated: CustomEvent<LocationUpdate>;
}

export class WayfinderEventTarget extends EventTarget {
  // The Wayfinder class exposes the usual addEventListener, and removeEventListener so that you can subscribe to events at the ‘root’ level.
  addEventListener<K extends keyof WayfinderEventMap>(
    type: K,
    listener: (this: Wayfinder, ev: WayfinderEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof WayfinderEventMap>(
    type: K,
    listener: (this: Wayfinder, ev: WayfinderEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}
