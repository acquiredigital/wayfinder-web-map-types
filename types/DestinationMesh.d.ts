import type { Color, Material, BufferGeometry } from "three";
import type { Wayfinder } from "./Wayfinder";
import type { Bounds } from "./Bounds";
import type { Destination } from "./database/Destination";

/**
 * This is a class to manage destination Mesh's
 * (actually, any mesh within a model)
 */
export class DestinationMesh {
  constructor(
    wayfinderApp: Wayfinder,
    material: Material,
    geometry: BufferGeometry, // TODO: Is this the correct type?
    meshName: string,
    castShadow: boolean,
  );

  get activeColor(): Color;
  set activeColor(col: Color);
  get hoverColor(): Color;
  set hoverColor(col: Color);
  get defaultColor(): Color;
  set defaultColor(col: Color);

  fadeToActive(
    timeTakeinInMS: number,
    destinationId: Destination["id"] | null,
  ): void;
  fadeToHover(
    timeTakeinInMS: number,
    destinationId: Destination["id"] | null,
  ): void;
  fadeToDefault(
    timeTakeinInMS: number,
    destinationId: Destination["id"] | null,
  ): void;

  /** Change the currently active colour */
  setCurrentColor(col: Color, timeInMilliseconds: number): void;

  /** Returns the {@link Bounds} of the mesh */
  get bounds(): Bounds;
  /** Get access to the label class, if one exists */
  get label(): unknown;
}
