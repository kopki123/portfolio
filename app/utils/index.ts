type DateInput = Date | string | number;

type FormatDateOptions = {
  locale?: string;           // e.g. 'zh-TW', 'en-US'
  timeZone?: string;         // e.g. 'Asia/Taipei'
  options?: Intl.DateTimeFormatOptions;
  fallback?: string;
};

export function formatDate(input: DateInput, config: FormatDateOptions = {}) {
  const {
    locale = 'zh-TW',
    timeZone = 'Asia/Taipei',
    options,
    fallback = '',
  } = config;

  const date = input instanceof Date ? input : new Date(input);

  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    ...options,
  });

  return formatter.format(date);
}
