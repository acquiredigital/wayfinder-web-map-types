import type { DatabaseBase } from "./types/database/Base";
import type { Wayfinder } from "./types/Wayfinder";
import type { AmenitiesDatabase } from "./types/database/Amenities";
import type { AmenityTypesDatabase } from "./types/database/AmenityTypes";
import type { Bounds } from "./types/Bounds";
import type { BuildingDatabase } from "./types/database/Building";
import type { DestinationCategoryDatabase } from "./types/database/DestinationCategory";
import type { DestinationDatabase } from "./types/database/Destination";
import type { FloorDatabase } from "./types/database/Floor";
import type { MeshLinksDatabase } from "./types/database/MeshLinks";
import type { NodesDatabase } from "./types/database/Node";
import type { Overlay } from "./types/Overlay";
import type { TransitNodesDatabase } from "./types/database/TransitNodes";
import type { TravelTypesDatabase } from "./types/database/TravelTypes";
import type { WayfinderEventTarget } from "./types/Events";
import type { Settings } from "./types/Settings";
import type { Database } from "./types/Database";

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
    WayfinderEventTarget: WayfinderEventTarget;
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
