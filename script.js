document.addEventListener('DOMContentLoaded', function () {

  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menuToggle');
  const searchBtn = document.getElementById('searchBtn');
  const searchBar = document.getElementById('searchBar');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const loginBtn = document.getElementById('loginBtn');
  const navLinks = document.querySelectorAll('.nav__link');


  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

 
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('nav--open');
  });

  
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--open');
    });
  });

 
  searchBtn.addEventListener('click', function () {
    searchBar.classList.add('search-bar--open');
    searchInput.focus();
  });

  searchClose.addEventListener('click', function () {
    searchBar.classList.remove('search-bar--open');
    searchInput.value = '';
  });

 
  let panier = 0;

  cartBtn.addEventListener('click', function () {
    panier = panier + 1;
    cartCount.textContent = panier;
  });

 
  loginBtn.addEventListener('click', function () {
    alert('Page de connexion à venir !');
  });

 
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.forEach(function (l) {
        l.classList.remove('nav__link--active');
      });
      link.classList.add('nav__link--active');
    });
  });

});
