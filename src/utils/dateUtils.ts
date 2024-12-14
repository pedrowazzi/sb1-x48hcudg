import { DateRange } from '../types/metrics';

export const formatDateForMeta = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const getTodayRange = (): DateRange => {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  
  const startOfDay = new Date(today);
  startOfDay.setHours(0, 0, 0, 0);
  
  return {
    startDate: startOfDay,
    endDate: today
  };
};

export const getYesterdayRange = (): DateRange => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(23, 59, 59, 999);
  
  const startOfYesterday = new Date(yesterday);
  startOfYesterday.setHours(0, 0, 0, 0);
  
  return {
    startDate: startOfYesterday,
    endDate: yesterday
  };
};

export const getDateRangeForDays = (days: number): DateRange => {
  const endDate = new Date();
  endDate.setHours(23, 59, 59, 999);
  
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - (days - 1));
  startDate.setHours(0, 0, 0, 0);
  
  return { startDate, endDate };
};

// Meta API limitation: maximum 37 months from current date
export const getMaxAllowedRange = (): DateRange => {
  const endDate = new Date();
  endDate.setHours(23, 59, 59, 999);
  
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 36);
  startDate.setHours(0, 0, 0, 0);
  
  return { startDate, endDate };
};

export const differenceInDays = (startDate: Date, endDate: Date): number => {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};