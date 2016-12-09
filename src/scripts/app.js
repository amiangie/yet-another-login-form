/*
  Project: Yet Another Login Form
  Author: Angie K. Titova
 */

const accordionButtons = document.querySelectorAll('.js-accordion-trigger');

[...accordionButtons].forEach(button => {
  button.addEventListener('click', function(event) {
    const buttonPanel = document.getElementById(button.getAttribute('aria-controls'));
    const newAriaExpanded = !(this.getAttribute('aria-expanded') == 'true');
    
    collapseOtherPanels(this);

    this.setAttribute('aria-expanded', newAriaExpanded);
    buttonPanel.setAttribute('aria-hidden', !newAriaExpanded);
    this.classList.toggle('accordion__trigger--expanded');
  });
});


function collapseOtherPanels(ele) {
  const otherAccordionButtons = [...accordionButtons].filter(btn => btn !== ele);
  
  otherAccordionButtons.forEach(button => {
    const buttonPanel = document.getElementById(button.getAttribute('aria-controls'));
    
    button.setAttribute('aria-expanded', false);
    buttonPanel.setAttribute('aria-hidden', true);
    button.classList.remove('accordion__trigger--expanded');
  });
}