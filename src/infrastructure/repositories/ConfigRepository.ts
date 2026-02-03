import type { IConfigRepository } from '../../domain/interfaces/ConfigRepository';
import type { PortfolioConfig } from '../../domain/entities/PersonalInfo';
import { portfolioData } from '@shared/data/portfolio';

export class ConfigRepository implements IConfigRepository {
  async getConfig(): Promise<PortfolioConfig> {
    return portfolioData.config;
  }
}
