import type { Project } from '../entities/Project';
import type { ProjectFilters } from '../types/Filter';

export interface IProjectRepository {
  findAll(): Promise<readonly Project[]>;
  findFeatured(): Promise<readonly Project[]>;
  findByFilters(filters: ProjectFilters): Promise<readonly Project[]>;
  findByTitle(title: string): Promise<Project | null>;
  getTechnologies(): Promise<readonly string[]>;
}
