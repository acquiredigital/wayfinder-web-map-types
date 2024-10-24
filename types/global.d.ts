import type { Bounds } from "./Bounds";
import type { Database } from "./Database";
import type { Overlay } from "./Overlay";
import type { Settings } from "./Settings";
import type { Wayfinder } from "./Wayfinder";
import type { AmenitiesDatabase } from "./database/Amenities";
import type { AmenityTypesDatabase } from "./database/AmenityTypes";
import type { DatabaseBase } from "./database/Base";
import type { BuildingDatabase } from "./database/Building";
import type { DestinationDatabase } from "./database/Destination";
import type { DestinationCategoryDatabase } from "./database/DestinationCategory";
import type { FloorDatabase } from "./database/Floor";
import type { MeshLinksDatabase } from "./database/MeshLinks";
import type { NodesDatabase } from "./database/Node";
import type { TransitNodesDatabase } from "./database/TransitNodes";
import type { TravelTypesDatabase } from "./database/TravelTypes";

declare global {
  interface Window {
    ACQ: any; // WayfinderCompatibilityAdapter
    WF: any; // WayfinderCompatibilityAdapter
    Wayfinder: Wayfinder;
    Wayfinder3DModel: any; // Wayfinder3DModel
    WayfinderAmenitiesDatabase: AmenitiesDatabase;
    WayfinderAmenityTypesDatabase: AmenityTypesDatabase;
    WayfinderBounds: Bounds;
    WayfinderBuildingDatabase: BuildingDatabase;
    WayfinderCompatibilityDestinationAdapter: any; // WayfinderCompatibilityDestinationAdapter
    WayfinderCompatibilityMapAdapter: any; // WayfinderCompatibilityMapAdapter
    WayfinderDatabase: Database;
    WayfinderDatabaseBase: DatabaseBase<any>;
    WayfinderDestinationCategoryDatabase: DestinationCategoryDatabase;
    WayfinderDestinationDatabase: DestinationDatabase;
    WayfinderEventTarget: any; // TODO: WayfinderEventTarget;
    WayfinderFloorDatabase: FloorDatabase;
    WayfinderMeshLinksDatabase: MeshLinksDatabase;
    WayfinderNodesDatabase: NodesDatabase;
    WayfinderOverlay: Overlay;
    WayfinderRouteGenerator: any; // WayfinderRouteGenerator
    WayfinderSettings: Settings;
    WayfinderTransitNodesDatabase: TransitNodesDatabase;
    WayfinderTravelTypesDatabase: TravelTypesDatabase;
  }
}
