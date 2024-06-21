declare namespace Wayfinder {
  /** Triggered when the mouse goes down, moved, lifted up or wheeled on the map */
  type MouseCustomEvent = CustomEvent<{
    screen: {x: number; y: number};
    map: {x: number; y: number; z: number};
    amenity: Amenity | null;
    destination: Destination | null;
    destinationLabel: Destination | null;
    transit: TransitNode | null; // TODO: Check this means Transit Node
    button: boolean;
    wheel: null | number;
    meshes: import('three').Intersection[];
  }>;

  /**
   * You can subscribe to a variery of events that the wayfinder can generate allowing you to fully integrate with its actions.
   * @link https://doc.clickup.com/2561453/d/h/2e5dd-10408/789ef7bcbcc6c38/2e5dd-19328
   */
  interface WayfinderEventMap {
    /**
     * Dispatched whenever the minimum and maximum coordinates for the map changes.
     * Usually triggered during load.
     */
    boundschanged: CustomEvent;

    /** Dispatched when map loading fails for whatever reason */
    error: CustomEvent<string>;

    /** Dispatched when the floor is about to change, during, and after it has changed */
    floorchange: CustomEvent<{
      status: 'changing' | 'loading' | 'error' | 'animating' | 'changed';
      id: Floor['id'];
      error?: string | Error;
    }>;
    /** Dispatched in response to floor loading operations */
    floorload: CustomEvent<{
      status: 'error' | 'ready' | 'loading';
      id: Floor['id'];
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
      status: unknown; //TODO: what type?
      /** Array of waypoints information, split by floor */
      waypoints: unknown[]; //TODO: what type?
    }>;
    /** Route generation request failed */
    routefailed: CustomEvent<string>;
  }
}
