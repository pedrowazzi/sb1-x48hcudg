import { BaseMetrics } from '../../types/metrics';

export const calculateDerivedMetrics = (baseMetrics: BaseMetrics) => {
  const averageOrderValue = baseMetrics.totalPurchases > 0 
    ? baseMetrics.totalPurchaseValue / baseMetrics.totalPurchases 
    : 0;

  const roas = baseMetrics.totalSpend > 0 
    ? baseMetrics.totalPurchaseValue / baseMetrics.totalSpend 
    : 0;

  return {
    ...baseMetrics,
    averageOrderValue,
    roas
  };
};