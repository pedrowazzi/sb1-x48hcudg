import React from 'react';
import { InvolvedLogo } from './InvolvedLogo';

export const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-gray-900 py-4 sm:py-6 mt-auto border-t border-gray-100 dark:border-gray-800">
    <div className="w-full px-3 sm:px-4 lg:px-6">
      <div className="flex flex-col items-center space-y-3">
        <InvolvedLogo />
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
          Sistema produzido por Involved Ads ~ Direitos Reservados
        </p>
      </div>
    </div>
  </footer>
);