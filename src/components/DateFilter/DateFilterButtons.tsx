import React from 'react';
import { DateFilterButton } from './DateFilterButton';
import { DateRange } from '../../types/metrics';
import { DATE_RANGES } from '../../utils/constants/dateRanges';

interface DateFilterButtonsProps {
  selectedRange: number;
  onRangeSelect: (range: DateRange, days: number) => void;
}

export const DateFilterButtons: React.FC<DateFilterButtonsProps> = ({
  selectedRange,
  onRangeSelect
}) => (
  <div className="flex justify-center">
    <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 px-2 scrollbar-hide">
      {DATE_RANGES.map(({ days, label, getRangeFn }) => (
        <DateFilterButton
          key={days}
          label={label}
          isSelected={selectedRange === days}
          onClick={() => onRangeSelect(getRangeFn(), days)}
        />
      ))}
    </div>
  </div>
);