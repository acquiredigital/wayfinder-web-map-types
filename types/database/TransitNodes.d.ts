import type { Overlay } from "../Overlay";
import type { DatabaseBase } from "./Base";
import type { Floor } from "./Floor";
import type { TravelType } from "./TravelTypes";

/** @link https://doc.clickup.com/2561453/p/h/2e5dd-19288/6651ad4daef5747/2e5dd-19608 */
export interface TransitNode {
  /**
   * If `true`, this represents the entry to a transit node.
   * For some transit types, this will be set to `true` at both ends.
   *
   * If its `false` then it represents an exit only.
   * An example would be an *escalator*.
   */
  readonly entry: boolean;
  /**
   * The floor/map this transit node exists on.
   * @see {@link FloorDatabase}
   */
  readonly floor_id: Floor["id"];
  /** A unique ID for this transit node. */
  readonly id: string;
  /**
   * The ID of the node that this transit node should appear it.
   * @see {@link NodesDatabase}.
   */
  readonly node: string;
  /**
   * Provides direct access to the instance of the actual overlay.
   * @see {@link Overlay}
   */
  readonly overlay: Overlay;
  /**
   * Causes the map to pan so that this node is in the center.
   * The **animate** parameter can be used to smoothly move the map, or move instantly.
   */
  panToView(animate?: boolean): Promise<void>;
  /**
   * The travel type in use for this transit node.
   * @see {@link TravelTypesDatabase}
   */
  readonly type: TravelType;
}

/**
 * Transit nodes are points of interest on the map that allow you to travel between different floors/maps.
 * @link https://doc.clickup.com/2561453/p/h/2e5dd-19288/6651ad4daef5747/2e5dd-19608
 */
export class TransitNodesDatabase extends DatabaseBase<TransitNode> {
  /** Returns an instance of {@link TransitNodesDatabase} that contains the transit nodes that exist on the specified **floorId** only. */
  onFloor(floorId: Floor["id"]): TransitNodesDatabase;
  /** Returns an instance of {@link TransitNodesDatabase} that contains only the transit nodes of a specific {@link TravelType}.
   * @see {@link TravelTypesDatabase} */
  byTypeId(typeId: TravelType["id"]): TransitNodesDatabase;
}
