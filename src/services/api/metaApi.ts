import { META_CONFIG } from '../../config/metaConfig';
import { DateRange } from '../../types/metrics';
import { DateRangeService } from '../dateRangeService';
import { API_ENDPOINTS } from '../../config/constants';

export class MetaApiClient {
  private static readonly baseUrl = META_CONFIG.BASE_URL;
  private static readonly version = META_CONFIG.API_VERSION;
  private static readonly token = META_CONFIG.ACCESS_TOKEN;
  private static readonly accountId = META_CONFIG.AD_ACCOUNT_ID;

  private static buildUrl(endpoint: string, params: Record<string, string>): string {
    const searchParams = new URLSearchParams({
      access_token: this.token,
      ...params
    });
    
    return `${this.baseUrl}/${this.version}/${endpoint}?${searchParams}`;
  }

  private static async request<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'Error in Meta API response');
      }

      return data;
    } catch (error) {
      console.error('Meta API Request Failed:', {
        url: url.replace(this.token, '[REDACTED]'),
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      throw error;
    }
  }

  static async fetchInsights(dateRange: DateRange) {
    const timeRange = {
      since: DateRangeService.formatDateForAPI(dateRange.startDate),
      until: DateRangeService.formatDateForAPI(dateRange.endDate)
    };

    const url = this.buildUrl(
      `act_${this.accountId}/${API_ENDPOINTS.INSIGHTS}`,
      {
        fields: 'spend,actions,action_values',
        time_range: JSON.stringify(timeRange),
        level: 'account',
        limit: '1000'
      }
    );

    return this.request(url);
  }
}