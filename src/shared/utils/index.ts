export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('ru-RU');
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
