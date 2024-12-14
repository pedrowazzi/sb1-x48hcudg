import { MetaApiClient } from '../api/metaApi';
import { DateRange, MetricsResponse } from '../../types/metrics';
import { transformMetricsData } from '../../utils/transformers/metricsTransformer';
import { EMPTY_METRICS } from '../../constants/metrics';
import { DateRangeService } from '../dateRangeService';
import { isValidDateRange, getValidDateRangeError } from '../../utils/validation/dateValidation';

export class MetaInsightsService {
  static async fetchInsights(dateRange: DateRange): Promise<MetricsResponse> {
    try {
      const normalizedRange = DateRangeService.normalizeRange(dateRange);

      if (!isValidDateRange(normalizedRange.startDate, normalizedRange.endDate)) {
        const error = getValidDateRangeError(normalizedRange.startDate, normalizedRange.endDate);
        throw new Error(error || 'Período de datas inválido');
      }

      const data = await MetaApiClient.fetchInsights(normalizedRange);
      
      if (!data.data || !Array.isArray(data.data)) {
        console.warn('No data received from Meta API');
        return EMPTY_METRICS;
      }

      if (data.data.length === 0) {
        console.warn('Empty data array received from Meta API');
        return EMPTY_METRICS;
      }

      return transformMetricsData(data);
    } catch (error) {
      console.error('MetaInsightsService Error:', { error });
      if (error instanceof Error) {
        throw new Error(`Erro na API do Meta: ${error.message}`);
      }
      throw new Error('Ocorreu um erro inesperado ao buscar os dados do Meta Ads');
    }
  }
}