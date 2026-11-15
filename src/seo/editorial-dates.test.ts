import { describe, expect, it } from 'vitest';
import { blogContent } from '../data/blogContent';

describe('page-specific editorial dates', () => {
  it('records the actual November 15 revision on the priority guides', () => {
    for (const slug of [
      'how-long-suppress-negative-google',
      'does-reputation-management-work',
      'celebrity-reputation-management-cost',
      'how-to-get-wikipedia-page',
      'wikipedia-notability-explained',
      'what-chatgpt-says-about-you',
      'generative-engine-optimization-guide',
      'ai-reputation-management',
      'ripoff-report-removal',
      'glassdoor-review-removal',
      'yelp-review-removal',
      'remove-negative-google-reviews',
    ]) {
      expect(blogContent[slug]?.updated, slug).toBe('2026-11-15');
    }
    expect(blogContent['first-48-hours-celebrity-crisis']?.updated).toBeUndefined();
  });
});