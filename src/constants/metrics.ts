import { MetricsResponse } from '../types/metrics';

export const EMPTY_METRICS: MetricsResponse = {
  totalSpend: 0,
  totalPageViews: 0,
  totalCartAdds: 0,
  totalCheckoutStarts: 0,
  totalPurchases: 0,
  totalPurchaseValue: 0,
  averageOrderValue: 0,
  roas: 0
};