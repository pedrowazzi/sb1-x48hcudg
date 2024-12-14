import { useState, useCallback } from 'react';
import { DateRange } from '../types/metrics';
import { getMaxAllowedRange } from '../utils/dateUtils';
import { DATE_RANGES } from '../utils/constants/dateRanges';

export const useDateFilter = (initialRange: DateRange) => {
  const [dateRange, setDateRange] = useState<DateRange>(initialRange);
  const [selectedRange, setSelectedRange] = useState<number>(7);
  const [showModal, setShowModal] = useState(false);

  const handleRangeSelect = useCallback((range: DateRange, days: number) => {
    setDateRange(range);
    setSelectedRange(days);
  }, []);

  const handleAllTimeSelect = useCallback(() => {
    const range = getMaxAllowedRange();
    setDateRange(range);
    setSelectedRange(-2);
  }, []);

  const handleCustomRange = useCallback((range: DateRange) => {
    setDateRange(range);
    setSelectedRange(-1);
  }, []);

  const isValidRange = useCallback((days: number) => {
    return DATE_RANGES.some(range => range.days === days);
  }, []);

  return {
    dateRange,
    selectedRange,
    showModal,
    setShowModal,
    handleRangeSelect,
    handleAllTimeSelect,
    handleCustomRange,
    isValidRange
  };
};