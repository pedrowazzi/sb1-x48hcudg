const MAX_MONTHS_BACK = 37;

export const isValidDateRange = (startDate: Date, endDate: Date): boolean => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Check if dates are valid
  if (start.toString() === 'Invalid Date' || end.toString() === 'Invalid Date') {
    return false;
  }

  // Check if start is before or equal to end
  if (start > end) {
    return false;
  }

  // Check Meta API limitation (37 months)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() - MAX_MONTHS_BACK);
  maxDate.setDate(1);
  maxDate.setHours(0, 0, 0, 0);
  
  if (start < maxDate) {
    return false;
  }

  return true;
};

export const getValidDateRangeError = (startDate: Date, endDate: Date): string | null => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start.toString() === 'Invalid Date' || end.toString() === 'Invalid Date') {
    return 'Data inválida';
  }

  if (start > end) {
    return 'A data inicial deve ser anterior ou igual à data final';
  }

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() - MAX_MONTHS_BACK);
  maxDate.setDate(1);
  maxDate.setHours(0, 0, 0, 0);
  
  if (start < maxDate) {
    const formattedDate = maxDate.toLocaleDateString('pt-BR');
    return `A data inicial não pode ser anterior a ${formattedDate}`;
  }

  return null;
};