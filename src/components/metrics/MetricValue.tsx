import React from 'react';

interface MetricValueProps {
  value: number;
  formatter: (value: number) => string;
  loading?: boolean;
}

export const MetricValue: React.FC<MetricValueProps> = ({ 
  value, 
  formatter, 
  loading = false 
}) => {
  if (loading) {
    return <div className="animate-pulse h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded" />;
  }

  return (
    <span className="text-2xl font-bold text-gray-800 dark:text-white">
      {formatter(value || 0)}
    </span>
  );
};