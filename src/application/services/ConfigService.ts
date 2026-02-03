import type { IConfigRepository } from '../../domain/interfaces/ConfigRepository';
import type { PortfolioConfig } from '../../domain/entities/PersonalInfo';
import type { Language } from '../../domain/types/Language';

export class ConfigService {
  constructor(private readonly repository: IConfigRepository) {}
  async getConfig(): Promise<PortfolioConfig> {
    return this.repository.getConfig();
  }
  async getAboutText(lang: Language): Promise<string> {
    const config = await this.getConfig();
    return lang === 'en' ? config.about.en : config.about.es;
  }
  async getExperience(): Promise<PortfolioConfig['experience']> {
    const config = await this.getConfig();
    return config.experience;
  }
  async getSkills(): Promise<PortfolioConfig['skills']> {
    const config = await this.getConfig();
    return config.skills;
  }
  async getPersonalInfo(): Promise<PortfolioConfig['personal']> {
    const config = await this.getConfig();
    return config.personal;
  }
}
