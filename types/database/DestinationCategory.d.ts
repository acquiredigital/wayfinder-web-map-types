declare namespace Wayfinder {
  /** @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19868 */
  export interface DestinationCategory {
    /** A description of the category */
    readonly description: string;
    /** The unique ID for this category */
    readonly id: number;
    /** A URL representing a graphic related to this category */
    readonly logo: string;
    /** The name of this category */
    readonly name: string;
    /** The ID of the parent category or null if this is a main one. This field might not exist */
    readonly parent_id?: number | null;
    /** An instance of {@link DestinationCategoryDatabase} containing all the sub-categories under this category */
    readonly subCategories: DestinationCategoryDatabase;
  }

  /**
   * Rather than duplicate data, the {@link DestinationCategoryDatabase} class holds details about different types of destination that may appear one or more times within a project.
   * For example, a shopping mall may contain several shops of the same brand.
   * The categories are grouped into a hierarchy structure of categories and sub-categories.
   *
   * @link https://app.clickup.com/2561453/v/dc/2e5dd-10408/2e5dd-19868
   */
  export class DestinationCategoryDatabase extends DatabaseBase<DestinationCategory> {
    /** Returns an instance of {@link DestinationCategoryDatabase} which contains a flat list of all categories (top level and sub-categories) for easy access */
    allCategories(): DestinationCategoryDatabase;
  }
}
