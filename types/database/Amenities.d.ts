declare namespace Wayfinder {
  /** @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19528 */
  export interface Amenity {
    /**
     * The `floorId` this amenity should appear on.
     * See {@link FloorDatabase}
     */
    readonly floor: Floor['id'];
    /** The unique ID for this amenity instance */
    readonly id: number;
    /**
     * A textual description describing the location of this amenity.
     * **Note**: This might be `null` if not set.
     */
    readonly location_description: string | null;
    /**
     * A unique `nodeId` describing the precise location this amenity appears at.
     * See {@link NodesDatabase}
     */
    readonly node: Node['id'];
    /**
     * Provides direct access to the instance of the actual overlay.
     * See {@link Overlay}
     */
    readonly overlay: any; // TODO: overlay?
    /**
     * Causes the map to pan so that this amenity is in the center.
     * If animate is true then the map will smoothly animate into the new position.
     * @param {boolean} [animate=true] - Whether to animate the pan. Defaults to `true`.
     */
    panToView: (animate?: boolean) => Promise<void>;
    /** Controls the active state of the amenity.
     * Use the `isActive` property to activate/deactivate the amenity.
     */
    setActive(isActive: boolean): void;
    /**
     * Controls the selected state of the amenity.
     * Use the `isSelected` property to activate/deactivate the amenity.
     */
    setSelected(isSelected: boolean): void;
    /** The amenity type Id for this amenity. This can be looked up in the {@link AmenityTypesDatabase} */
    readonly type: AmenityType['id'];
  }

  /**
   * Amenities are floating icons representing points of interest within a map, that alone are probably not rooms or destinations.
   * An example might be an ATM, Telephone or Toilets.
   * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19528
   */
  export class AmenitiesDatabase extends DatabaseBase<Amenity> {
    /**
     * Returns an instance of {@link AmenitiesDatabase} containing only amenities that match the `typeId` provided
     *
     * See {@link AmenityTypesDatabase}
     */
    ofType(typeId: AmenityType['id']): AmenitiesDatabase;
    /**
     * Returns an array of the unique amenity type Ids used
     *
     * See {@link AmenityTypesDatabase}
     */
    uniqueTypes(): AmenityType['id'][];
    /**
     * Returns an instance of {@link AmenitiesDatabase} containing just the amenities on the `floorId` passed
     */
    onFloor(floorId: Floor['id']): AmenitiesDatabase;
    /**
     * Based on `isSelected`, selects/deselects all of the amenities in this object.
     * If this type of amenity is not normally visible, this may cause it to appear.
     */
    setSelected(isSelected: boolean): void;
    /**
     * Based on `isActive`, activates/de-activates all of the amenities in this object.
     * If this type of amenity is not normally visible, this may cause it to appear.
     */
    setActive(isActive: boolean): void;
  }
}
