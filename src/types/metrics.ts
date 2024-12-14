export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface BaseMetrics {
  totalSpend: number;
  totalPageViews: number;
  totalCartAdds: number;
  totalCheckoutStarts: number;
  totalPurchases: number;
  totalPurchaseValue: number;
}

export interface MetricsResponse extends BaseMetrics {
  averageOrderValue: number;
  roas: number;
}

export interface MetricInfo {
  label: string;
  description: string;
  format: (value: number) => string;
}