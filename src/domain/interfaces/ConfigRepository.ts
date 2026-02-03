import type { PortfolioConfig } from '../entities/PersonalInfo';

export interface IConfigRepository {
  getConfig(): Promise<PortfolioConfig>;
}
