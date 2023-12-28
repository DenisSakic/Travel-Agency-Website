'use strict';

// navbar toggle

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



// header sticky and go to

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

document.addEventListener('DOMContentLoaded', function () {
  const searchBtn = document.querySelector('.search-btn');
  const headerBtnGroup = document.querySelector('.header-btn-group');
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  searchContainer.id = 'searchContainer';

  // Dodajte input polje i gumb za zatvaranje u pretraživač
  searchContainer.innerHTML = `
    <input type="text" id="searchInput" placeholder="Type your search...">
    <button class="close-btn" id="closeBtn" aria-label="Close">
      <ion-icon name="close"></ion-icon>
    </button>
  `;

  // Dodajte pretraživač unutar header-btn-group
  headerBtnGroup.appendChild(searchContainer);

  const searchInput = document.getElementById('searchInput');
  const closeBtn = document.getElementById('closeBtn');

  // Onemogućite automatski prikaz pretraživača prilikom učitavanja stranice
  searchContainer.style.display = 'none';

  // Funkcija za prikazivanje ili sakrivanje pretraživača
  function toggleSearchContainer() {
    if (searchContainer.style.display === 'none') {
      searchContainer.style.display = 'block';
      searchInput.focus();
    } else {
      searchContainer.style.display = 'none';
    }
  }

  // Prikazivanje ili sakrivanje pretraživača kada se klikne na gumb za pretraživanje
  searchBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Spriječava daljnje širenje klika prema gore
    toggleSearchContainer();
  });

  // Sakrij pretraživač kada se klikne na gumb za zatvaranje
  closeBtn.addEventListener('click', function () {
    searchContainer.style.display = 'none';
  });

  // Sakrij pretraživač kada se klikne izvan njega
  document.addEventListener('click', function (event) {
    if (!searchContainer.contains(event.target) && event.target !== searchBtn) {
      searchContainer.style.display = 'none';
    }
  });

  // Dodajte stilizaciju bijelih slova u inputu
  searchInput.style.color = 'white';
  closeBtn.style.display = 'none'
});

