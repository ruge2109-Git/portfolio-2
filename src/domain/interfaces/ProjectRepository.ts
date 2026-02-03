/**
 * Domain Interface: ProjectRepository
 * Defines the contract for project data access
 */
import type { Project } from '../entities/Project';
import type { ProjectFilters } from '../types/Filter';

export interface IProjectRepository {
  /**
   * Get all projects
   */
  findAll(): Promise<readonly Project[]>;

  /**
   * Get featured projects only
   */
  findFeatured(): Promise<readonly Project[]>;

  /**
   * Get projects with filters
   */
  findByFilters(filters: ProjectFilters): Promise<readonly Project[]>;

  /**
   * Get project by title
   */
  findByTitle(title: string): Promise<Project | null>;

  /**
   * Get all unique technologies from projects
   */
  getTechnologies(): Promise<readonly string[]>;
}
