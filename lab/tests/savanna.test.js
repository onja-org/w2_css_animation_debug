const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(
  path.join(__dirname, '../student-files/styles/savanna.css'),
  'utf8'
);

// Extract key rules
const heroSavannaBeforeRule = css.match(/\.hero-savanna::before\s*\{([\s\S]*?)\}/)?.[1] || '';
const heroSavannaH1Rule = css.match(/\.hero-savanna\s+h1\s*\{([\s\S]*?)\}/)?.[1] || '';
const savannaDescriptionRule = css.match(/\.savanna-description\s*\{([\s\S]*?)\}/)?.[1] || '';
const wildlifeGridH2Rule = css.match(/\.wildlife-grid\s+h2\s*\{([\s\S]*?)\}/)?.[1] || '';
const wildlifeContainerRule = css.match(/\.wildlife-container\s*\{([\s\S]*?)\}/)?.[1] || '';
const animalsContainerMissingRule = css.match(/\.animals-container-missing\s*\{([\s\S]*?)\}/)?.[1] || '';
const animalCardRule = css.match(/\.animal-card\s*\{([\s\S]*?)\}/)?.[1] || '';
const animalCardHoverRule = css.match(/\.animal-card:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
const animalCardImgRule = css.match(/\.animal-card\s+img\s*\{([\s\S]*?)\}/)?.[1] || '';
const animalCardImgHoverRule = css.match(/\.animal-card:hover\s+img\s*\{([\s\S]*?)\}/)?.[1] || '';
const statusEndangeredRule = css.match(/\.status\.endangered\s*\{([\s\S]*?)\}/)?.[1] || '';
const statusCriticallyEndangeredRule = css.match(/\.status\.critically-endangered\s*\{([\s\S]*?)\}/)?.[1] || '';
const statusVulnerableRule = css.match(/\.status\.vulnerable\s*\{([\s\S]*?)\}/)?.[1] || '';
const statusStableRule = css.match(/\.status\.stable\s*\{([\s\S]*?)\}/)?.[1] || '';
const animalInfoPRule = css.match(/\.animal-info\s+p\s*\{([\s\S]*?)\}/)?.[1] || '';
const learnMoreRule = css.match(/\.learn-more\s*\{([\s\S]*?)\}/)?.[1] || '';
const learnMoreHoverRule = css.match(/\.learn-more:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
const conservationImpactH2Rule = css.match(/\.conservation-impact\s+h2\s*\{([\s\S]*?)\}/)?.[1] || '';
const impactGridRule = css.match(/\.impact-grid\s*\{([\s\S]*?)\}/)?.[1] || '';
const impactStatRule = css.match(/\.impact-stat\s*\{([\s\S]*?)\}/)?.[1] || '';
const impactStatHoverRule = css.match(/\.impact-stat:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
const statValueRule = css.match(/\.stat-value\s*\{([\s\S]*?)\}/)?.[1] || '';
const mediaWildlifeContainerRule = css.match(/@media\s*\(max-width:\s*768px\)\s*\{[\s\S]*?\.wildlife-container\s*\{([\s\S]*?)\}/)?.[1] || '';
const mediaImpactGridRule = css.match(/@media\s*\(max-width:\s*768px\)\s*\{[\s\S]*?\.impact-grid\s*\{([\s\S]*?)\}/)?.[1] || '';
const driftKeyframes = css.match(/@keyframes\s+drift\s*\{([\s\S]*?)\}/)?.[1] || '';
const fadeInUpKeyframes = css.match(/@keyframes\s+fadeInUp\s*\{([\s\S]*?)\}/)?.[1] || '';

describe('Savanna Page Styles: Animation and Layout Fixes', () => {
  test('should have drift animation for hero background', () => {
    expect(heroSavannaBeforeRule).toMatch(/animation:\s*drift\s+/);
    expect(driftKeyframes).toMatch(/from\s*\{[\s\S]*background-position:/);
  });

  test('should have fadeInUp animation for hero h1', () => {
    expect(heroSavannaH1Rule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have fadeInUp animation for savanna description', () => {
    expect(savannaDescriptionRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have readable color for wildlife grid h2', () => {
    expect(wildlifeGridH2Rule).not.toMatch(/color:\s*#f8f9fa/);
    expect(wildlifeGridH2Rule).toMatch(/color:\s*#8b4513/);
  });

  test('should have wildlife-container instead of animals-container-missing', () => {
    expect(wildlifeContainerRule).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(250px,\s*1fr\)\)/);
    expect(animalsContainerMissingRule).toBe('');
  });

  test('should have flexible width for animal card', () => {
    expect(animalCardRule).not.toMatch(/width:\s*200px/);
    expect(animalCardRule).toMatch(/transition\s*:/);
  });

  test('should have controlled animal card hover', () => {
    expect(animalCardHoverRule).toMatch(/transform:\s*translateY\(-10px\)/);
    expect(animalCardHoverRule).not.toMatch(/translateX|rotate|scale/);
  });

  test('should have image transition and controlled hover', () => {
    expect(animalCardImgRule).toMatch(/transition\s*:/);
    expect(animalCardImgHoverRule).toMatch(/transform:\s*scale\(1\.1\)/);
  });

  test('should have readable status badge colors', () => {
    expect(statusEndangeredRule).toMatch(/color:\s*(?!white)/);
    expect(statusCriticallyEndangeredRule).toMatch(/color:\s*(?!#f8f9fa)/);
    expect(statusVulnerableRule).toMatch(/color:\s*(?!yellow)/);
    expect(statusStableRule).toMatch(/color:\s*(?!blue)/);
  });

  test('should have readable animal info text', () => {
    expect(animalInfoPRule).toMatch(/color:\s*#666/);
  });

  test('should have learn more transition and readable hover', () => {
    expect(learnMoreRule).toMatch(/transition\s*:/);
    expect(learnMoreHoverRule).toMatch(/color:\s*#a0522d/);
  });

  test('should have fadeInUp animation for conservation impact h2', () => {
    expect(conservationImpactH2Rule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have responsive impact grid', () => {
    expect(impactGridRule).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(200px,\s*1fr\)\)/);
    expect(mediaImpactGridRule).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(150px,\s*1fr\)\)/);
  });

  test('should have fadeInUp animation for impact stats', () => {
    expect(impactStatRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have controlled impact stat hover', () => {
    expect(impactStatHoverRule).toMatch(/transform:\s*scale\(1\.05\)/);
  });

  test('should have fadeInUp animation for stat value', () => {
    expect(statValueRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have responsive wildlife container on mobile', () => {
    expect(mediaWildlifeContainerRule).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(200px,\s*1fr\)\)/);
  });

  test('should have drift and fadeInUp keyframes defined', () => {
    expect(driftKeyframes).toMatch(/from\s*\{[\s\S]*background-position:/);
    expect(fadeInUpKeyframes).toMatch(/from\s*\{[\s\S]*transform:\s*translateY\(/);
  });
});