// ------ navigation

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const primaryNavigation = document.querySelector('.primary-navigation');
const userNavigation = document.querySelector('.user-navigation');

mobileMenuToggle.addEventListener('click', () => {
  const visibility = primaryNavigation.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNavigation.setAttribute('data-visible', true);
    userNavigation.setAttribute('data-visible', true);
    mobileMenuToggle.setAttribute('aria-expanded', true);
  } else {
    primaryNavigation.setAttribute('data-visible', false);
    userNavigation.setAttribute('data-visible', false);
    mobileMenuToggle.setAttribute('aria-expanded', false);
  }
});

// ----- dropdown

// listen for when there's a click event in the DOM

document.addEventListener('click', (e) => {

  // check if the element being clicked on is a dropdown-toggle

  const isDropdownToggle = e.target.matches('[data-dropdown-toggle]');

  // if it is not, do nothing

  if (!isDropdownToggle && e.target.closest('[data-dropdown]') !== null) return;

  // if it is, toggle the active class on the closest parent element

  let currentDropdown;
  if (isDropdownToggle) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
    userNavigation.classList.toggle('active');
  }

  // close every other dropdown 

  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  })
})

