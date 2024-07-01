import type { Colors, Coordinates } from "../utils";
import type { DatabaseBase } from "./Base";
import type {
  DestinationCategory,
  DestinationCategoryDatabase,
} from "./DestinationCategory";
import type { Node } from "./Node";
import type { Floor } from "./Floor";

type LabelOptions = Readonly<{
  /** Override label colours for the various states */
  color: Readonly<Colors>;
  /** Height of the label (usually negative) */
  height: number;
  /** Position of the top left corner of the label */
  position: Readonly<Coordinates>;
  /** Angle in degrees to rotate the label */
  rotation: number;
  /** Width of the label */
  width: number;
}>;

export type OpeningHour = Readonly<{
  /** A Textual description of the day */
  text: string;
  /** If this entry is valid or not */
  value: number;
  /** Text containing the opening hour in hh:mm format */
  oh: string;
  /** text containing the closing hour in hh:mm format */
  ch: string;
}>;
export type OpeningHours = Readonly<{
  mon: OpeningHour;
  tue: OpeningHour;
  wed: OpeningHour;
  thur: OpeningHour;
  fri: OpeningHour;
  sat: OpeningHour;
  sun: OpeningHour;
}>;

// TODO: Which can be null?
/** @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19888 */
export interface Destination {
  /** A string containing the street address of the destination */
  readonly address: string;
  /**
   * An array containing a list of category Ids associated with this destination.
   * See {@link DestinationCategoryDatabase}
   */
  readonly categories: DestinationCategory["id"][];
  /**
   * Contains an object with properties `normal`, `active` and `selected`.
   * These strings contain default colour states for any mesh associated with this destination (in #rrggbb format).
   * These can be `null`.
   */
  readonly color: Readonly<Colors>;
  /** A textual description of the destination. */
  readonly description: string;
  /** A URL of a photo of the destination. */
  readonly destination_photo: string;
  /** A function that causes the mesh to change to its default colour over `speed` milliseconds. */
  fadeToDefault(speed: number): void;
  /** A function that causes the mesh to change to its hover colour over `speed` milliseconds. */
  fadeToHover(speed: number): void;
  /** A function that causes the mesh to change to its selected colour over `speed` milliseconds. */
  fadeToSelected(speed: number): void;
  /**
   * Set to `1` if this is a flagship store.
   * Flagship stores have a higher prioeirty and can also optionally display a graphic instead of showing its name.
   */
  readonly flagship: 1 | 0;
  /** The ID of the floor/map this destination is on. */
  readonly floor: Floor["id"];
  /** The unique ID for this destination. */
  readonly id: number;
  /** Details about how a label should be drawn ontop of the mesh. */
  readonly label: LabelOptions;
  /** A textual description of the surroundings near this destination. */
  readonly location_description: string;
  /** A URL with the logo for this destination, this will be a colour logo. */
  readonly logo: string;
  /** A URL with the logo for the destination for rendering on the top of the mesh. This is only used if flagship=1 */
  readonly map_logo: string;
  /** The name of the destination */
  readonly name: string;
  /** An array of nodes inside the destination that can be used during routing */
  readonly node: Node["id"][]; // TODO: Check that ID's are returned
  /** The name of the mesh to attach to in the 3D map. */
  readonly object: string;
  readonly opening_arr: OpeningHours;
  /** A simple description of the opening hours. */
  readonly opening_txt: string;
  /**
   * Pans the map so that the destination is located in the center of the screen.
   * The `animate` parameter controls if this happens instantly or smoothly moves.
   */
  panToView(animate?: boolean): Promise<void>;
  /** If this is a sub destination then this will be a reference to the Wayfinder Destination Database record for the parent */
  readonly parent_destination: Destination | null;
  /** A phone number associated with the destination. */
  readonly phone_number: string;
  /** Set to true if this is a sub destination. */
  readonly sub_destination: boolean;
  /** An array of sub-destinations contained within this destination */
  readonly sub_destinations: Destination[];
  /** An array of text tags used to help categorise this destination */
  readonly tags: string[];
  /** The URL of the destinations associated website. */
  readonly website: string;
}

/**
 * This class contains specific details about each destination within the project.
 * A sub destination is a destination that is physically contained within the mesh of another.
 * For example, this might be a cafe inside of a large shop.
 *
 * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19888
 */
export class DestinationDatabase extends DatabaseBase<Destination> {
  /** Returns an instance of {@link DestinationDatabase} containing only destinations belonging to the specified `categoryId` */
  byCategoryId(categoryId: number): DestinationDatabase;
  /**
   * Runs a case-insensative search of name against all of the destinations and returns an instance of {@link DestinationDatabase} containing matches.
   * If `partialMatch` is true then the search string name can appear anywhere within the destination name, else it must be an exact match.
   * `partialMatch` defaults to `false`.
   */
  byName(name: string, partialMatch?: boolean): DestinationDatabase;
  /** Returns an instance of {@link DestinationDatabase} that contains only main destinations, ie, no sub-destinations. */
  fullDestinations(): DestinationDatabase;
  /** Returns an instance of {@link DestinationDatabase} containing only the destinations on the specified `floorId` */
  onFloor(floorId: Floor["id"]): DestinationDatabase;
  /** Returns an instance of {@link DestinationDatabase} containing only sub destinations */
  subDestinations(): DestinationDatabase;
  /** Returns an array of destination category Ids in use by this instance. */
  uniqueCategories(): DestinationCategory["id"][];
}
