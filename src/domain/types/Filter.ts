/**
 * Domain Types: Filter and Sort Options
 */
export type SortOption = 'date' | 'stars';

export type FilterOption = string | 'all';

export interface ProjectFilters {
  readonly technology?: FilterOption;
  readonly sortBy?: SortOption;
  readonly featuredOnly?: boolean;
}
