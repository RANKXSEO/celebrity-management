import overrides from './pageOverrides.json';

export const BASE_URL = 'https://celebrity-reputation-management.com';
export const INDEX_ROBOTS = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
export function cleanDescription(text: string, limit = 155) {
  const clean = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*+/g, '').replace(/\s+/g, ' ').trim();
  return clean.length <= limit ? clean : clean.slice(0, limit - 1).replace(/\s+\S*$/, '') + '…';
}
export function pageIdentity(path: string, title: string, description: string) {
  const override = (overrides as Record<string, { title: string; description: string }>)[path];
  const shortTitle = title.length > 60 ? title.split(':')[0] : title;
  return { title: override?.title ?? (shortTitle.length <= 60 ? shortTitle : shortTitle.slice(0, 59).replace(/\s+\S*$/, '') + '…'), description: cleanDescription(override?.description ?? description) };
}