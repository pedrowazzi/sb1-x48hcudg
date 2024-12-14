import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { MetricsSection } from './components/Dashboard/MetricsSection';
import { useMetaInsights } from './hooks/useMetaInsights';
import { DateRange } from './types/metrics';
import { ThemeProvider } from './contexts/ThemeContext';
import { DateRangeService } from './services/dateRangeService';

export default function App() {
  const [dateRange, setDateRange] = useState<DateRange>(
    DateRangeService.getYesterdayRange()
  );
  
  const { data: metrics, loading, error } = useMetaInsights(dateRange);

  const handleDateRangeChange = (newRange: DateRange) => {
    if (!newRange?.startDate || !newRange?.endDate) {
      setDateRange(DateRangeService.getYesterdayRange());
      return;
    }
    setDateRange(DateRangeService.normalizeRange(newRange));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Header />
        <main className="flex-grow px-4 py-6">
          <MetricsSection
            dateRange={dateRange}
            metrics={metrics}
            loading={loading}
            error={error}
            onDateRangeChange={handleDateRangeChange}
          />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}