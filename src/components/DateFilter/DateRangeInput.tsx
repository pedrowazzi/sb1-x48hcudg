import React from 'react';
import { DateRange } from '../../types/metrics';

interface DateRangeInputProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
  minDate: string;
  maxDate: string;
}

export const DateRangeInput: React.FC<DateRangeInputProps> = ({
  dateRange,
  onDateRangeChange,
  minDate,
  maxDate
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Data inicial
      </label>
      <input
        type="date"
        id="start-date"
        min={minDate}
        max={maxDate}
        value={dateRange.startDate.toISOString().split('T')[0]}
        onChange={(e) => onDateRangeChange({
          ...dateRange,
          startDate: new Date(e.target.value)
        })}
        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Data final
      </label>
      <input
        type="date"
        id="end-date"
        min={minDate}
        max={maxDate}
        value={dateRange.endDate.toISOString().split('T')[0]}
        onChange={(e) => onDateRangeChange({
          ...dateRange,
          endDate: new Date(e.target.value)
        })}
        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  </div>
);