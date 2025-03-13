import type { DatabaseBase } from "./types/database/Base";

declare global {
  interface Window {
    ACQ: any; // WayfinderCompatibilityAdapter
    WF: any; // WayfinderCompatibilityAdapter
    Wayfinder: WF.Wayfinder;
    Wayfinder3DModel: any; // Wayfinder3DModel
    WayfinderAmenitiesDatabase: WF.AmenitiesDatabase;
    WayfinderAmenityTypesDatabase: WF.AmenityTypesDatabase;
    WayfinderBounds: WF.Bounds;
    WayfinderBuildingDatabase: WF.BuildingDatabase;
    WayfinderCompatibilityDestinationAdapter: any; // WayfinderCompatibilityDestinationAdapter
    WayfinderCompatibilityMapAdapter: any; // WayfinderCompatibilityMapAdapter
    WayfinderDatabase: WF.Database;
    WayfinderDatabaseBase: DatabaseBase<any>;
    WayfinderDestinationCategoryDatabase: WF.DestinationCategoryDatabase;
    WayfinderDestinationDatabase: WF.DestinationDatabase;
    WayfinderEventTarget: WF.WayfinderEventTarget;
    WayfinderFloorDatabase: WF.FloorDatabase;
    WayfinderMeshLinksDatabase: WF.MeshLinksDatabase;
    WayfinderNodesDatabase: WF.NodesDatabase;
    WayfinderOverlay: WF.Overlay;
    WayfinderRouteGenerator: any; // WayfinderRouteGenerator
    WayfinderSettings: WF.Settings;
    WayfinderTransitNodesDatabase: WF.TransitNodesDatabase;
    WayfinderTravelTypesDatabase: WF.TravelTypesDatabase;
  }
}
