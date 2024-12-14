import { MetricsResponse } from '../types/metrics';

interface Action {
  action_type: string;
  value: string;
}

interface ActionValue {
  action_type: string;
  value: string;
}

interface MetaInsightsData {
  data: Array<{
    spend: string;
    actions?: Action[];
    action_values?: ActionValue[];
  }>;
}

const findActionValue = (actions: Action[] = [], actionType: string): number => {
  const action = actions.find(a => a.action_type === actionType);
  return action ? Number(action.value) : 0;
};

const findActionValueAmount = (values: ActionValue[] = [], actionType: string): number => {
  const value = values.find(v => v.action_type === actionType);
  return value ? Number(value.value) : 0;
};

export const transformMetricsData = (data: MetaInsightsData): MetricsResponse => {
  const insights = data.data[0] || {};
  const actions = insights.actions || [];
  const actionValues = insights.action_values || [];

  const baseMetrics = {
    totalSpend: Number(insights.spend || 0),
    totalPageViews: findActionValue(actions, 'page_view'),
    totalCartAdds: findActionValue(actions, 'add_to_cart'),
    totalCheckoutStarts: findActionValue(actions, 'initiate_checkout'),
    totalPurchases: findActionValue(actions, 'purchase'),
    totalPurchaseValue: findActionValueAmount(actionValues, 'purchase'),
  };

  return {
    ...baseMetrics,
    averageOrderValue: baseMetrics.totalPurchases > 0 
      ? baseMetrics.totalPurchaseValue / baseMetrics.totalPurchases 
      : 0,
    roas: baseMetrics.totalSpend > 0 
      ? baseMetrics.totalPurchaseValue / baseMetrics.totalSpend 
      : 0
  };
};