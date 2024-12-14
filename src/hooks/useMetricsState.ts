import { useState, useCallback } from 'react';
import { MetricsResponse } from '../types/metrics';

const INITIAL_METRICS: MetricsResponse = {
  totalSpend: 0,
  totalPageViews: 0,
  totalCartAdds: 0,
  totalCheckoutStarts: 0,
  totalPurchases: 0,
  totalPurchaseValue: 0,
  averageOrderValue: 0,
  roas: 0
};

interface MetricsState {
  data: MetricsResponse;
  loading: boolean;
  error: string | null;
}

export const useMetricsState = () => {
  const [state, setState] = useState<MetricsState>({
    data: INITIAL_METRICS,
    loading: false,
    error: null
  });

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, loading, error: null }));
  }, []);

  const setData = useCallback((data: MetricsResponse) => {
    setState({ data, loading: false, error: null });
  }, []);

  const setError = useCallback((error: string) => {
    setState(prev => ({ ...prev, error, loading: false }));
  }, []);

  return {
    state,
    setLoading,
    setData,
    setError
  };
};