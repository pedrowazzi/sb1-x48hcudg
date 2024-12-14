import React from 'react';

interface MetricContainerProps {
  variant?: 'default' | 'success';
  children: React.ReactNode;
}

export const MetricContainer: React.FC<MetricContainerProps> = ({ 
  variant = 'default',
  children 
}) => {
  const bgColor = variant === 'success' 
    ? 'bg-green-50 dark:bg-green-900/20' 
    : 'bg-white dark:bg-gray-800';

  return (
    <div className={`${bgColor} rounded-xl p-4 lg:p-6 shadow-sm h-full flex flex-col`}>
      {children}
    </div>
  );
};