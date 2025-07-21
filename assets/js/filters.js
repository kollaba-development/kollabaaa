document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio__item');

  // Masonry ініціалізація
  var grid = document.querySelector('.portfolio__grid');
  var msnry;
  if (grid) {
    imagesLoaded(grid, function() {
      msnry = new Masonry(grid, {
        itemSelector: '.portfolio__item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
      if (msnry) {
        msnry.layout();
      }
    });
  });

  // Бургер-меню
  const burger = document.getElementById('burger-menu');
  if (burger) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
    });
    // Закриття меню при кліку на посилання
    const navLinks = burger.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
      });
    });
  }
}); 