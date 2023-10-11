const list = document.querySelectorAll('#nav__list a');

list.forEach((element) => {
  element.addEventListener('click', () => {
    list.forEach(item => {
      item.classList.remove('active-link');
    });
    element.classList.add('active-link');
  });

});

/* DROPDOWN MENU */
const toggleBtn = document.querySelector('.nav__toggle-btn');
const toggleBtnIcon = document.querySelector('.nav__toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen ? "ri-close-line" : "ri-menu-line"
};