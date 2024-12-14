import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricIconProps {
  Icon: LucideIcon;
  variant?: 'default' | 'success';
}

export const MetricIcon: React.FC<MetricIconProps> = ({ 
  Icon, 
  variant = 'default' 
}) => {
  const iconColor = variant === 'success' 
    ? 'text-green-700 dark:text-green-400' 
    : 'text-gray-600 dark:text-gray-400';

  return <Icon className={`h-5 w-5 ${iconColor}`} />;
};