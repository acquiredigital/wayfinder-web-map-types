import type { DatabaseBase } from "./Base";
import type { Building, BuildingDatabase } from "./Building";
import type { Bounds } from "../Bounds";
import type { Coordinates } from "../utils";

/** @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19628 */
export interface Floor {
  /**
   * The ID of the building this map is contained within.
   * If the map doesn't have a building then this may represent the root of the map.
   * See {@link BuildingDatabase}
   */
  readonly building: Building["id"];
  /** The unique floor/map ID */
  readonly id: number;
  /** The name of this floor/map. */
  readonly name: string;
  /** A number used to sort the maps, typically used to aid displaying them in the correct order within the UI. */
  readonly order: number;
  /** The short name for this floor/map. */
  readonly shortname: string;
  /** Status of the map, one of the Status values. */
  readonly status:
    | typeof FloorDatabase.StatusNotLoaded
    | typeof FloorDatabase.StatusLoading
    | typeof FloorDatabase.StatusLoadError
    | typeof FloorDatabase.StatusLoadReady;
  /** An array of map geometry URLs that are decoded to actually 3D render the map.  */
  readonly url: string[];
  /** The pre-calculated min and max bounds of the map geometry only.  */
  readonly bounds?: { min: Coordinates; max: Coordinates } | null;
  /** The pre-calculated min and max bounds of the Nodes and Destinations. */
  readonly active_area_bounds?: { min: Coordinates; max: Coordinates } | null;
  /** The average size of all the destinatation meshes on the floor. */
  readonly avg_destination_size?: { total: number; sum: Coordinates } | null;
  /** If defined, switching to the floor should focus the map on this position */
  readonly starting_position?: Coordinates | null;
}

/**
 * Floors or Maps (interchangable name) represent a single level or floor within the entire project.
 * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19628
 */
export class FloorDatabase extends DatabaseBase<Floor> {
  /** A number representing the status of floor, in this case, the floor hasn't started loading yet. */
  static readonly StatusNotLoaded: 0;
  /** A number representing the status of floor, in this case, the floor has started to load. */
  static readonly StatusLoading: 1;
  /** A number representing the status of floor, in this case, the floor encountered an error during loading and so cannot be displayed. */
  static readonly StatusLoadError: 2;
  /** A number representing the status of floor, in this case, the floor has successfully loaded and is ready to be displayed. */
  static readonly StatusLoadReady: 3;

  /** Returns one of the status codes representing the status of the specified map, or `null`, if the map was not found. */
  getFloorStatus(floorId: number): null | Floor["status"];
  /** Returns a {@link Bounds} object containing the bounding box/cube for the specified map, or `null` if the map was not found. */
  getFloorBounds(floorId: Floor["id"]): Bounds | null;
  /** Returns a {@link Bounds}  object containing the bounds of the map geometry, destinations and nodes for a floor, or `null` if the floor does not exist */
  getFloorActiveArea(floorId: Floor["id"]): Bounds | null;
  /** Calculates the average size of destinations on a given floor or `null` if the floor does not exist or has no destinations.  */
  getFloorAverageDestinationSize(
    floorId: Floor["id"],
  ): { total: number; sum: Coordinates } | null;
  /** Returns an instance of {@link FloorDatabase} that only contains the maps that exist within the specified building ID. */
  inBuilding(buildingId: Building["id"]): FloorDatabase;
}
