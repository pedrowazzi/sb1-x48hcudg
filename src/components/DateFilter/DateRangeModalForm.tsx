import React from 'react';
import { DateRange } from '../../types/metrics';
import { DateRangeInput } from './DateRangeInput';

interface DateRangeModalFormProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export const DateRangeModalForm: React.FC<DateRangeModalFormProps> = ({
  dateRange,
  onDateRangeChange,
  onSubmit,
  onCancel
}) => {
  const minDate = '2020-01-01';
  const maxDate = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4">
      <DateRangeInput
        dateRange={dateRange}
        onDateRangeChange={onDateRangeChange}
        minDate={minDate}
        maxDate={maxDate}
      />

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <button
          type="button"
          className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center rounded-md bg-white dark:bg-gray-700 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Aplicar
        </button>
      </div>
    </form>
  );
};