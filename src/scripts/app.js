/*
  Project: Yet Another Login Form
  Author: Angie K. Titova
 */

const accordionButtons = document.querySelectorAll('.js-accordion-trigger');

[...accordionButtons].forEach(button => {
  button.addEventListener('click', function(event) {
    collapseOtherPanels(this);
    const newAriaExpanded = !(this.getAttribute('aria-expanded') == 'true');
    this.setAttribute('aria-expanded', newAriaExpanded);
    this.classList.toggle('accordion__trigger--expanded');
  });
});


function collapseOtherPanels(ele) {
  const otherAccordionButtons = [...accordionButtons].filter(btn => btn !== ele);
  otherAccordionButtons.forEach(button => {
    button.setAttribute('aria-expanded', false);
    button.classList.remove('accordion__trigger--expanded');
  });
}