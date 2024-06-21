declare namespace Wayfinder {
  /**  @link https://doc.clickup.com/2561453/p/h/2e5dd-19288/6651ad4daef5747/2e5dd-19568 */
  export interface Node {
    /** The floorId this node is on. See {@link FloorDatabase}. */
    readonly floor_id: Floor['id'];
    /** The unique ID for this node */
    readonly id: number;
    /** A textual description describing the location of this node. This might be `null` if not set. */
    readonly location_description: string | null;
    /** An object, containing {`x`, `y`, `z`} properties, which represent the precise map coordinates for this node. */
    readonly position: Readonly<Coordinates>;
  }

  /**
   * Nodes are used as waypoints for the routing system.
   * As well as that, {@link Amenity} icons are also placed on nodes.
   * @link https://doc.clickup.com/2561453/p/h/2e5dd-19288/6651ad4daef5747/2e5dd-19568
   */
  export class NodesDatabase extends DatabaseBase<Node> {
    /** Returns an instance of {@link NodesDatabase} containing just the nodes on the `floorId` passed */
    onFloor(floorId: number): NodesDatabase;
    /** Returns a {@link Bounds} object that describes the bounding box/cube that contains all of the nodes in this object. */
    readonly bounds: Bounds;
  }
}
