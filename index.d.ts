// Wayfinder class
export type * from "./types/Wayfinder";

// Top level exports
export type * from "./types/Bounds";
export type * from "./types/Database";
export type * from "./types/DestinationMesh";
export type * from "./types/Events";
export type * from "./types/Overlay";
export type { Settings } from "./types/Settings";

// Database exports
export type * from "./types/database/Amenities";
export type * from "./types/database/AmenityTypes";
export type * from "./types/database/Building";
export type * from "./types/database/Destination";
export type * from "./types/database/DestinationCategory";
export type * from "./types/database/Floor";
export type * from "./types/database/MeshLinks";
export type * from "./types/database/Node";
export type * from "./types/database/TransitNodes";
export type * from "./types/database/TravelTypes";

export as namespace WF;

// Wayfinder adds stuff to `window`
import "./global";
