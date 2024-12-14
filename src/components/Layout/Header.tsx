import React from 'react';
import { BarChart3 } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export const Header: React.FC = () => (
  <header className="bg-white dark:bg-gray-900 shadow-sm">
    <div className="w-full px-3 sm:px-4 lg:px-6">
      <div className="flex justify-between items-center py-3 sm:py-4">
        <div className="flex items-center">
          <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="ml-2 text-base sm:text-xl font-bold text-gray-900 dark:text-white truncate">
            Relatório - Tio do Pastel
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </div>
  </header>
);