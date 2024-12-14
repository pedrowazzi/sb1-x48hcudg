import React, { useState } from 'react';
import { MetricInfo } from '../types/metrics';

interface MetricCardProps {
  metricKey: string;
  value: number;
  icon: React.ReactNode;
  metricInfo: MetricInfo;
  trend?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  metricKey, 
  value, 
  icon, 
  metricInfo,
  trend 
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative bg-white rounded-xl p-6 shadow-sm">
      <div 
        className="flex items-center justify-between mb-4"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="text-gray-500 text-sm font-medium">{metricInfo.label}</span>
        <span className="text-gray-600">{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-gray-800">
          {metricInfo.format(value)}
        </span>
        {trend !== undefined && (
          <span className={`text-sm font-medium ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      
      {showTooltip && (
        <div className="absolute z-10 w-64 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-lg -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
          {metricInfo.description}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
        </div>
      )}
    </div>
  );
};