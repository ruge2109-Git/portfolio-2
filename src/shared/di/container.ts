/**
 * Dependency Injection Container
 * Centralized dependency management following Dependency Inversion Principle
 */
import { ProjectRepository } from '../../infrastructure/repositories/ProjectRepository';
import { ConfigRepository } from '../../infrastructure/repositories/ConfigRepository';
import { TranslationService } from '../../infrastructure/services/TranslationService';
import { ProjectService } from '../../application/services/ProjectService';
import { ConfigService } from '../../application/services/ConfigService';

// Infrastructure layer dependencies
const projectRepository = new ProjectRepository();
const configRepository = new ConfigRepository();
const translationService = new TranslationService();

// Application layer dependencies
export const projectService = new ProjectService(projectRepository);
export const configService = new ConfigService(configRepository);
export const translations = translationService;

// Re-export for convenience
export { projectRepository, configRepository, translationService };
