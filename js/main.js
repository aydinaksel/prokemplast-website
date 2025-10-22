function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function activeLink() {
  // Normalize a path or href to a comparable slug
  const toSlug = (href) => {
    try {
      const url = new URL(href, window.location.href);
      let p = url.pathname;
      // Remove trailing slash (but keep root "/")
      if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
      // Take last segment and strip .html
      let last = p.split('/').pop() || '';
      last = last.replace(/\.html?$/i, '');
      // Treat empty as index
      return last === '' ? 'index' : last.toLowerCase();
    } catch (e) {
      return 'index';
    }
  };

  const currentSlug = toSlug(window.location.pathname);
  const sidebarLinks = document.querySelectorAll('.sidebar__button[href]');

  sidebarLinks.forEach((link) => {
    const linkSlug = toSlug(link.getAttribute('href'));
    if (linkSlug === currentSlug) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  activeLink();
  prefillContactForm();
});

function prefillContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  try {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');
    if (product) {
      const message = document.getElementById('message');
      if (message && !message.value) {
        message.value = `I'd like to order ${product}. Please advise on availability, pricing, and shipping.`;
      }
    }
  } catch (e) {
    // no-op
  }
}
