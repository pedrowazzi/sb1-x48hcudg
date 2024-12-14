import { DateRange } from './metrics';

export interface DateRangeConfig {
  days: number;
  label: string;
  getRangeFn: () => DateRange;
}