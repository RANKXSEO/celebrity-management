import { createContext } from 'react';
export interface CapturedSEO {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}
export const RenderContext = createContext<((seo: CapturedSEO) => void) | null>(null);