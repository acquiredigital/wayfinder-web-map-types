declare namespace Wayfinder {
  /** @link https://doc.clickup.com/2561453/d/h/2e5dd-10408/789ef7bcbcc6c38/2e5dd-19688 */
  export type MeshLink = {
    /** The ID of the floor the named mesh is on */
    readonly floor: Floor['id'];
    /**
     * The name of the mesh.
     * Note, this name could appear on other floors too, so the above floor property is very important.
     */
    readonly mesh: string;
    /** The ID of the floor/map to jump to when the mesh is clicked. */
    readonly targetFloor: Floor['id'];
  };

  /**
   * This is an alternative way that a floor change can be setup.
   * This is a mapping between a list of mesh names, and a floor ID that should be displayed if the mesh is clicked.
   *
   * @link https://doc.clickup.com/2561453/d/h/2e5dd-10408/789ef7bcbcc6c38/2e5dd-19688
   */
  export class MeshLinksDatabase extends DatabaseBase<MeshLink> {
    /**
     * Searches through the mappings to find a specific `meshName` on the specified `floorId`, and returns the `ID` of the floor you should display, or `null` if no mapping was found.
     */
    meshLink(floorId: Floor['id'], mesh: string): MeshLink | null;
  }
}
