// const fs = require('fs');
// const path = require('path');

// const css = fs.readFileSync(
//   path.join(__dirname, '../student-files/styles/contact.css'),
//   'utf8'
// );

// // Extract key rules
// const heroTitleRule = css.match(/\.hero-contact\s+h1\s*\{([\s\S]*?)\}/)?.[1] || '';
// const formInputFocusRule = css.match(/\.form-group\s+(input|select|textarea):focus\s*\{([\s\S]*?)\}/)?.[2] || '';
// const checkboxLabelRule = css.match(/\.checkbox-label\s*\{([\s\S]*?)\}/)?.[1] || '';
// const checkmarkCheckedRule = css.match(/\.checkbox-label\s+input\[type="checkbox"\]:checked\s+\+\s+\.checkmark\s*\{([\s\S]*?)\}/)?.[1] || '';
// const btnSubmitRule = css.match(/\.btn-submit\s*\{([\s\S]*?)\}/)?.[1] || '';
// const btnSubmitHoverRule = css.match(/\.btn-submit:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
// const btnResetHoverRule = css.match(/\.btn-reset:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
// const errorMessageRule = css.match(/\.error-message\s*\{([\s\S]*?)\}/)?.[1] || '';
// const tableRowHoverRule = css.match(/\.conservation-table\s+tbody\s+tr:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
// const statusCriticalRule = css.match(/\.status\.critical\s*\{([\s\S]*?)\}/)?.[1] || '';
// const insightCardHoverRule = css.match(/\.insight-card:hover\s*\{([\s\S]*?)\}/)?.[1] || '';
// const contactMethodRule = css.match(/\.contact-method\s*\{([\s\S]*?)\}/)?.[1] || '';

// describe('Contact Page: Form and Table Fixes', () => {
//   test('should use correct hero title animation', () => {
//     expect(heroTitleRule).not.toMatch(/animation:\s*slideInFromTop/);
//     expect(heroTitleRule).toMatch(/animation:\s*fadeInUp\s+/);
//   });

//   test('should have readable form input focus state', () => {
//     expect(formInputFocusRule).not.toMatch(/color:\s*#e0e0e0/);
//     expect(formInputFocusRule).toMatch(/border-color:\s*(#4a7c23|#2d5016)/i);
//     expect(formInputFocusRule).toMatch(/color:\s*(#000000|#333333)/i);
//   });

//   test('should have form input transitions', () => {
//     const inputRule = css.match(/\.form-group\s+(input|select|textarea)\s*\{([\s\S]*?)\}/)?.[2] || '';
//     expect(inputRule).toMatch(/transition\s*:/);
//   });

//   test('should have readable checkbox label and checked state', () => {
//     expect(checkboxLabelRule).not.toMatch(/color:\s*#f8f9fa/);
//     expect(checkboxLabelRule).toMatch(/color:\s*(#333333|#666666)/i);
//     expect(checkmarkCheckedRule).not.toMatch(/background:\s*#f8f9fa/);
//     expect(checkmarkCheckedRule).toMatch(/background:\s*(#4a7c23|#2d5016)/i);
//   });

//   test('should have button transitions and readable submit hover', () => {
//     expect(btnSubmitRule).toMatch(/transition\s*:/);
//     expect(btnSubmitHoverRule).not.toMatch(/color:\s*#e0e0e0/);
//     expect(btnSubmitHoverRule).toMatch(/color:\s*#ffffff/i);
//   });

//   test('should have controlled reset button hover', () => {
//     expect(btnResetHoverRule).not.toMatch(/transform:.*rotate\(45deg\)/);
//     expect(btnResetHoverRule).toMatch(/transform:\s*translateY\(-[2-5]px\)/);
//   });

//   test('should have readable error message', () => {
//     expect(errorMessageRule).not.toMatch(/color:\s*#f8f9fa/);
//     expect(errorMessageRule).toMatch(/color:\s*#ff4444/i);
//   });

//   test('should have controlled table row hover', () => {
//     expect(tableRowHoverRule).not.toMatch(/transform:\s*scale\(1\.5\)/);
//     expect(tableRowHoverRule).toMatch(/background:\s*#e8f3e0/i);
//   });

//   test('should have readable critical status badge', () => {
//     expect(statusCriticalRule).not.toMatch(/color:\s*#e8e8e8/);
//     expect(statusCriticalRule).toMatch(/color:\s*#ffffff/i);
//     expect(statusCriticalRule).toMatch(/background:\s*#ff4444/i);
//   });

//   test('should have visible insight card hover', () => {
//     expect(insightCardHoverRule).not.toMatch(/opacity:\s*0\s*;/); // Updated regex
//     expect(insightCardHoverRule).toMatch(/opacity:\s*(0\.9|1)/);
//   });

//   test('should have button transitions and readable submit hover', () => {
//     expect(btnSubmitRule).toMatch(/transition\s*:/);
//     expect(btnSubmitHoverRule).not.toMatch(/color:\s*#e0e0e0/);
//     expect(btnSubmitHoverRule).toMatch(/color:\s*#ffffff/i);
// });

//   test('should have controlled reset button hover', () => {
//     expect(btnResetHoverRule).not.toMatch(/transform:.*rotate\(45deg\)/);
//     expect(btnResetHoverRule).toMatch(/transform:\s*translateY\(-[2-5]px\)/);
//   });

//   test('should have readable error message', () => {
//     expect(errorMessageRule).not.toMatch(/color:\s*#f8f9fa/);
//     expect(errorMessageRule).toMatch(/color:\s*#ff4444/i);
//   });

//   test('should have controlled table row hover', () => {
//     expect(tableRowHoverRule).not.toMatch(/transform:\s*scale\(1\.5\)/);
//     expect(tableRowHoverRule).toMatch(/background:\s*#e8f3e0/i);
//   });

//   test('should have readable critical status badge', () => {
//     expect(statusCriticalRule).not.toMatch(/color:\s*#e8e8e8/);
//     expect(statusCriticalRule).toMatch(/color:\s*#ffffff/i);
//     expect(statusCriticalRule).toMatch(/background:\s*#ff4444/i);
//   });

//   test('should have visible insight card hover', () => {
//     expect(insightCardHoverRule).not.toMatch(/opacity:\s*0\s*;/); // Updated regex
//     expect(insightCardHoverRule).toMatch(/opacity:\s*(0\.9|1)/);
//   });

//   test('should have correct contact method animation and transition', () => {
//     expect(contactMethodRule).not.toMatch(/animation:\s*methodReveal/);
//     expect(contactMethodRule).toMatch(/animation:\s*fadeInUp\s+/);
//     expect(contactMethodRule).toMatch(/transition\s*:/);
//   });
// });