import { DateRangeConfig } from '../../types/date';
import { DateRangeService } from '../../services/dateRangeService';

export const DATE_RANGES: readonly DateRangeConfig[] = [
  { 
    days: 0, 
    label: 'Hoje', 
    getRangeFn: () => DateRangeService.getTodayRange() 
  },
  { 
    days: 1, 
    label: 'Ontem', 
    getRangeFn: () => DateRangeService.getYesterdayRange() 
  },
  { 
    days: 7, 
    label: '7 dias', 
    getRangeFn: () => DateRangeService.getLastNDaysRange(7) 
  },
  { 
    days: 14, 
    label: '14 dias', 
    getRangeFn: () => DateRangeService.getLastNDaysRange(14) 
  },
  { 
    days: 30, 
    label: '30 dias', 
    getRangeFn: () => DateRangeService.getLastNDaysRange(30) 
  },
  { 
    days: -2, 
    label: 'Todo o Período', 
    getRangeFn: () => DateRangeService.getMaxAllowedRange() 
  },
  { 
    days: -1, 
    label: 'Definir Período', 
    getRangeFn: () => DateRangeService.getYesterdayRange() 
  }
] as const;