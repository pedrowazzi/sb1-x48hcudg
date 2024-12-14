import React from 'react';
import { AdMetric } from '../types/metrics';
import { METRIC_DEFINITIONS } from '../constants/metricDefinitions';

interface CampaignTableProps {
  campaigns: AdMetric[];
}

export const CampaignTable: React.FC<CampaignTableProps> = ({ campaigns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-50 text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6 text-left">Campanha</th>
            <th className="py-3 px-6 text-right">{METRIC_DEFINITIONS.pageViews.label}</th>
            <th className="py-3 px-6 text-right">{METRIC_DEFINITIONS.cartAdds.label}</th>
            <th className="py-3 px-6 text-right">{METRIC_DEFINITIONS.purchases.label}</th>
            <th className="py-3 px-6 text-right">{METRIC_DEFINITIONS.spend.label}</th>
            <th className="py-3 px-6 text-right">{METRIC_DEFINITIONS.purchaseValue.label}</th>
            <th className="py-3 px-6 text-right">{METRIC_DEFINITIONS.roas.label}</th>
            <th className="py-3 px-6 text-right">{METRIC_DEFINITIONS.averageTicket.label}</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 text-left">{campaign.campaignName}</td>
              <td className="py-3 px-6 text-right">{METRIC_DEFINITIONS.pageViews.format(campaign.pageViews)}</td>
              <td className="py-3 px-6 text-right">{METRIC_DEFINITIONS.cartAdds.format(campaign.cartAdds)}</td>
              <td className="py-3 px-6 text-right">{METRIC_DEFINITIONS.purchases.format(campaign.purchases)}</td>
              <td className="py-3 px-6 text-right">{METRIC_DEFINITIONS.spend.format(campaign.spend)}</td>
              <td className="py-3 px-6 text-right">{METRIC_DEFINITIONS.purchaseValue.format(campaign.purchaseValue)}</td>
              <td className="py-3 px-6 text-right">{METRIC_DEFINITIONS.roas.format(campaign.roas)}</td>
              <td className="py-3 px-6 text-right">{METRIC_DEFINITIONS.averageTicket.format(campaign.averageTicket)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};