import type { Vector2 } from "three";

export class WayfinderLocation {
  /** Whether location services are enabled or not */
  get showCurrentLocation(): boolean;
  /**
   * Enable / Disable location services
   * @throws Error if the browser does not support Geolocation API or project does not have location information.
   */
  set showCurrentLocation(value: boolean);

  /**
   * Is the current location within the map bounds?
   * @throws Error if the browser does not support Geolocation API or project does not have location information or {@link showCurrentLocation} is not enabled.
   */
  get withinBounds(): boolean;

  /**
   * Update the visibility and position of the 'You are here' marker
   * Called when the position changes or the map is updated.
   */
  updateMapMarker(): void;

  /**
   * Check if the given coordinates are within the map bounds.
   * @param {GeolocationCoordinates} gps - The GPS coordinates to check.
   * @returns {boolean} True if the GPS point is within the project bounds, false otherwise.
   * @throws {TypeError} If gps is not an instance of GeolocationCoordinates
   */
  gpsPointInBounds(gps: GeolocationCoordinates): boolean;

  /**
   * Check if the given point is within the map bounds.
   * @param {Vector2} point The coordinates to check.
   * @returns {boolean} True if the point is within the map bounds, false otherwise.
   * @throws {TypeError} If point is not a THREE.Vector2 instance.
   */
  mapPointInBounds(point: Vector2): boolean;

  /**
   * Convert a Lat/Long pair to X/Y map coordinates
   * @param {GeolocationCoordinates} gps - The GPS coordinates to convert.
   * @returns {?Vector2} point - The converted map coordinates, or null if the GPS point is out of bounds.
   * */
  gpsToMap(gps: GeolocationCoordinates): Vector2 | null;

  /**
   * Get the current map coordinates based on the last known GPS position.
   * @returns {?Vector2} The current map coordinates, or null if there is no last position.
   */
  get currentMapCoordinates(): Vector2 | null;
}
