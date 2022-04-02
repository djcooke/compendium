var selectedEnemy = 0;
var selectedJob = window.localStorage.getItem('selectedJob') || 'MCH';

window.onload = function() {
  urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('enemy')) {
    const input = parseInt(urlParams.get('enemy'));
    if (Number.isInteger(input) && input >= 0) {
      selectedEnemy = urlParams.get('enemy')
    }
  }

  selectEnemy(selectedEnemy);
  selectJob(selectedJob);
}

function toggleOpen(id) {
  var element = document.getElementById(id);
  element.classList.toggle('open');
}

function selectNext() {
  selectEnemy(selectedEnemy + 1);
}

function selectPrevious() {
  selectEnemy(selectedEnemy - 1);
}

function selectEnemy(index) {
  var images = document.getElementsByClassName('galleryImage');
  if (!images.length) {
    return;
  }
  var texts = document.getElementsByClassName('galleryItem');
  var notes = document.getElementsByClassName('galleryJobNotes');
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace(' active', '');
    texts[i].className = texts[i].className.replace(' active', '');
    notes[i].className = notes[i].className.replace(' active', '');
  }
  images[index].className += ' active';
  texts[index].className += ' active';
  notes[index].className += ' active';
  selectedEnemy = index;
}

function selectJob(job) {
  if (selectedJob === job) {
    return;
  }
  selectedJob = job;
  var jobSelects = document.getElementsByClassName('jobSelect');
  for (var i = 0; i < jobSelects.length; i++) {
    jobSelects[i].value = job;
  }
  var allJobs = document.getElementsByClassName('jobSpecific');
  for (var i = 0; i < allJobs.length; i++) {
    allJobs[i].className = allJobs[i].className.replace(' active', '');
  }
  var selectedJob = document.getElementsByClassName('job' + job);
  for (var i = 0; i < selectedJob.length; i++) {
    selectedJob[i].className += ' active';
  }
  window.localStorage.setItem('selectedJob', job);
}
