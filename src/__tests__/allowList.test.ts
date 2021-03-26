import { getDomains } from '../allowList';

// Parse the allowlist to just a list of domains
const domains = getDomains();

describe('Each link is secure', () => {
  it('all should start with https://', async () => {
    domains.forEach((domain) => {
      expect(domain).toMatch(/^https:\/\//);
    });
  });
  it('all should end with a trailing slash', async () => {
    domains.forEach((domain) => {
      expect(domain).toMatch(/.*\/$/);
    });
  });
});
