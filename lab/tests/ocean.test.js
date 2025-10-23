// const fs = require('fs');
// const path = require('path');

// const css = fs.readFileSync(
//   path.join(__dirname, '../student-files/styles/ocean.css'),
//   'utf8'
// );

// // Extract key rules
// const waveRule = css.match(/\.wave\s*\{([\s\S]*?)\}/)?.[1] || '';
// const wave2Rule = css.match(/\.wave-2\s*\{([\s\S]*?)\}/)?.[1] || '';
// const wave3Rule = css.match(/\.wave-3\s*\{([\s\S]*?)\}/)?.[1] || '';
// const heroOceanH1Rule = css.match(/\.hero-ocean\s+h1\s*\{([\s\S]*?)\}/)?.[1] || '';
// const oceanDescriptionRule = css.match(/\.ocean-description\s*\{([\s\S]*?)\}/)?.[1] || '';
// const marineLifeH2Rule = css.match(/\.marine-life\s+h2\s*\{([\s\S]*?)\}/)?.[1] || '';
// const fishRule = css.match(/\.fish\s*\{([\s\S]*?)\}/)?.[1] || '';
// const fish1Rule = css.match(/\.fish-1\s*\{([\s\S]*?)\}/)?.[1] || '';
// const fish2Rule = css.match(/\.fish-2\s*\{([\s\S]*?)\}/)?.[1] || '';
// const coralRule = css.match(/\.coral\s*\{([\s\S]*?)\}/)?.[1] || '';
// const seaweedRule = css.match(/\.seaweed\s*\{([\s\S]*?)\}/)?.[1] || '';
// const speciesShowcaseH2Rule = css.match(/\.species-showcase\s+h2\s*\{([\s\S]*?)\}/)?.[1] || '';
// const speciesGridRule = css.match(/\.species-grid\s*\{([\s\S]*?)\}/)?.[1] || '';
// const speciesCardRule = css.match(/\.species-card\s*\{([\s\S]*?)\}/)?.[1] || '';
// const speciesCardHoverRule = css.match(/\.species-card:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
// const speciesImageImgRule = css.match(/\.species-image\s+img\s*\{([\s\S]*?)\}/)?.[1] || '';
// const speciesImageImgHoverRule = css.match(/\.species-card:hover\s+\.species-image\s+img\s*\{([\s\S]*?)\}/)?.[1] || '';
// const statsOceanH2Rule = css.match(/\.stats-ocean-container\s+h2\s*\{([\s\S]*?)\}/)?.[1] || '';
// const oceanImpactGridRule = css.match(/\.ocean-impact-grid\s*\{([\s\S]*?)\}/)?.[1] || '';
// const oceanStatRule = css.match(/\.ocean-stat\s*\{([\s\S]*?)\}/)?.[1] || '';
// const statBubbleRule = css.match(/\.stat-bubble\s*\{([\s\S]*?)\}/)?.[1] || '';
// const statBubbleHoverRule = css.match(/\.stat-bubble:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
// const oceanNumberRule = css.match(/\.ocean-number\s*\{([\s\S]*?)\}/)?.[1] || '';
// const mediaSpeciesGridRule = css.match(/@media\s*\(max-width:\s*768px\)\s*\{[\s\S]*?\.species-grid\s*\{([\s\S]*?)\}/)?.[1] || '';
// const mediaOceanImpactGridRule = css.match(/@media\s*\(max-width:\s*768px\)\s*\{[\s\S]*?\.ocean-impact-grid\s*\{([\s\S]*?)\}/)?.[1] || '';
// const mediaStatBubbleRule = css.match(/@media\s*\(max-width:\s*768px\)\s*\{[\s\S]*?\.stat-bubble\s*\{([\s\S]*?)\}/)?.[1] || '';
// const mediaOceanNumberRule = css.match(/@media\s*\(max-width:\s*768px\)\s*\{[\s\S]*?\.ocean-number\s*\{([\s\S]*?)\}/)?.[1] || '';
// const waveKeyframes = css.match(/@keyframes\s+wave\s*\{([\s\S]*?)\}/)?.[1] || '';
// const swimRightKeyframes = css.match(/@keyframes\s+swimRight\s*\{([\s\S]*?)\}/)?.[1] || '';
// const swimLeftKeyframes = css.match(/@keyframes\s+swimLeft\s*\{([\s\S]*?)\}/)?.[1] || '';
// const swayKeyframes = css.match(/@keyframes\s+sway\s*\{([\s\S]*?)\}/)?.[1] || '';
// const fadeInUpKeyframes = css.match(/@keyframes\s+fadeInUp\s*\{([\s\S]*?)\}/)?.[1] || '';

// describe('Ocean Page Styles: Animation and Responsive Fixes', () => {
//   test('should have wave animation', () => {
//     expect(waveRule).toMatch(/animation:\s*wave\s+/);
//     expect(wave2Rule).toMatch(/animation:\s*wave\s+/);
//     expect(wave3Rule).toMatch(/animation:\s*wave\s+/);
//     expect(waveKeyframes).toMatch(/from\s*\{[\s\S]*transform:\s*translateX\(/);
//   });

//   test('should have fadeInUp animation for hero h1', () => {
//     expect(heroOceanH1Rule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have fadeInUp animation for ocean description', () => {
//     expect(oceanDescriptionRule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have fadeInUp animation for marine life h2', () => {
//     expect(marineLifeH2Rule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have fish animations', () => {
//     expect(fish1Rule).toMatch(/animation:.*swimRight\s+/);
//     expect(fish2Rule).toMatch(/animation:.*swimLeft\s+/);
//     expect(swimRightKeyframes).toMatch(/from\s*\{[\s\S]*left:\s*0/);
//     expect(swimLeftKeyframes).toMatch(/from\s*\{[\s\S]*left:\s*100%/);
//   });

//   test('should have coral and seaweed sway animation', () => {
//     expect(coralRule).toMatch(/animation:\s*sway\s+/);
//     expect(seaweedRule).toMatch(/animation:\s*sway\s+/);
//     expect(swayKeyframes).toMatch(/transform:\s*rotateZ\(/);
//   });

//   test('should have fadeInUp animation for species showcase h2', () => {
//     expect(speciesShowcaseH2Rule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have fixed species grid layout', () => {
//     expect(speciesGridRule).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(250px,\s*1fr\)\)/);
//     expect(mediaSpeciesGridRule).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(200px,\s*1fr\)\)/);
//   });

//   test('should have species card transition and animation', () => {
//     expect(speciesCardRule).toMatch(/transition\s*:/);
//     expect(speciesCardRule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have controlled species card hover', () => {
//     expect(speciesCardHoverRule).not.toMatch(/opacity:\s*0/);
//     expect(speciesCardHoverRule).toMatch(/opacity:\s*1/);
//   });

//   test('should have species image transition and controlled hover', () => {
//     expect(speciesImageImgRule).toMatch(/transition\s*:/);
//     expect(speciesImageImgHoverRule).toMatch(/transform:\s*scale\((1\.0[5-9]|1\.[1-2])\)/);
//   });

//   test('should have fadeInUp animation for stats h2', () => {
//     expect(statsOceanH2Rule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have fixed ocean impact grid layout', () => {
//     expect(oceanImpactGridRule).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(200px,\s*1fr\)\)/);
//     expect(mediaOceanImpactGridRule).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(150px,\s*1fr\)\)/);
//   });

//   test('should have fadeInUp animation for ocean stats', () => {
//     expect(oceanStatRule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have stat bubble transition and controlled hover', () => {
//     expect(statBubbleRule).toMatch(/transition\s*:/);
//     expect(statBubbleHoverRule).toMatch(/transform:\s*scale\((1\.0[5-9]|1\.[1-2])\)/);
//   });

//   test('should have fadeInUp animation for ocean number', () => {
//     expect(oceanNumberRule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have readable stat bubble and number on mobile', () => {
//     expect(mediaStatBubbleRule).toMatch(/width:\s*100px/);
//     expect(mediaOceanNumberRule).toMatch(/font-size:\s*1\.5rem/);
//   });

//   test('should have fadeInUp keyframes defined', () => {
//     expect(fadeInUpKeyframes).toMatch(/from\s*\{[\s\S]*transform:\s*translateY\(/);
//   });
// });