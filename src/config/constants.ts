export const DATE_RANGES = {
  LAST_WEEK: 7,
  LAST_MONTH: 30,
  LAST_QUARTER: 90
} as const;

export const API_ENDPOINTS = {
  INSIGHTS: 'insights'
} as const;

export const ACTION_TYPES = {
  PAGE_VIEW: 'page_view',
  VIEW_CONTENT: 'view_content',
  ADD_TO_CART: 'add_to_cart',
  INITIATE_CHECKOUT: 'initiate_checkout',
  PURCHASE: 'purchase'
} as const;

export const METRICS_CONFIG = [
  { key: 'spend', variant: 'default' },
  { key: 'pageViews', variant: 'default' },
  { key: 'cartAdds', variant: 'default' },
  { key: 'checkoutStarts', variant: 'default' },
  { key: 'purchases', variant: 'success' },
  { key: 'purchaseValue', variant: 'success' },
  { key: 'roas', variant: 'success' },
  { key: 'averageOrderValue', variant: 'success' }
] as const;