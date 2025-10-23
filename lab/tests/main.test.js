const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(
  path.join(__dirname, '../student-files/styles/main.css'),
  'utf8'
);

// Extract key rules
const navLinksARule = css.match(/\.nav-links\s+a\s*\{([\s\S]*?)\}/)?.[1] || '';
const navLinksAHoverRule = css.match(/\.nav-links\s+a:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
const navLinksAActiveRule = css.match(/\.nav-links\s+a\.active\s*\{([\s\S]*?)\}/)?.[1] || '';
const btnPrimaryHoverRule = css.match(/\.btn-primary:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
const btnSecondaryRule = css.match(/\.btn-secondary\s*\{([\s\S]*?)\}/)?.[1] || '';
const countUpWrongRule = css.match(/@keyframes\s+countUpWrong\s*\{([\s\S]*?)\}/)?.[1] || '';

describe('Main Stylesheet: Navigation and Button Fixes', () => {
  test('should have navigation link transition', () => {
    expect(navLinksARule).toMatch(/transition\s*:/);
  });

  test('should have navigation link hover transform', () => {
    expect(navLinksAHoverRule).toMatch(/transform:\s*translateY\(-[2-5]px\)/);
    expect(navLinksAHoverRule).not.toMatch(/transform:.*scale\(/);
  });

  test('should have navigation link active transform', () => {
    expect(navLinksAActiveRule).toMatch(/transform:\s*translateY\(-[2-5]px\)/);
    expect(navLinksAActiveRule).not.toMatch(/transform:.*scale\(/);
  });

  test('should have readable primary button hover text', () => {
    expect(btnPrimaryHoverRule).not.toMatch(/color:\s*#e67e22/);
    expect(btnPrimaryHoverRule).toMatch(/color:\s*#ffffff/i);
  });

  test('should have secondary button transition', () => {
    expect(btnSecondaryRule).toMatch(/transition\s*:/);
  });

  test('should not have incorrect countUpWrong animation', () => {
    expect(countUpWrongRule).toBe('');
  });
});