import React from 'react';
import { DateFilterButtons } from './DateFilterButtons';
import { DateRangeModal } from './DateRangeModal';
import { DateRange } from '../../types/metrics';
import { useDateFilter } from '../../hooks/useDateFilter';

interface DateFilterProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

export const DateFilter: React.FC<DateFilterProps> = ({
  dateRange: initialRange,
  onDateRangeChange
}) => {
  const {
    dateRange,
    selectedRange,
    showModal,
    setShowModal,
    handleRangeSelect,
    handleAllTimeSelect,
    handleCustomRange
  } = useDateFilter(initialRange);

  const handleRangeButtonClick = (range: DateRange, days: number) => {
    if (days === -1) {
      setShowModal(true);
    } else if (days === -2) {
      handleAllTimeSelect();
      onDateRangeChange(range);
    } else {
      handleRangeSelect(range, days);
      onDateRangeChange(range);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalApply = (customRange: DateRange) => {
    handleCustomRange(customRange);
    onDateRangeChange(customRange);
    setShowModal(false);
  };

  return (
    <section className="space-y-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
        <DateFilterButtons
          selectedRange={selectedRange}
          onRangeSelect={handleRangeButtonClick}
        />
      </div>
      <DateRangeModal
        isOpen={showModal}
        onClose={handleModalClose}
        dateRange={dateRange}
        onDateRangeChange={handleCustomRange}
        onApply={handleModalApply}
      />
    </section>
  );
};