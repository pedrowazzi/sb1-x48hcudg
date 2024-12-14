import { useCallback, useEffect, useRef } from 'react';
import { DateRange } from '../types/metrics';
import { MetricsService } from '../services/metrics/MetricsService';
import { useMetricsState } from './useMetricsState';
import { MetricsError } from '../services/metrics/MetricsError';

export const useMetaInsights = (dateRange: DateRange) => {
  const { state, setLoading, setData, setError } = useMetricsState();
  const fetchingRef = useRef(false);

  const fetchInsights = useCallback(async () => {
    if (fetchingRef.current || !dateRange?.startDate || !dateRange?.endDate) {
      return;
    }

    try {
      fetchingRef.current = true;
      setLoading(true);
      setError(null);
      
      const data = await MetricsService.fetchInsights(dateRange);
      setData(data);
    } catch (error) {
      let message = 'Ocorreu um erro ao buscar os dados';
      
      if (error instanceof MetricsError) {
        message = error.message;
      }
      
      setError(message);
      console.error('Meta Insights Error:', error);
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }, [dateRange, setData, setError, setLoading]);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      if (!mounted) return;
      await fetchInsights();
    };

    fetchData();
    return () => { 
      mounted = false;
      fetchingRef.current = false;
    };
  }, [fetchInsights]);

  return state;
};