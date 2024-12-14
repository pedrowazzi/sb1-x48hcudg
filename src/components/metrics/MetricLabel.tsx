import React from 'react';

interface MetricLabelProps {
  label: string;
  icon: React.ReactNode;
  variant?: 'default' | 'success';
}

export const MetricLabel: React.FC<MetricLabelProps> = ({ 
  label, 
  icon, 
  variant = 'default' 
}) => {
  const iconColor = variant === 'success' 
    ? 'text-green-700 dark:text-green-400' 
    : 'text-gray-600 dark:text-gray-400';

  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
        {label}
      </span>
      <span className={iconColor}>{icon}</span>
    </div>
  );
};