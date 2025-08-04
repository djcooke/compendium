
function storageAvailable() {
  // Simpler version of recommendation here:
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage
  try {
    const storage = window.localStorage;
    if (!storage) {
      return false;
    }
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

function normalizePath(path) {
  if (!path) {
    return '';
  }

  // Handle relative URLs
  if (path.indexOf('./') === 0 || path.indexOf('../') === 0) {
    path = path.substring(1);
  }

  // Ensure leading slash
  if (path.indexOf('/') !== 0) {
    path = '/' + path;
  }

  // Remove trailing .html
  return path.replace(/\.html$/, '');
}

function isHomePage(path) {
  return path === '' || path === '/';
}

function getFloorsetType(currentPath) {
  if (currentPath.indexOf('/potd_floorsets/') !== -1) {
    return 'potd';
  }
  if (currentPath.indexOf('/hoh_floorsets/') !== -1) {
    return 'hoh';
  }
  if (currentPath.indexOf('/eo_floorsets/') !== -1) {
    return 'eo';
  }
  return null;
}
