import { MetaApiClient } from '../api/metaApi';
import { DateRange, MetricsResponse } from '../../types/metrics';
import { transformMetricsData } from '../../utils/transformers/metricsTransformer';
import { EMPTY_METRICS } from '../../constants/metrics';
import { DateRangeService } from '../dateRangeService';
import { MetricsValidator } from './MetricsValidator';
import { MetricsError } from './MetricsError';

export class MetricsService {
  static async fetchInsights(dateRange: DateRange): Promise<MetricsResponse> {
    try {
      // Always normalize the date range first
      const normalizedRange = DateRangeService.normalizeRange(dateRange);
      
      // Validate the normalized range
      const validationError = MetricsValidator.validateDateRange(normalizedRange);
      if (validationError) {
        throw new MetricsError('VALIDATION_ERROR', validationError);
      }

      // Fetch data with normalized range
      const data = await MetaApiClient.fetchInsights(normalizedRange);
      
      if (!MetricsValidator.isValidResponse(data)) {
        console.warn('No data available for the selected period', {
          range: normalizedRange,
          response: data
        });
        return EMPTY_METRICS;
      }

      return transformMetricsData(data);
    } catch (error) {
      if (error instanceof MetricsError) {
        throw error;
      }
      
      console.error('MetricsService Error:', {
        error,
        dateRange
      });
      
      throw MetricsError.fromError(error);
    }
  }
}