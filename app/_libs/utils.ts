import { formatInTimeZone } from 'date-fns-tz';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

export const formatDate = (date: string) => {
  return formatInTimeZone(new Date(date), 'Asia/Tokyo', 'yyyy/MM/dd');
};

export const formatRichText = (richText: string) => {
  const $ = load(richText, null, false);
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = lang
      ? hljs.highlight($(elm).text(), { language: lang?.replace(/^language-/, '') || '' })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(res.value);
  });
  return $.html();
};
