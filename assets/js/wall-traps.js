// Wall Traps Page Optimization
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('wall_traps')) {
    optimizeWallTrapsPage();
  }
});

function optimizeWallTrapsPage() {
  // Make sections collapsible
  addCollapsibleSections();

  // Add intersection observer for better lazy loading
  addIntersectionObserver();
}

function addCollapsibleSections() {
  const sections = document.querySelectorAll('h2[id]');

  sections.forEach(section => {
    if (section.id === 'on-this-page') return; // Skip table of contents

    // Find the content between this h2 and the next h2
    let nextElement = section.nextElementSibling;
    const content = [];

    while (nextElement && nextElement.tagName !== 'H2') {
      content.push(nextElement);
      nextElement = nextElement.nextElementSibling;
    }

    if (content.length === 0) return;

    // Create collapsible wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'collapsible-section';

    const toggle = document.createElement('button');
    toggle.className = 'section-toggle';
    toggle.textContent = '▼ ';
    toggle.setAttribute('aria-expanded', 'true');

    // Make section title clickable
    section.style.cursor = 'pointer';
    section.prepend(toggle);

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'section-content';

    // Move content into wrapper
    content.forEach(element => {
      contentWrapper.appendChild(element);
    });

    section.parentNode.insertBefore(contentWrapper, section.nextSibling);

    // Add click handler
    section.addEventListener('click', () => toggleSection(toggle, contentWrapper));
  });
}

function toggleSection(toggle, contentWrapper) {
  const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    toggle.textContent = '▶ ';
    toggle.setAttribute('aria-expanded', 'false');
    contentWrapper.style.display = 'none';
  } else {
    toggle.textContent = '▼ ';
    toggle.setAttribute('aria-expanded', 'true');
    contentWrapper.style.display = 'block';

    // Load images when section is expanded
    loadImagesInSection(contentWrapper);
  }
}

function loadImagesInSection(section) {
  const images = section.querySelectorAll('img[data-src]');
  images.forEach(img => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
  });
}

function addIntersectionObserver() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}
