const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(
  path.join(__dirname, '../student-files/styles/cave.css'),
  'utf8'
);

// Extract base .cave-theme rule
const caveThemeRule = css.match(/\.cave-theme(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
// Extract navigation rules
const navRule = css.match(/\.cave-theme\s+\.main-nav(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
const navLinksRule = css.match(/\.cave-theme\s+\.nav-links\s+a(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
const navLinksHoverRule = css.match(/\.cave-theme\s+\.nav-links\s+a(?::hover,?\s*a:active|\.active,\s*a:hover|\.active|\:hover)(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
// Extract hero section rules
const caveTitleRule = css.match(/\.cave-title(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
const caveDescriptionRule = css.match(/\.cave-description(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
// Extract stalactite and light beam rules
const stalactiteRule = css.match(/\.stalactite(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
const lightBeamRule = css.match(/\.light-beam(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
// Extract cave zone rules
const caveZoneRule = css.match(/\.cave-zone(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
const caveZoneHoverRule = css.match(/\.cave-zone:hover(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
// Extract bat rules
const batRule = css.match(/\.bat(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
// Extract info card rules
const infoCardRule = css.match(/\.info-card(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
const infoCardHoverRule = css.match(/\.info-card:hover(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
// Extract effort card rules
const effortCardRule = css.match(/\.effort-card(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
const effortCardHoverRule = css.match(/\.effort-card:hover(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
const effortIconRule = css.match(/\.effort-icon(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
// Extract footer rule
const footerRule = css.match(/\.cave-footer(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';

describe('Cave Page: Contrast and Animation Fixes', () => {
  test('should have readable text color in .cave-theme', () => {
    expect(caveThemeRule).not.toMatch(/color:\s*#1a1a1a/);
    expect(caveThemeRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable logo color in .main-nav .logo h2', () => {
    const logoRule = css.match(/\.cave-theme\s+\.main-nav\s+\.logo\s+h2(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(logoRule).not.toMatch(/color:\s*#2d2d2d/);
    expect(logoRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable nav links color', () => {
    expect(navLinksRule).not.toMatch(/color:\s*#333333/);
    expect(navLinksRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable hover/active nav links color', () => {
    expect(navLinksHoverRule).not.toMatch(/color:\s*#1a1a1a/);
    expect(navLinksHoverRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable cave title color', () => {
    expect(caveTitleRule).not.toMatch(/color:\s*#0d0d0d/);
    expect(caveTitleRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
    expect(caveTitleRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have readable cave description color and animation', () => {
    expect(caveDescriptionRule).not.toMatch(/color:\s*#262626/);
    expect(caveDescriptionRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
    expect(caveDescriptionRule).toMatch(/animation:\s*fadeInUp\s+/);
  });

  test('should have readable inline stats color', () => {
    const inlineStatRule = css.match(/\.inline-stat(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(inlineStatRule).not.toMatch(/color:\s*rgba\(\s*0,\s*0,\s*0,\s*0\.8\)/);
    expect(inlineStatRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should use correct stalactite animation name', () => {
    expect(stalactiteRule).not.toMatch(/animation:\s*rockDrip/);
    expect(stalactiteRule).toMatch(/animation:\s*drip\s+/);
  });

  test('should use correct light beam animation name', () => {
    expect(lightBeamRule).not.toMatch(/animation:\s*lightFlash/);
    expect(lightBeamRule).toMatch(/animation:\s*flicker\s+/);
  });

  test('should have readable zone header color', () => {
    const zoneHeaderRule = css.match(/\.zone-header\s+h3(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(zoneHeaderRule).not.toMatch(/color:\s*#262626/);
    expect(zoneHeaderRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable zone light color', () => {
    const zoneLightRule = css.match(/\.zone-light(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(zoneLightRule).not.toMatch(/color:\s*#333333/);
    expect(zoneLightRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable zone content color', () => {
    const zoneContentRule = css.match(/\.zone-content\s+p(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(zoneContentRule).not.toMatch(/color:\s*#2d2d2d/);
    expect(zoneContentRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable species labels color', () => {
    const speciesRule = css.match(/\.species(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(speciesRule).not.toMatch(/color:\s*#404040/);
    expect(speciesRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should use correct cave zone animation and transition', () => {
    expect(caveZoneRule).not.toMatch(/animation:\s*zoneReveal/);
    expect(caveZoneRule).toMatch(/animation:\s*fadeInUp\s+/);
    expect(caveZoneRule).toMatch(/transition\s*:/);
  });

  test('should have brighter cave zone hover background', () => {
    expect(caveZoneHoverRule).not.toMatch(/background:\s*rgba\(\s*0,\s*0,\s*0,\s*0\.3\)/);
    expect(caveZoneHoverRule).toMatch(/background:\s*rgba\(\s*255,\s*255,\s*255,\s*0\.\d+\)/);
  });

  test('should use correct bat animation name', () => {
    expect(batRule).not.toMatch(/animation:\s*batMovement/);
    expect(batRule).toMatch(/animation:\s*batFly\s+/);
  });

  test('should use correct info card animation and transition', () => {
    expect(infoCardRule).not.toMatch(/animation:\s*cardEnter/);
    expect(infoCardRule).toMatch(/animation:\s*fadeInUp\s+/);
    expect(infoCardRule).toMatch(/transition\s*:/);
  });

  test('should have brighter info card hover background', () => {
    expect(infoCardHoverRule).not.toMatch(/background:\s*rgba\(\s*0,\s*0,\s*0,\s*0\.2\)/);
    expect(infoCardHoverRule).toMatch(/background:\s*rgba\(\s*255,\s*255,\s*255,\s*0\.\d+\)/);
  });

  test('should have readable info card title and text color', () => {
    const infoCardTitleRule = css.match(/\.info-card\s+h3(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    const infoCardTextRule = css.match(/\.info-card\s+p(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(infoCardTitleRule).not.toMatch(/color:\s*#333333/);
    expect(infoCardTitleRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
    expect(infoCardTextRule).not.toMatch(/color:\s*#404040/);
    expect(infoCardTextRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable urgency indicator color', () => {
    const urgencyIndicatorRule = css.match(/\.urgency-indicator\.high(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(urgencyIndicatorRule).not.toMatch(/color:\s*#1a1a1a/);
    expect(urgencyIndicatorRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should use correct effort card animation and transition', () => {
    expect(effortCardRule).not.toMatch(/animation:\s*effortShow/);
    expect(effortCardRule).toMatch(/animation:\s*fadeInUp\s+/);
    expect(effortCardRule).toMatch(/transition\s*:/);
  });

  test('should have brighter effort card hover background', () => {
    expect(effortCardHoverRule).not.toMatch(/background:\s*rgba\(\s*0,\s*0,\s*0,\s*0\.3\)/);
    expect(effortCardHoverRule).toMatch(/background:\s*rgba\(\s*255,\s*255,\s*255,\s*0\.\d+\)/);
  });

  test('should use correct effort icon animation', () => {
    expect(effortIconRule).not.toMatch(/animation:\s*iconBounce/);
    expect(effortIconRule).toMatch(/animation:\s*pulse\s+/);
  });

  test('should have readable effort card title and text color', () => {
    const effortCardTitleRule = css.match(/\.effort-card\s+h3(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    const effortCardTextRule = css.match(/\.effort-card\s+p(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(effortCardTitleRule).not.toMatch(/color:\s*#333333/);
    expect(effortCardTitleRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
    expect(effortCardTextRule).not.toMatch(/color:\s*#404040/);
    expect(effortCardTextRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable stat color', () => {
    const statRule = css.match(/\.stat(?![\w:-])\s*\{([\s\S]*?)\}/)?.[1] || '';
    expect(statRule).not.toMatch(/color:\s*#2d2d2d/);
    expect(statRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });

  test('should have readable footer color', () => {
    expect(footerRule).not.toMatch(/color:\s*#1a1a1a/);
    expect(footerRule).toMatch(/color:\s*(#ffffff|rgba\(\s*255,\s*255,\s*255|rgb\(\s*255,\s*255,\s*255)/i);
  });
});