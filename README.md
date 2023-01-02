# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://github.com/Raphico/dropdown-navigation.github.io
- Live Site URL: https://raphico.github.io/dropdown-navigation.github.io/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

making dropdowns with html, css, and javascript

```html
<div class="dropdown" data-dropdown>
  <button data-dropdown-toggle class="dropdown-toggle">Dropdown</button>
  <div class="dropdown-menu">
    <a href='#'>dropdown content 1</a>
    <a href='#'>dropdown content 2</a>
    <a href='#'>dropdown content 3</a>
    <a href='#'>dropdown content 4</a>
  </div>
</div>
```

```css
.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
}

.dropdown.active > .dropdown-menu {
  display: block;
}

.dropdown.active .dropdown-toggle > img {
  content: url(./assets/icon-arrow-up.svg);
}
```

```js
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
  }

  // close every other dropdown 

  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  })
})


}
```

### Continued development

I need to get more familiar with using grid layouts

### Useful resources

- [how to make dropdowns](https://youtu.be/S-VeYcOCFZw) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@raphico](https://www.frontendmentor.io/profile/raphico)
- instagram = [_raphico]
