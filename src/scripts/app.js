/*
  Project: Yet Another Login Form
  Author: Angie K. Titova
 */

const accordionButtons = document.querySelectorAll('.js-accordion-trigger');

[...accordionButtons].forEach(accordionButton => {
  accordionButton.addEventListener('click', function(event) {
    const buttonPanel = document.getElementById(accordionButton.getAttribute('aria-controls'));
    const newAriaExpanded = !(this.getAttribute('aria-expanded') == 'true');
    
    collapseOtherPanels(this);

    this.setAttribute('aria-expanded', newAriaExpanded);
    buttonPanel.setAttribute('aria-hidden', !newAriaExpanded);
    this.setAttribute('aria-selected', newAriaExpanded);
    this.classList.toggle('accordion__trigger--expanded');
  });
});


function collapseOtherPanels(ele) {
  const otherAccordionButtons = [...accordionButtons].filter(btn => btn !== ele);
  
  otherAccordionButtons.forEach(accordionButton => {
    const buttonPanel = document.getElementById(accordionButton.getAttribute('aria-controls'));
    
    accordionButton.setAttribute('aria-expanded', false);
    accordionButton.setAttribute('aria-selected', false);
    buttonPanel.setAttribute('aria-hidden', true);
    accordionButton.classList.remove('accordion__trigger--expanded');
  });
}