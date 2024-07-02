import type { RGB, Coordinates } from "./utils";

/**
 * Contains all of the current settings used by the wayfinder.
 * The only property that you can activly change while loaded is the language.
 * @link https://doc.clickup.com/2561453/d/h/2e5dd-10408/789ef7bcbcc6c38/2e5dd-19408
 */
export class Settings {
  get background(): {
    color: RGB;
    url: string;
  };

  /** An object containing the default hover and selected destination colours */
  get destinations(): {
    hover: RGB;
    selected: RGB;
  };

  /** An object containing icon (eg: amenity) size information */
  get icons(): {
    /** Default scale factor to use for the normal size of the icons */
    scale: number;
    /** Minimum scale allowed while zooming  */
    minSize: number;
    /** Maximum scale allowed while zooming */
    maxSize: number;
    /** If `true`, amenety icons appear infront of floating destination labels, if `false`, destination labels have priority. */
    inFrontOfFloatingLabels: boolean;
    /** If true, then amenery icons and destination labels have equal priority */
    combineWithFloatingLabels: boolean;
    /** If true, then transit icons always have priority over everything else. */
    transitIconsHavePriority: boolean;
    /** Time taken (milliseconds) to fade the icons in and out. */
    fadeTime: number;
    /** How much overlap (pixels) an icon can be before it is removed. */
    overlapMargin: number;
  };

  /** Map rotational angle to use at the start */
  get idleMapAngle(): number;
  /** Map tilt to use at the start and after routes are cleared */
  get idleMapTilt(): number;

  /** Set to `true` if the map should start in perspective mode */
  get inPerspectiveMode(): boolean;

  /** How labels should appear on the map */
  get labels(): {
    /** font details */
    style: {
      /** CSS name of the font */
      fontName: string;
      /** Size of the font in pixels */
      sizeInPx: number;
      alignment: string;
      /** Text alignment of the text during wordwrap */
      weight: number;
    };
    /** Colour of the text */
    color: RGB;
    /** The hover colour of the text */
    hover: RGB;
    /** The selected colour for the text */
    selected: RGB;
    /** Colour to use for the shadow/stroke around the text */
    shadowColor: RGB;
    /** Hover stroke/shadow colour Hover stroke/shadow colour  */
    shadowHover: RGB;
    /** Selected hover/stroke colour */
    shadowSelected: RGB;
    /** How many pixels to expand the stroke/shadow by */
    shadowDistance: number;
    /** The size of the blur in pixels to apply to the shadow */
    shadowSize: number;
    float: {
      enabled: boolean;
      font: { name: string; size: number; weight: number; alignment: string };
      overlapMargin: number;
      stopAfterClashCount: number;
      prioritizeByLabelSize: number;
      centerOnLabel: boolean;
      showLabelOnFlagship: boolean;
      dots: {
        enabled: boolean;
        color: RGB;
        shadow: RGB;
        useLabelColor: boolean;
        shadowSize: number;
        shadowDistance: number;
      };
    };
  };

  /** The current language being used by the wayfinder */
  get language(): string;
  set language(value: string);

  /** Lighting rules for the 3D render */
  get mapLighting(): {
    light1: {
      position: Coordinates;
      lookat: Coordinates;
      color: RGB;
      strength: number;
      castshadow: boolean;
    };
    light2: {
      position: Coordinates;
      lookat: Coordinates;
      color: RGB;
      strength: number;
      castshadow: boolean;
    };
    ambient: {
      color: RGB;
    };
    hemisphere: {
      groundcolor: RGB;
      skycolor: RGB;
      strength: number;
    };
    yahPoint: {
      color: RGB;
      size: number;
      exp: number;
      linear: number;
      zposition: number;
      strength: number;
    };
    rotateLights: boolean;
    enableSpecular: boolean;
    shadowBias: number;
  };

  /** Max zoom property (same as kiosk) */
  get maxZoomLevel(): number;

  /** If shadows will be rendered on the map */
  get renderShadows(): boolean;

  /** How the route line should be drawn */
  get routeAnimation(): {
    color: RGB;
    color2: RGB;
    size: number;
    yPositon: number;
  };

  /** Map tilt to use while route is active (default) */
  get routeMapTilt(): number;

  /** Number fo milliseconds to change map scale while loading (animation) */
  get scaleChangeTime(): number;

  /** Pixel border size to fit bounds within */
  get screenPadding(): number;

  /** If when routing, the map should zoom to fit the route */
  get shouldZoomToRoute(): boolean;

  /** The primary map to show */
  get startingFloorId(): number;

  /** The timezone of the destination of the project */
  get timezone(): string | null;

  /** Time taken by default for all animations */
  get transitionTime(): number;

  /** How popups should appear advising how to change to another floor/map */
  get transitPopup(): {
    font: {
      fontName: string;
      sizeInPx: number;
      weight: string;
    };
    colors: {
      background: RGB;
      text: RGB;
      border: RGB;
      arrow: RGB;
      shadow: RGB;
    };
    borderRadius: number;
    borderWidth: number;
    shadowSize: number;
    shadowDistanceX: number;
    shadowDistanceY: number;
    shadowAlpha: number;
  };

  /** If antialiasing is enabled during render */
  get useAntialiasing(): boolean;

  /** If lower quality (less resource intensive) methods should be used. */
  get useLowerQuality(): boolean;
}
