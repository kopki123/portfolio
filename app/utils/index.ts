const zhDateFormatter = new Intl.DateTimeFormat('zh-TW', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  let year: string | undefined;
  let month: string | undefined;
  let day: string | undefined;


  for (const part of zhDateFormatter.formatToParts(date)) {
    if (part.type === 'year') year = part.value;
    else if (part.type === 'month') month = part.value;
    else if (part.type === 'day') day = part.value;
  }

  return year && month && day ? `${year} 年 ${month} 月 ${day} 日` : dateString;
}
