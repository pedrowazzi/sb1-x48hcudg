import React from 'react';

interface MetricTooltipProps {
  description: string;
  show: boolean;
}

export const MetricTooltip: React.FC<MetricTooltipProps> = ({ 
  description, 
  show 
}) => {
  if (!show) return null;

  return (
    <div className="absolute z-10 w-64 p-4 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
      {description}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800 dark:bg-gray-700" />
    </div>
  );
};