// COLLAPSIBLE SECTIONS
//arrows
const arrowsTransform = document.querySelectorAll('.js-arrowsTransform');
//section
const collapsibleHidden = document.querySelectorAll('.js-hidden');

function changeCollapsible() {
  collapsibleHidden.classList.toggle('hidden');
  arrowsTransform.classList.toggle('transform');
}

const arrows = document.querySelectorAll('.js-arrow');

arrows.forEach((arrow) => arrow.addEventListener('click', changeCollapsible));
