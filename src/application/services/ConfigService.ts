/**
 * Application Service: ConfigService
 * Business logic for configuration operations
 */
import type { IConfigRepository } from '../../domain/interfaces/ConfigRepository';
import type { PortfolioConfig } from '../../domain/entities/PersonalInfo';
import type { Language } from '../../domain/types/Language';

export class ConfigService {
  constructor(private readonly repository: IConfigRepository) {}

  /**
   * Get portfolio configuration
   */
  async getConfig(): Promise<PortfolioConfig> {
    return this.repository.getConfig();
  }

  /**
   * Get about text for a specific language
   */
  async getAboutText(lang: Language): Promise<string> {
    const config = await this.getConfig();
    return lang === 'en' ? config.about.en : config.about.es;
  }

  /**
   * Get experience entries
   */
  async getExperience(): Promise<PortfolioConfig['experience']> {
    const config = await this.getConfig();
    return config.experience;
  }

  /**
   * Get skills by category
   */
  async getSkills(): Promise<PortfolioConfig['skills']> {
    const config = await this.getConfig();
    return config.skills;
  }

  /**
   * Get personal information
   */
  async getPersonalInfo(): Promise<PortfolioConfig['personal']> {
    const config = await this.getConfig();
    return config.personal;
  }
}
