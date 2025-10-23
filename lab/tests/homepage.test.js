const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(
  path.join(__dirname, '../student-files/styles/homepage.css'),
  'utf8'
);

// Extract key rules
const heroContentRule = css.match(/\.hero-content\s*\{([\s\S]*?)\}/)?.[1] || '';
const heroImageRule = css.match(/\.hero-image\s+img\s*\{([\s\S]*?)\}/)?.[1] || '';
const heroImageHoverRule = css.match(/\.hero-image\s+img:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
const statCardRule = css.match(/\.stat-card\s*\{([\s\S]*?)\}/)?.[1] || '';
const statNumberRule = css.match(/\.stat-number\s*\{([\s\S]*?)\}/)?.[1] || '';
const habitatPreviewH2Rule = css.match(/\.habitat-preview\s+h2\s*\{([\s\S]*?)\}/)?.[1] || '';
const habitatCardRule = css.match(/\.habitat-card\s*\{([\s\S]*?)\}/)?.[1] || '';
const habitatCardHoverRule = css.match(/\.habitat-card:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
const habitatCardImgRule = css.match(/\.habitat-card\s+img\s*\{([\s\S]*?)\}/)?.[1] || '';
const habitatInfoPRule = css.match(/\.habitat-info\s+p\s*\{([\s\S]*?)\}/)?.[1] || '';

describe('Homepage: Hero, Stats, and Habitat Fixes', () => {
  test('should have hero content animation', () => {
    expect(heroContentRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have hero image transition', () => {
    expect(heroImageRule).toMatch(/transition\s*:/);
  });

  test('should have controlled hero image hover', () => {
    expect(heroImageHoverRule).not.toMatch(/transform:.*rotate\(45deg\)/);
    expect(heroImageHoverRule).toMatch(/transform:\s*scale\((1|1\.[0-2])\)/); // Fixed regex
  });

  test('should have stat card animation', () => {
    expect(statCardRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should use correct stat number animation', () => {
    expect(statNumberRule).not.toMatch(/animation:\s*countUp/);
    expect(statNumberRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have readable habitat preview heading', () => {
    expect(habitatPreviewH2Rule).not.toMatch(/color:\s*#f8f9fa/);
    expect(habitatPreviewH2Rule).toMatch(/color:\s*#2d5016/i);
    expect(habitatPreviewH2Rule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have habitat card animation', () => {
    expect(habitatCardRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have habitat card image transition', () => {
    expect(habitatCardImgRule).toMatch(/transition\s*:/);
  });

  test('should have controlled habitat card hover', () => {
    expect(habitatCardHoverRule).not.toMatch(/transform:.*rotate\(180deg\)/);
    expect(habitatCardHoverRule).toMatch(/transform:\s*translateY\((-5px|-6px|-7px|-8px|-9px|-10px)\)/);
  });

  test('should have readable habitat info text', () => {
    expect(habitatInfoPRule).not.toMatch(/color:\s*#f0f0f0/);
    expect(habitatInfoPRule).toMatch(/color:\s*#666/i);
  });
});