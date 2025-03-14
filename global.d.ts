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
    Wayfinder: typeof Wayfinder;
    Wayfinder3DModel: any; // Wayfinder3DModel
    WayfinderAmenitiesDatabase: typeof AmenitiesDatabase;
    WayfinderAmenityTypesDatabase: typeof AmenityTypesDatabase;
    WayfinderBounds: typeof Bounds;
    WayfinderBuildingDatabase: typeof BuildingDatabase;
    WayfinderCompatibilityDestinationAdapter: any; // WayfinderCompatibilityDestinationAdapter
    WayfinderCompatibilityMapAdapter: any; // WayfinderCompatibilityMapAdapter
    WayfinderDatabase: typeof Database;
    WayfinderDatabaseBase: typeof DatabaseBase<any>;
    WayfinderDestinationCategoryDatabase: typeof DestinationCategoryDatabase;
    WayfinderDestinationDatabase: typeof DestinationDatabase;
    WayfinderEventTarget: typeof WayfinderEventTarget;
    WayfinderFloorDatabase: typeof FloorDatabase;
    WayfinderMeshLinksDatabase: typeof MeshLinksDatabase;
    WayfinderNodesDatabase: typeof NodesDatabase;
    WayfinderOverlay: typeof Overlay;
    WayfinderRouteGenerator: any; // WayfinderRouteGenerator
    WayfinderSettings: typeof Settings;
    WayfinderTransitNodesDatabase: typeof TransitNodesDatabase;
    WayfinderTravelTypesDatabase: typeof TravelTypesDatabase;
  }
}
