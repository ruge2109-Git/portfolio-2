/**
 * Infrastructure: ConfigRepository Implementation
 * Concrete implementation of configuration data access
 */
import type { IConfigRepository } from '../../domain/interfaces/ConfigRepository';
import type { PortfolioConfig } from '../../domain/entities/PersonalInfo';
import { config } from '../data/config';

export class ConfigRepository implements IConfigRepository {
  async getConfig(): Promise<PortfolioConfig> {
    return config;
  }
}
