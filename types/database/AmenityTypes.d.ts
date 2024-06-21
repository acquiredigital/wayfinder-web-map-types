declare namespace Wayfinder {
  /** @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19488 */
  export interface AmenityType {
    /**
     * The visibility of icons on the map:
     *
     * 1: Amenity icon types that are always displayed
     *
     * 0: Amenity icon types that are either hidden or only shown when needed
     */
    readonly always_show: 1 | 0;
    /** A textual description of this type of amenity */
    readonly description: string;
    /** If set to 1, then this amenity type should not be shown/searchable within the UI */
    readonly disable_search: 1 | 0;
    /** Unique ID for this amenity type */
    readonly id: number; // TODO: or string?
    /** Name of this amenity type */
    readonly name: string;
    /** A url representing the icon used for this amenity type */
    readonly url: string;
  }

  /**
   * Amenities are floating icons representing points of interest within a map, that alone are probably not rooms or destinations.
   * An example might be an ATM, Telephone or Toilets.
   * Rather than repeating the details for these, they are grouped into specific types.
   * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19488
   */
  export class AmenityTypesDatabase extends DatabaseBase<AmenityType> {
    /**
     * Returns an instance of {@link AmenityTypesDatabase} containing:
     * alwaysShown:
     *
     *   1: Amenity icon types that are always displayed
     *
     *   0: Amenity icon types that are either hidden or only shown when needed
     */
    areAlwaysShown(alwaysShown: boolean): AmenityTypesDatabase;

    /**
     * Returns an array of urls of all of the icons for the amenity types.
     * If (optionally) a `floorId` is passed then only the types needed for that floor are returned.
     */
    allUrls(floorId?: number): AmenityType['url'][];
  }
}
