import React, { useCallback } from 'react';
import { Calendar } from 'lucide-react';
import { DateRange } from '../types/metrics';

interface DateRangeSelectorProps {
  dateRange: DateRange;
  onDateRangeChange: (newRange: DateRange) => void;
}

export const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ 
  dateRange, 
  onDateRangeChange 
}) => {
  const handleStartDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onDateRangeChange({
      ...dateRange,
      startDate: new Date(e.target.value)
    });
  }, [dateRange, onDateRangeChange]);

  const handleEndDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onDateRangeChange({
      ...dateRange,
      endDate: new Date(e.target.value)
    });
  }, [dateRange, onDateRangeChange]);

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3">
      <div className="flex items-center space-x-2">
        <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <span className="text-sm text-gray-500 dark:text-gray-400">Período:</span>
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <input
          type="date"
          value={dateRange.startDate.toISOString().split('T')[0]}
          onChange={handleStartDateChange}
          className="border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md text-sm w-full sm:w-auto"
        />
        <span className="text-gray-500 dark:text-gray-400 text-center">até</span>
        <input
          type="date"
          value={dateRange.endDate.toISOString().split('T')[0]}
          onChange={handleEndDateChange}
          className="border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md text-sm w-full sm:w-auto"
        />
      </div>
    </div>
  );
};