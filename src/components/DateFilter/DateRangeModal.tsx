import React from 'react';
import { X, Calendar } from 'lucide-react';
import { DateRange } from '../../types/metrics';
import { DateRangeService } from '../../services/dateRangeService';
import { DateRangeModalHeader } from './DateRangeModalHeader';
import { DateRangeModalForm } from './DateRangeModalForm';

interface DateRangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
  onApply: (range: DateRange) => void;
}

export const DateRangeModal: React.FC<DateRangeModalProps> = ({
  isOpen,
  onClose,
  dateRange,
  onDateRangeChange,
  onApply
}) => {
  if (!isOpen) return null;

  const safeRange = dateRange || DateRangeService.getYesterdayRange();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply(safeRange);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>

          <DateRangeModalHeader />
          <DateRangeModalForm
            dateRange={safeRange}
            onDateRangeChange={onDateRangeChange}
            onSubmit={handleSubmit}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};