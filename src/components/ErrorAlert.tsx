import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => (
  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg relative mb-8">
    <div className="flex items-center">
      <AlertCircle className="h-5 w-5 mr-2" />
      <span className="block sm:inline">{message}</span>
    </div>
  </div>
);