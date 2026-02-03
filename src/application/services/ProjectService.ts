import type { IProjectRepository } from '../../domain/interfaces/ProjectRepository';
import type { Project } from '../../domain/entities/Project';
import type { ProjectFilters } from '../../domain/types/Filter';
import { ProjectEntity } from '../../domain/entities/Project';

export class ProjectService {
  constructor(private readonly repository: IProjectRepository) {}
  async getAllProjects(): Promise<readonly ProjectEntity[]> {
    const projects = await this.repository.findAll();
    return projects.map((p) => new ProjectEntity(p));
  }
  async getFeaturedProjects(): Promise<readonly ProjectEntity[]> {
    const projects = await this.repository.findFeatured();
    return projects.map((p) => new ProjectEntity(p));
  }
  async getFilteredProjects(
    filters: ProjectFilters
  ): Promise<readonly ProjectEntity[]> {
    const projects = await this.repository.findByFilters(filters);
    return projects.map((p) => new ProjectEntity(p));
  }
  async getProjectByTitle(title: string): Promise<ProjectEntity | null> {
    const project = await this.repository.findByTitle(title);
    return project ? new ProjectEntity(project) : null;
  }
  async getAvailableTechnologies(): Promise<readonly string[]> {
    return this.repository.getTechnologies();
  }
  async getProjectsByTechnology(
    technology: string
  ): Promise<readonly ProjectEntity[]> {
    const projects = await this.repository.findByFilters({
      technology,
    });
    return projects.map((p) => new ProjectEntity(p));
  }
}
