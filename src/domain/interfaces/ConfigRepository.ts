/**
 * Domain Interface: ConfigRepository
 * Defines the contract for configuration data access
 */
import type { PortfolioConfig } from '../entities/PersonalInfo';

export interface IConfigRepository {
  /**
   * Get portfolio configuration
   */
  getConfig(): Promise<PortfolioConfig>;
}
