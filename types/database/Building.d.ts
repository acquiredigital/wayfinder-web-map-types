import type { DatabaseBase } from "./Base";

/** @link https://doc.clickup.com/2561453/p/h/2e5dd-19288/6651ad4daef5747/2e5dd-19668 */
export interface Building {
  /** The unique ID for this building */
  readonly id: number;
  /** The name of this building */
  readonly name: string;
  /** The short name for this building. */
  readonly shortname: string;
}

/**
 * Buildings contain one or more floors. If the project represents an entire campus or city etc,
 * then a building will hold all of the maps relating to that campus or city.
 *
 * @link https://doc.clickup.com/2561453/p/h/2e5dd-19288/6651ad4daef5747/2e5dd-19668
 */
export class BuildingDatabase extends DatabaseBase<Building> {}
