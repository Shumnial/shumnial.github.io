'use strict';
var menuToggler = document.querySelector('.main-nav__toggler');
var mainMenu = document.querySelector('.main-nav__list');
var onTogglerClick = function () {
  mainMenu.classList.toggle('hidden');
}

menuToggler.addEventListener('click', onTogglerClick);
