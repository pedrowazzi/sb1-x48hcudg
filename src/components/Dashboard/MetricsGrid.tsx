import React from 'react';
import { 
  DollarSign, Eye, ShoppingCart, PlayCircle,
  ShoppingBag, CreditCard, TrendingUp, Receipt
} from 'lucide-react';
import { MetricCard } from './MetricCard';
import { METRIC_DEFINITIONS } from '../../constants/metricDefinitions';
import { MetricsResponse } from '../../types/metrics';
import { METRICS_CONFIG } from '../../config/constants';

interface MetricsGridProps {
  metrics: MetricsResponse;
  loading?: boolean;
}

const ICON_MAP = {
  spend: DollarSign,
  pageViews: Eye,
  cartAdds: ShoppingCart,
  checkoutStarts: PlayCircle,
  purchases: ShoppingBag,
  purchaseValue: CreditCard,
  roas: TrendingUp,
  averageOrderValue: Receipt
} as const;

export const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics, loading = false }) => {
  return (
    <>
      {METRICS_CONFIG.map(({ key, variant }) => {
        const IconComponent = ICON_MAP[key as keyof typeof ICON_MAP];
        return (
          <MetricCard
            key={key}
            metricKey={key}
            value={getMetricValue(metrics, key)}
            icon={IconComponent}
            metricInfo={METRIC_DEFINITIONS[key]}
            loading={loading}
            variant={variant}
          />
        );
      })}
    </>
  );
};

const getMetricValue = (metrics: MetricsResponse, key: string): number => {
  if (key === 'roas' || key === 'averageOrderValue') {
    return metrics[key] || 0;
  }
  const totalKey = `total${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof MetricsResponse;
  return metrics[totalKey] || 0;
};