import React, { useState } from 'react';
import { MetricInfo } from '../../types/metrics';
import { MetricLabel } from '../metrics/MetricLabel';
import { MetricValue } from '../metrics/MetricValue';
import { MetricDescription } from '../metrics/MetricDescription';
import { MetricContainer } from '../metrics/MetricContainer';
import { MetricIcon } from '../metrics/MetricIcon';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  metricKey: string;
  value: number;
  icon: LucideIcon;
  metricInfo: MetricInfo;
  loading?: boolean;
  variant?: 'default' | 'success';
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  metricKey, 
  value, 
  icon: Icon,
  metricInfo,
  loading = false,
  variant = 'default'
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <MetricContainer variant={variant}>
      <div 
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MetricLabel 
          label={metricInfo.label} 
          icon={<MetricIcon Icon={Icon} variant={variant} />}
          variant={variant} 
        />
        <MetricValue 
          value={value} 
          formatter={metricInfo.format} 
          loading={loading} 
        />
        <MetricDescription 
          description={metricInfo.description} 
          show={showTooltip} 
        />
      </div>
    </MetricContainer>
  );
};