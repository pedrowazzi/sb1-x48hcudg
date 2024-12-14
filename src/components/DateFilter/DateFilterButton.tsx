import React from 'react';

interface DateFilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const DateFilterButton: React.FC<DateFilterButtonProps> = ({
  label,
  isSelected,
  onClick
}) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-lg text-sm font-medium
      transition-all duration-200 ease-in-out whitespace-nowrap
      ${isSelected
        ? 'bg-blue-600 text-white dark:bg-blue-500 transform scale-105'
        : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
      }
      shadow-sm hover:shadow-md
      active:transform active:scale-95
    `}
  >
    {label}
  </button>
);