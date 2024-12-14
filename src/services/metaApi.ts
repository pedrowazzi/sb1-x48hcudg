import { META_CONFIG } from '../config/metaConfig';
import { DateRange, MetricsResponse } from '../types/metrics';
import { formatDateForMeta } from '../utils/dateUtils';
import { transformMetricsData } from '../utils/metricsTransformer';

export class MetaAdsService {
  private static buildUrl(dateRange: DateRange): string {
    const startDate = formatDateForMeta(dateRange.startDate);
    const endDate = formatDateForMeta(dateRange.endDate);
    
    return `${META_CONFIG.BASE_URL}/${META_CONFIG.API_VERSION}/act_1319727536143580/insights` +
      `?access_token=${META_CONFIG.ACCESS_TOKEN}` +
      `&time_range={'since':'${startDate}','until':'${endDate}'}` +
      '&fields=spend,actions,action_values';
  }

  static async fetchInsights(dateRange: DateRange): Promise<MetricsResponse> {
    try {
      const response = await fetch(this.buildUrl(dateRange));
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to fetch Meta Ads data');
      }

      const data = await response.json();
      
      if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
        throw new Error('No data available for the selected date range');
      }

      return transformMetricsData(data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Meta API Error: ${error.message}`);
      }
      throw new Error('An unexpected error occurred while fetching Meta Ads data');
    }
  }
}