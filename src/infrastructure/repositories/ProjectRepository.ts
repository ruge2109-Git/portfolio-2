import type { IProjectRepository } from '../../domain/interfaces/ProjectRepository';
import type { Project } from '../../domain/entities/Project';
import type { ProjectFilters } from '../../domain/types/Filter';
import { portfolioData } from '@shared/data/portfolio';

export class ProjectRepository implements IProjectRepository {
  private projects: readonly Project[] = portfolioData.projects;

  async findAll(): Promise<readonly Project[]> {
    return this.projects;
  }

  async findFeatured(): Promise<readonly Project[]> {
    return this.projects.filter((project) => project.featured);
  }

  async findByFilters(filters: ProjectFilters): Promise<readonly Project[]> {
    let filtered = [...this.projects];
    if (filters.featuredOnly) {
      filtered = filtered.filter((project) => project.featured);
    }
    if (filters.technology && filters.technology !== 'all') {
      filtered = filtered.filter((project) =>
        project.stack.some(
          (tech) => tech.toLowerCase() === filters.technology?.toLowerCase()
        )
      );
    }
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        if (filters.sortBy === 'stars') {
          return b.stars - a.stars;
        }
        return (
          new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
        );
      });
    }

    return filtered;
  }

  async findByTitle(title: string): Promise<Project | null> {
    const project = this.projects.find((p) => p.title === title);
    return project || null;
  }

  async getTechnologies(): Promise<readonly string[]> {
    const technologies = new Set<string>();
    this.projects.forEach((project) => {
      project.stack.forEach((tech) => technologies.add(tech));
    });
    return Array.from(technologies).sort();
  }
}
