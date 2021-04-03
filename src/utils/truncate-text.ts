const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;

  const truncated = text.substr(0, maxLength);
  return truncated.substr(0, truncated.lastIndexOf(' ')) + '...';
};

export default truncateText;
