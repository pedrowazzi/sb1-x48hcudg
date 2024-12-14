import { MetricInfo } from '../types/metrics';
import { formatCurrency, formatNumber } from '../utils/formatters';

export const METRIC_DEFINITIONS: Record<string, MetricInfo> = {
  spend: {
    label: 'Valor Usado',
    description: 'Total investido em anúncios no período selecionado.',
    format: formatCurrency
  },
  pageViews: {
    label: 'Visualizações do Cardápio Digital',
    description: 'Número total de vezes que seu cardápio digital foi visualizado através dos anúncios.',
    format: formatNumber
  },
  cartAdds: {
    label: 'Adições ao Carrinho',
    description: 'Número total de produtos adicionados ao carrinho através dos anúncios.',
    format: formatNumber
  },
  checkoutStarts: {
    label: 'Finalizações de Compras Iniciadas',
    description: 'Número de clientes que iniciaram o processo de checkout.',
    format: formatNumber
  },
  purchases: {
    label: 'Compras',
    description: 'Total de compras realizadas através dos anúncios.',
    format: formatNumber
  },
  purchaseValue: {
    label: 'Valor de Conversão da Compra',
    description: 'Valor total das vendas realizadas através dos anúncios.',
    format: formatCurrency
  },
  roas: {
    label: 'ROAS',
    description: 'Retorno sobre o Investimento em Publicidade (Valor das vendas / Valor investido).',
    format: (value: number) => `${value.toFixed(2)}x`
  },
  averageOrderValue: {
    label: 'Ticket Médio',
    description: 'Valor médio gasto por cliente em cada compra.',
    format: formatCurrency
  }
};