import { useMemo } from 'react';
import { adMetrics } from '../data/mockData';

export const useMetrics = () => {
  return useMemo(() => {
    const totalPageViews = adMetrics.reduce((sum, campaign) => sum + campaign.pageViews, 0);
    const totalSpend = adMetrics.reduce((sum, campaign) => sum + campaign.spend, 0);
    const totalCartAdds = adMetrics.reduce((sum, campaign) => sum + campaign.cartAdds, 0);
    const totalCheckoutStarts = adMetrics.reduce((sum, campaign) => sum + campaign.checkoutStarts, 0);
    const totalPurchases = adMetrics.reduce((sum, campaign) => sum + campaign.purchases, 0);
    const totalPurchaseValue = adMetrics.reduce((sum, campaign) => sum + campaign.purchaseValue, 0);
    
    return {
      totalPageViews,
      totalSpend,
      totalCartAdds,
      totalCheckoutStarts,
      totalPurchases,
      totalPurchaseValue,
      averageOrderValue: totalPurchaseValue / totalPurchases,
      roas: totalPurchaseValue / totalSpend
    };
  }, []);
};