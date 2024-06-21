/**
 * All database information classes have a common set of functions and properties to help you access the data in a standard way.
 * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408
 */
export abstract class DatabaseBase<T> {
  get asArray(): Array<T>;
  get asMap(): Record<number | string, T>;
  indexOf(id: number | string): number | -1; // TODO: Are all Ids same type?
  includes(id: number | string): boolean;
  fromId(id: number | string): T | null;
  at(index: number): T;
  get length(): number;
}

/**
 * The project information object contains some basic information about the project
 * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408
 */
export interface ProjectInformationObject {
  readonly id: string;
  readonly info: string;
  readonly logo: string;
  readonly name: string;
  readonly published: string;
  readonly uuid: string;
  readonly version: string;
}
