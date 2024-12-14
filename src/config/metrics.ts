import { MetricConfig } from '../types/config';

export const METRICS_CONFIG: MetricConfig[] = [
  { key: 'spend', variant: 'default', order: 1 },
  { key: 'pageViews', variant: 'default', order: 2 },
  { key: 'cartAdds', variant: 'default', order: 3 },
  { key: 'checkoutStarts', variant: 'default', order: 4 },
  { key: 'purchases', variant: 'success', order: 5 },
  { key: 'purchaseValue', variant: 'success', order: 6 },
  { key: 'roas', variant: 'success', order: 7 },
  { key: 'averageOrderValue', variant: 'success', order: 8 }
] as const;