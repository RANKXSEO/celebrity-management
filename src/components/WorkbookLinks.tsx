import { Link, useLocation } from 'react-router-dom';
import mapping from '@/seo/workbookLinks.json';
import { servicePages } from '@/data/servicePages';
import { solutionPages } from '@/data/solutionPages';
import { blogContent } from '@/data/blogContent';

const labels: Record<string, string> = { '/': 'Celebrity and personal reputation management', '/free-consultation': 'Confidential reputation audit', '/about/case-studies': 'Our approach and case evidence', '/wikipedia-policy': 'Wikipedia paid-editing disclosure policy' };
export default function WorkbookLinks() {
  const { pathname } = useLocation();
  const forward = (mapping as Record<string, string[]>)[pathname] ?? [];
  const reverse = Object.entries(mapping).filter(([, destinations]) => destinations.includes(pathname)).map(([source]) => source);
  const targets = [...new Set([...forward, ...reverse])];
  const valid = targets.filter(to => to !== pathname && (labels[to] || servicePages.some(p => to === '/services/' + p.slug) || solutionPages.some(p => to === '/solutions/' + p.slug) || blogContent[to.replace('/blog/', '')]));
  if (!valid.length) return null;
  return <nav aria-label="Related topic guides" className="max-w-4xl mx-auto px-6 py-10 border-t border-border"><h2 className="font-display text-2xl mb-4">Related guidance</h2><ul className="grid sm:grid-cols-2 gap-3">{valid.map(to => {
    const label = labels[to] ?? servicePages.find(p => to === '/services/' + p.slug)?.h1 ?? solutionPages.find(p => to === '/solutions/' + p.slug)?.h1 ?? to.split('/').pop()?.replace(/-/g, ' ');
    return <li key={to}><Link to={to} className="text-gold hover:underline">{label}</Link></li>;
  })}</ul></nav>;
}