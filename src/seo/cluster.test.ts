import { describe, it, expect } from 'vitest';
import { clusters, clusterFor } from '@/data/blogClusters';
import { blogContent } from '@/data/blogContent';
import { servicePages } from '@/data/servicePages';

describe('workbook topic routing', () => {
  it('links every pillar to all its supporting pages', () => {
    for (const cluster of clusters) expect(clusterFor(cluster.pillar)?.links).toEqual(cluster.spokes);
  });
  it('links every supporting page back to its own pillar', () => {
    for (const cluster of clusters) for (const spoke of cluster.spokes) expect(clusterFor(spoke)?.links[0]).toBe(cluster.pillar);
  });
  it('uses existing destinations and assigns one cluster per supporting page', () => {
    const paths = new Set([...Object.keys(blogContent).map(slug => '/blog/' + slug), ...servicePages.map(page => '/services/' + page.slug)]);
    const assigned = new Set<string>();
    for (const cluster of clusters) {
      expect(paths.has(cluster.pillar)).toBe(true);
      for (const spoke of cluster.spokes) {
        expect(paths.has(spoke)).toBe(true);
        expect(assigned.has(spoke)).toBe(false);
        assigned.add(spoke);
      }
    }
  });
});