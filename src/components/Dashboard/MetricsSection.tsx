import React from 'react';
import { MetricsGrid } from './MetricsGrid';
import { DateFilter } from '../DateFilter/DateFilter';
import { ErrorAlert } from '../ErrorAlert';
import { DateRange, MetricsResponse } from '../../types/metrics';

interface MetricsSectionProps {
  dateRange: DateRange;
  metrics: MetricsResponse;
  loading: boolean;
  error: string | null;
  onDateRangeChange: (range: DateRange) => void;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({
  dateRange,
  metrics,
  loading,
  error,
  onDateRangeChange
}) => {
  return (
    <div className="container mx-auto px-4 space-y-6">
      <DateFilter
        dateRange={dateRange}
        onDateRangeChange={onDateRangeChange}
      />
      {error && <ErrorAlert message={error} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsGrid metrics={metrics} loading={loading} />
      </div>
    </div>
  );
};