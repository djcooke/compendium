let selectedEnemy = 0;
let selectedJob = storageAvailable() ? window.localStorage.getItem('selectedJob') : 'MCH';
let urlParams;

function toggleOpen(id) {
  const element = document.getElementById(id);
  element.classList.toggle('open');

  // Auto-open submenus when opening navigation on mobile
  if (id === 'nav' && element.classList.contains('open')) {
    autoOpenSubmenu();
  }
}

function initializeNavigation() {
  const currentPath = window.location.pathname;
  const normalizedCurrentPath = normalizePath(currentPath);
  const nav = document.getElementById('nav');

  // Highlight current nav item
  const navLinks = nav.getElementsByTagName('a');
  for (let i = 0; i < navLinks.length; i++) {
    const link = navLinks[i];
    const linkPath = link.getAttribute('href');

    if (!linkPath) continue;

    const normalizedLinkPath = normalizePath(linkPath);

    // Match home page or exact path match
    if ((isHomePage(normalizedCurrentPath) && isHomePage(normalizedLinkPath)) ||
      (normalizedCurrentPath === normalizedLinkPath && normalizedLinkPath !== '')) {
      link.classList.add('current');
      break; // found page
    }
  }

  // Auto-open submenu if on a floorset page
  const floorsetType = getFloorsetType(currentPath);
  if (floorsetType) {
    const floorsMenu = document.getElementById('floorsMenu');
    const submenu = document.getElementById(floorsetType + 'Menu');
    submenu.classList.add('open');

    const floorsMainLink = floorsMenu.getElementsByTagName('a')[0];
    floorsMainLink.classList.add('current');
  }
}

function autoOpenSubmenu() {
  const currentPath = window.location.pathname;
  const floorsetType = getFloorsetType(currentPath);

  if (!floorsetType) {
    return;
  }

  const floorsMenu = document.getElementById('floorsMenu');

  const submenu = document.getElementById(floorsetType + 'Menu');
  submenu.classList.add('open');

  const floorsMainLink = floorsMenu.getElementsByTagName('a')[0];
  floorsMainLink.classList.add('current');
}

function selectNext() {
  selectEnemy(selectedEnemy + 1);
}

function selectPrevious() {
  selectEnemy(selectedEnemy - 1);
}

function selectEnemy(index) {
  const images = document.getElementsByClassName('galleryImage');
  if (!images.length) {
    return;
  }

  const texts = document.getElementsByClassName('galleryItem');
  const notes = document.getElementsByClassName('galleryJobNotes');

  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
    texts[i].classList.remove('active');
    notes[i].classList.remove('active');
  }

  images[index].classList.add('active');
  texts[index].classList.add('active');
  notes[index].classList.add('active');
  selectedEnemy = index;
}

function selectJob(job) {
  const jobSelects = document.getElementsByClassName('jobSelect');
  if (!jobSelects || !jobSelects.length
    || !Array.from(jobSelects[0].getElementsByTagName('option')).some(x => x.value === job)) {
    return;
  }

  for (let i = 0; i < jobSelects.length; i++) {
    jobSelects[i].value = job;
  }

  const allJobs = document.getElementsByClassName('jobSpecific');
  for (let i = 0; i < allJobs.length; i++) {
    allJobs[i].classList.remove('active');
  }

  const selectedJobElements = document.getElementsByClassName('job' + job);
  for (let i = 0; i < selectedJobElements.length; i++) {
    selectedJobElements[i].classList.add('active');
  }

  selectedJob = job;
  if (storageAvailable()) {
    window.localStorage.setItem('selectedJob', job);
  }
}

/**
 * Init navigation
 * This runs after the DOM is fully loaded, but before all resources like images are loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  initializeNavigation();
});

/**
 * Init page-specific functionality
 * This runs after the DOM is fully loaded and all resources like images are loaded.
 */
window.onload = function () {
  urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('enemy')) {
    const input = parseInt(urlParams.get('enemy'));
    if (Number.isInteger(input) && input >= 0) {
      selectedEnemy = input;
    }
  }

  if (urlParams.has('job')) {
    const input = urlParams.get('job').toUpperCase();
    const jobSelects = document.getElementsByClassName('jobSelect');
    if (jobSelects && jobSelects.length
      && Array.from(jobSelects[0].getElementsByTagName('option')).some(x => x.value === input)) {
      selectedJob = input;
    }
  }

  selectEnemy(selectedEnemy);
  selectJob(selectedJob);
}
