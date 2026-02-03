/**
 * Domain Entity: Project
 * Represents a portfolio project with all its properties
 */
export interface Project {
  readonly title: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly github: string;
  readonly demo: string;
  readonly lastUpdate: string;
  readonly stars: number;
  readonly featured: boolean;
}

/**
 * Project domain methods
 */
export class ProjectEntity {
  constructor(private readonly project: Project) {}

  get title(): string {
    return this.project.title;
  }

  get description(): string {
    return this.project.description;
  }

  get stack(): readonly string[] {
    return this.project.stack;
  }

  get github(): string {
    return this.project.github;
  }

  get demo(): string {
    return this.project.demo;
  }

  get lastUpdate(): Date {
    return new Date(this.project.lastUpdate);
  }

  get stars(): number {
    return this.project.stars;
  }

  get featured(): boolean {
    return this.project.featured;
  }

  hasDemo(): boolean {
    return Boolean(this.demo && this.demo.trim() !== '');
  }

  isRecent(days: number = 30): boolean {
    const diffTime = Date.now() - this.lastUpdate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= days;
  }

  usesTechnology(tech: string): boolean {
    return this.stack.some(
      (stackTech) => stackTech.toLowerCase() === tech.toLowerCase()
    );
  }
}
