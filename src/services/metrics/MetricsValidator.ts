import { DateRange } from '../../types/metrics';
import { MetaInsightsData } from '../../types/meta';
import { DateRangeService } from '../dateRangeService';

export class MetricsValidator {
  private static readonly MAX_MONTHS = 37;

  static validateDateRange(range: DateRange): string | null {
    const { startDate, endDate } = range;

    if (!this.isValidDate(startDate) || !this.isValidDate(endDate)) {
      return 'Data inválida';
    }

    if (startDate > endDate) {
      return 'A data inicial deve ser anterior ou igual à data final';
    }

    // Skip max date validation for today's range
    if (this.isToday(startDate) && this.isToday(endDate)) {
      return null;
    }

    const maxDate = this.getMaxAllowedDate();
    if (startDate < maxDate) {
      return `A data inicial não pode ser anterior a ${maxDate.toLocaleDateString('pt-BR')}`;
    }

    return null;
  }

  static isValidResponse(data: MetaInsightsData): boolean {
    return !!(data?.data && Array.isArray(data.data) && data.data.length > 0);
  }

  private static isValidDate(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

  private static getMaxAllowedDate(): Date {
    const date = new Date();
    date.setMonth(date.getMonth() - this.MAX_MONTHS);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  private static isToday(date: Date): boolean {
    const today = new Date();
    return today.getFullYear() === date.getFullYear() &&
           today.getMonth() === date.getMonth() &&
           today.getDate() === date.getDate();
  }
}