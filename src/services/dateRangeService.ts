import { DateRange } from '../types/metrics';

export class DateRangeService {
  private static readonly TIMEZONE = 'America/Sao_Paulo';

  static getTodayRange(): DateRange {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);
    
    return {
      startDate: startOfDay,
      endDate: today
    };
  }

  static getYesterdayRange(): DateRange {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    const startOfYesterday = new Date(yesterday);
    startOfYesterday.setHours(0, 0, 0, 0);
    
    const endOfYesterday = new Date(yesterday);
    endOfYesterday.setHours(23, 59, 59, 999);
    
    return {
      startDate: startOfYesterday,
      endDate: endOfYesterday
    };
  }

  static getLastNDaysRange(days: number): DateRange {
    const end = new Date();
    end.setDate(end.getDate() - 1);
    end.setHours(23, 59, 59, 999);
    
    const start = new Date(end);
    start.setDate(start.getDate() - (days - 1));
    start.setHours(0, 0, 0, 0);
    
    return {
      startDate: start,
      endDate: end
    };
  }

  static getMaxAllowedRange(): DateRange {
    const end = new Date();
    end.setDate(end.getDate() - 1);
    end.setHours(23, 59, 59, 999);
    
    const start = new Date();
    start.setMonth(start.getMonth() - 36);
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    
    return {
      startDate: start,
      endDate: end
    };
  }

  static normalizeRange(range: DateRange): DateRange {
    if (!range?.startDate || !range?.endDate) {
      return this.getYesterdayRange();
    }

    const start = new Date(range.startDate);
    const end = new Date(range.endDate);
    
    start.setHours(0, 0, 0, 0);
    
    if (this.isToday(start) && this.isToday(end)) {
      return {
        startDate: start,
        endDate: new Date()
      };
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(23, 59, 59, 999);
    
    return {
      startDate: start,
      endDate: yesterday
    };
  }

  static formatDateForAPI(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  private static isToday(date: Date): boolean {
    const today = new Date();
    return today.getFullYear() === date.getFullYear() &&
           today.getMonth() === date.getMonth() &&
           today.getDate() === date.getDate();
  }
}