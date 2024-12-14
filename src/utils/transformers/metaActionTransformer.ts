import { MetaAction, MetaActionValue } from '../../types/meta';
import { ACTION_TYPES } from '../../config/constants';

export const findActionValue = (actions: MetaAction[] = [], actionTypes: string[]): number => {
  return actions.reduce((sum, action) => {
    if (actionTypes.includes(action.action_type)) {
      return sum + Number(action.value);
    }
    return sum;
  }, 0);
};

export const findActionValueAmount = (values: MetaActionValue[] = [], actionType: string): number => {
  const value = values.find(v => v.action_type === actionType);
  return value ? Number(value.value) : 0;
};

export const extractMetricsFromActions = (actions: MetaAction[], actionValues: MetaActionValue[]) => {
  // Look for both page_view and view_content actions for page views
  const pageViewTypes = [ACTION_TYPES.PAGE_VIEW, ACTION_TYPES.VIEW_CONTENT];
  const pageViews = findActionValue(actions, pageViewTypes);

  return {
    pageViews,
    cartAdds: findActionValue(actions, [ACTION_TYPES.ADD_TO_CART]),
    checkoutStarts: findActionValue(actions, [ACTION_TYPES.INITIATE_CHECKOUT]),
    purchases: findActionValue(actions, [ACTION_TYPES.PURCHASE]),
    purchaseValue: findActionValueAmount(actionValues, ACTION_TYPES.PURCHASE)
  };
};