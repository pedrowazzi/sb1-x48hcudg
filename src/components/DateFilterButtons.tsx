import React from 'react';
import { DateRange } from '../types/metrics';
import { getDateRangeForDays, getTodayRange } from '../utils/dateUtils';

interface DateFilterButtonsProps {
  onDateRangeChange: (range: DateRange) => void;
  selectedRange: number;
}

const DATE_RANGES = [
  { days: 0, label: 'Hoje', getRangeFn: getTodayRange },
  { days: 3, label: '3 dias', getRangeFn: () => getDateRangeForDays(3) },
  { days: 7, label: '7 dias', getRangeFn: () => getDateRangeForDays(7) },
  { days: 15, label: '15 dias', getRangeFn: () => getDateRangeForDays(15) },
  { days: 30, label: '30 dias', getRangeFn: () => getDateRangeForDays(30) },
  { days: 90, label: 'Todos', getRangeFn: () => getDateRangeForDays(90) }
];

export const DateFilterButtons: React.FC<DateFilterButtonsProps> = ({
  onDateRangeChange,
  selectedRange
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
      {DATE_RANGES.map(({ days, label, getRangeFn }) => (
        <button
          key={days}
          onClick={() => onDateRangeChange(getRangeFn())}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap
            ${selectedRange === days
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            } shadow-sm`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};