/*
  Project: Yet Another Login Form
  Author: Angie K. Titova
 */

const accordionButtons = document.querySelectorAll('.js-accordion-trigger');

[...accordionButtons].forEach(button => {
  button.addEventListener('click', function(event) {
    const newAriaExpanded = !(this.getAttribute('aria-expanded') == 'true');
    this.setAttribute('aria-expanded', newAriaExpanded);
    this.classList.toggle('accordion__trigger--expanded');
  });
});
