/**
 * Application Service: ProjectService
 * Business logic for project operations
 */
import type { IProjectRepository } from '../../domain/interfaces/ProjectRepository';
import type { Project } from '../../domain/entities/Project';
import type { ProjectFilters } from '../../domain/types/Filter';
import { ProjectEntity } from '../../domain/entities/Project';

export class ProjectService {
  constructor(private readonly repository: IProjectRepository) {}

  /**
   * Get all projects
   */
  async getAllProjects(): Promise<readonly ProjectEntity[]> {
    const projects = await this.repository.findAll();
    return projects.map((p) => new ProjectEntity(p));
  }

  /**
   * Get featured projects
   */
  async getFeaturedProjects(): Promise<readonly ProjectEntity[]> {
    const projects = await this.repository.findFeatured();
    return projects.map((p) => new ProjectEntity(p));
  }

  /**
   * Get filtered projects
   */
  async getFilteredProjects(
    filters: ProjectFilters
  ): Promise<readonly ProjectEntity[]> {
    const projects = await this.repository.findByFilters(filters);
    return projects.map((p) => new ProjectEntity(p));
  }

  /**
   * Get project by title
   */
  async getProjectByTitle(title: string): Promise<ProjectEntity | null> {
    const project = await this.repository.findByTitle(title);
    return project ? new ProjectEntity(project) : null;
  }

  /**
   * Get available technologies
   */
  async getAvailableTechnologies(): Promise<readonly string[]> {
    return this.repository.getTechnologies();
  }

  /**
   * Get projects by technology
   */
  async getProjectsByTechnology(
    technology: string
  ): Promise<readonly ProjectEntity[]> {
    const projects = await this.repository.findByFilters({
      technology,
    });
    return projects.map((p) => new ProjectEntity(p));
  }
}
