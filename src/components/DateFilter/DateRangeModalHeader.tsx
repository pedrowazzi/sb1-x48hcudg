import React from 'react';
import { Calendar } from 'lucide-react';

export const DateRangeModalHeader: React.FC = () => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
        <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Definir Período
      </h3>
    </div>
  </div>
);