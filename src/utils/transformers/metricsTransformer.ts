import { MetricsResponse } from '../../types/metrics';
import { MetaInsightsData } from '../../types/meta';
import { ACTION_TYPES } from '../../config/constants';

const findActionValue = (actions: any[] = [], actionTypes: string[]): number => {
  return actions.reduce((sum, action) => {
    if (actionTypes.includes(action.action_type)) {
      const value = Number(action.value);
      return sum + (isNaN(value) ? 0 : value);
    }
    return sum;
  }, 0);
};

const findActionValueAmount = (values: any[] = [], actionType: string): number => {
  const value = values.find(v => v.action_type === actionType);
  const amount = value ? Number(value.value) : 0;
  return isNaN(amount) ? 0 : amount;
};

export const transformMetricsData = (data: MetaInsightsData): MetricsResponse => {
  const insights = data.data[0] || {};
  const actions = insights.actions || [];
  const actionValues = insights.action_values || [];

  // Consider both page_view and view_content for views
  const pageViewTypes = [ACTION_TYPES.PAGE_VIEW, ACTION_TYPES.VIEW_CONTENT];
  
  const spend = Number(insights.spend || 0);
  const totalSpend = isNaN(spend) ? 0 : spend;
  
  const baseMetrics = {
    totalSpend,
    totalPageViews: findActionValue(actions, pageViewTypes),
    totalCartAdds: findActionValue(actions, [ACTION_TYPES.ADD_TO_CART]),
    totalCheckoutStarts: findActionValue(actions, [ACTION_TYPES.INITIATE_CHECKOUT]),
    totalPurchases: findActionValue(actions, [ACTION_TYPES.PURCHASE]),
    totalPurchaseValue: findActionValueAmount(actionValues, ACTION_TYPES.PURCHASE)
  };

  const roas = baseMetrics.totalSpend > 0 
    ? baseMetrics.totalPurchaseValue / baseMetrics.totalSpend 
    : 0;

  const averageOrderValue = baseMetrics.totalPurchases > 0 
    ? baseMetrics.totalPurchaseValue / baseMetrics.totalPurchases 
    : 0;

  return {
    ...baseMetrics,
    roas,
    averageOrderValue
  };
};