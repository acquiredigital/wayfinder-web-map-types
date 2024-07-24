import type { AmenitiesDatabase } from "./database/Amenities";
import type { AmenityTypesDatabase } from "./database/AmenityTypes";
import type { BuildingDatabase } from "./database/Building";
import type { DestinationCategoryDatabase } from "./database/DestinationCategory";
import type { DestinationDatabase } from "./database/Destination";
import type { FloorDatabase } from "./database/Floor";
import type { MeshLinksDatabase } from "./database/MeshLinks";
import type { NodesDatabase } from "./database/Node";
import type { ProjectInformationObject } from "./database/Base";
import type { TransitNodesDatabase } from "./database/TransitNodes";
import type { TravelTypesDatabase } from "./database/TravelTypes";

/**
 * This class allows you access to all of the data available about the project.
 * This includes destinations, amenities, maps, nodes and more.
 * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19428
 */
export class Database {
  /** Provides access to the {@link AmenitiesDatabase} object which provides details about all of the amenities on every floor/map. */
  get amenities(): AmenitiesDatabase;
  /** Provides access to the {@link AmenityTypeDatabase} object which provides details about the types of amenity available and in use. */
  get amenityTypes(): AmenityTypesDatabase;
  /** A string containing the current active API key (if in use) */
  get apiKey(): string;
  /** Provides access to the {@link BuildingDatabase} object which provides access to the buildings/campus for this project. */
  get buildings(): BuildingDatabase;
  /** The default (startup) map/floorId to show. @see {@link FloorDatabase}. */
  get defaultFloorId(): number;
  /** Provides access to the {@link DestinationCategoryDatabase} object which provides details about the various destination types (categories). */
  get destinationCategories(): DestinationCategoryDatabase;
  /** Provides access to the {@link DestinationDatabase} object which contains details about all of the destinations within the project. */
  get destinations(): DestinationDatabase;
  /** Provides access to the {@link FloorDatabase} which contains all of the maps/floors used within the project. */
  get floors(): FloorDatabase;
  /** Is `true` if this is loaded from the MapApp website */
  get isMapApp(): boolean;
  /** Is `true` if the map is rendering in preview mode */
  get isPreviewMode(): boolean;
  /**
   * Date and time the map data was published.
   * In the format of `yyyy-mm-dd hh:nn:ss`
   */
  get mapPublishDate(): string;
  /** Sequential CMS map data publish number */
  get mapVersion(): string;
  /** Provides access to the {@link MeshLinksDatabase} object that contains a special mapping where specific mesh clicks should be used to move the view to a different map/floor */
  get meshLinks(): MeshLinksDatabase;
  /** Provides access to the {@link NodesDatabase} object which provides details about all the points used on the map for navigation or amenity icons */
  get nodes(): NodesDatabase;
  /** Provides access to the {@link ProjectInformationObject} */
  get projectInformation(): ProjectInformationObject;
  /** Provides access to the {@link TransitNodesDatabase} object which contains all of the inter-map joins. */
  get transitNodes(): TransitNodesDatabase;
  /**
   * Provides access to the {@link TravelTypesDatabase} object which provides details about the different ways you can travel around the map.
   * Between nodes, each join can be assigned a specific type.
   */
  get travelTypes(): TravelTypesDatabase;
}
