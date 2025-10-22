function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function activeLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const sidebarLinks = document.querySelectorAll('.sidebar__button[href]');

  sidebarLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (
      linkPath === './' && (currentPath === 'index.html' || currentPath === '') ||
      linkPath.endsWith(currentPath)
    ) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  activeLink();
});
