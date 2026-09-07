// Shared behavior: mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Generic filter-chip behavior: any .filter-bar filters sibling .item-list [data-cat]
  document.querySelectorAll('.filter-bar').forEach(function (bar) {
    var list = document.getElementById(bar.dataset.target);
    if (!list) return;
    var chips = bar.querySelectorAll('.filter-chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var cat = chip.dataset.cat;
        list.querySelectorAll('[data-cat]').forEach(function (row) {
          if (cat === 'all' || row.dataset.cat === cat) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
